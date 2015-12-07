import React from 'react';
export default class TodosView extends React.Component {
  componentDidMount() {
    console.log("did mount");
    this.props.getTodos();
  }
  handleDelete = (e) => {
    const id = Number(e.target.dataset.id);
    const text = this.props.todos.get(id);

    if (confirm('Are you sure you want to delete : '+text+'?')) {
        // Equivalent to `dispatch(deleteTodo())`
        this.props.deleteTodo(id);
    } else {
        // Do nothing!
    }
    
    
  }
  handleEdit = (e) => {
    const id  = Number(e.target.dataset.id);
    const val = this.props.todos.get(id);
    
    // For cutting edge UX
    let newVal = window.prompt('', val);
    if(newVal != null)
      this.props.editTodo(id, newVal);
  }
  render() {
    console.log("RENDERING TODO REACT COMPONENT .");
    return (
      <div id="todo-view">
      Liste:
        {
          this.props.todos.map( (todo, index) => {
            return (
              <div key={index}>
                <span>{todo}</span>
              
                <button data-id={index} onClick={this.handleDelete}>
                  X
                </button>
                <button data-id={index} onClick={this.handleEdit}>
                  Edit
                </button>
              </div>
            );
          })
        }
      </div>
    );
  }
}