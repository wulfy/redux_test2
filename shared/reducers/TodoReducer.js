import Immutable from 'immutable';

const defaultState = new Immutable.List();

function dateToStr(vardate) {
  console.log("transforming" + vardate);
   var yyyy = vardate.getFullYear().toString();
   var mm = (vardate.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = vardate.getDate().toString();
   var ss  = vardate.getSeconds().toString();
   var ii  = vardate.getMinutes().toString();
   var hh  = vardate.getHours().toString();
   return ('' + dd+'/'+mm+'/'+yyyy+' '+hh+':'+ii+':'+ss); // padding
  };

export default function todoReducer(state = defaultState, action) {
  switch(action.type) {
    case 'CREATE_PROMISE_TODO':
      return state.concat(action.res.data.text + ' - ' + dateToStr(new Date(action.date)) + ' -> ' + dateToStr(new Date(action.dateEnd)) );
    case 'CREATE_TODO':
      return state.concat(action.text + ' - ' + dateToStr(new Date(action.date)));
    case 'GET_TODOS':
      return state.concat(action.res.data );
    case 'EDIT_TODO':
      return state.set(action.id, action.text);
    case 'DELETE_TODO':
      return state.delete(action.id);
    default:
      return state;
  }
}
export  function messageReducer(state = defaultState, action) {
  switch(action.type) {
    case 'MESSAGE':
      return state.concat(action.text + ' - HELLO ');
    default:
      return state;
  }
}