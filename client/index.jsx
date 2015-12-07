//client/index.jsx est un pattern de webpack-dev-server qui sait chercher automatiquement ce JS
//il est nécessaire de définir un JS côté client car le store doit etre généré aussi lorsque le client charge l'app 

import React       from 'react';
import { render }  from 'react-dom';
import { Router }  from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes      from 'routes';
import { createStore, combineReducers } from 'redux';
import { Provider }                     from 'react-redux';
import * as reducers                    from 'reducers';
import { fromJS }                       from 'immutable';
import { applyMiddleware } from 'redux';
import promiseMiddleware   from 'lib/promiseMiddleware';
import {logMiddleware,discardMiddleware,thunkMiddleware}   from 'lib/logMiddleware';



const history = createBrowserHistory();

let initialState = window.__INITIAL_STATE__;

// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux
Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
   });

const reducer = combineReducers(reducers);
const store   = applyMiddleware(promiseMiddleware,logMiddleware,thunkMiddleware)(createStore)(reducer);

render(
  <Provider store={store}>
      <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('react-view')
);