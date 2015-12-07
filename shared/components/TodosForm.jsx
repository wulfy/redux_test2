import React from 'react';
export default class TodosForm extends React.Component {
  handlePromiseSubmit = () => {
    let node = this.refs['todo-input'];
    
    this.props.createPromiseTodo(node.value);
    
    node.value = '';
  }
  handleSubmit = () => {
    let node = this.refs['todo-input'];
    
    this.props.createTodo(node.value);
    
    node.value = '';
  }

handleMessageSubmit = () => {
    let node = this.refs['todo-input'];
    
    this.props.messageTodo(node.value);
    
    node.value = '';
  }

  render() {
    return (
      <div id="todo-form">
        <input type="text" placeholder="type todo" ref="todo-input" />
        <input type="submit" value="promise OK!" onClick={this.handlePromiseSubmit} />
        <input type="submit" value="OK!" onClick={this.handleSubmit} />
        <input type="submit" value="MESSAGE!" onClick={this.handleMessageSubmit} />
      </div>
    );
  }
}