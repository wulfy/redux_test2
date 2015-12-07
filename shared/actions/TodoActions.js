import request from 'axios';
const BACKEND_URL = 'https://webtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=1';
export function createPromiseTodo(text) {
  return {
    type: 'CREATE_PROMISE_TODO',
    promise: request.post(BACKEND_URL, { text }),
    date: Date.now()
  }
}

export function createTodo(text) {
  return {
    type: 'CREATE_TODO',
    text,
    date: Date.now()
  }
}

export function messageTodo(text) {
  return {
    type: 'MESSAGE',
    text,
    date: Date.now()
  }
}

export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    id,
    text,
    date: Date.now()
  };
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id
  };
}

export function getTodos() {
  return {
    type: 'GET_TODOS',
    promise: request.get(BACKEND_URL)
  }
}