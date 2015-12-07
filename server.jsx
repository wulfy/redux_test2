import express                   from 'express';
import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import { RoutingContext, match } from 'react-router';
import createLocation            from 'history/lib/createLocation';
import routes                    from 'routes';
import { createStore, combineReducers } from 'redux';
import { Provider }                     from 'react-redux';
import * as reducers             from 'reducers';
import path                      from 'path';
import { applyMiddleware } from 'redux';
import promiseMiddleware   from 'lib/promiseMiddleware';
import {thunkMiddleware}   from 'lib/logMiddleware';

const app = express();


  app.use(express.static(path.join(__dirname, 'dist')));


app.use((req, res) => {
  const location = createLocation(req.url);
  const reducer  = combineReducers(reducers);
  const store    = applyMiddleware(promiseMiddleware,thunkMiddleware)(createStore)(reducer);

  //matche la location avec le tableau de "routes" et retourne un objet renderProps qui contient l'élément correspondant a la route
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) { 
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if (!renderProps) return res.status(404).end('Not found.');
    
    const InitialComponent = (
      //provider permet de fournir le store au composant 
      <Provider store={store}> 
          <RoutingContext {...renderProps} />
        </Provider>
    );

    const componentHTML = renderToString(InitialComponent);
    const initialState = store.getState();

    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Demo</title>
        <script type="application/javascript">
  window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
</script>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
  </html>    
`
    res.end(HTML);
  });
});

export default app;