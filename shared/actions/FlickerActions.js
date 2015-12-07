var superagent = require('superagent');


const BACKEND_URL = 'https://webtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=1';
export function createThunkFlickr() {
  return dispatch =>{superagent
    .get('https://api.flickr.com/services/rest')
    .query({
      method: 'flickr.photos.getRecent',
      api_key: '70dc2298d7ba4669796e5ccbf4e3288a',
      format: 'json',
      nojsoncallback: 1
    })
    .end(function(error, res){
      //console.log('[ACTION] Photos received', res.body.photos.photo.length);
      dispatch({
        res:res.body.photos.photo,
        type:'GET_AGENT_FLICKR',
        date: Date.now()});
    })
    
  }
}