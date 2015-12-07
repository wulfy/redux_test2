import React from 'react';
import TodosView              from 'components/TodosView';
import TodosForm              from 'components/TodosForm';
import { bindActionCreators } from 'redux';
import * as TodoActions       from 'actions/TodoActions';
import { connect }            from 'react-redux';


//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
//revient à export default connect(state => ({ todos: state.todos }))(TodoApp)
//mapStateToProps => If specified, the component will subscribe to Redux store updates. Any time it updates, mapStateToProps will be called
//mapDispatchToProps => If an object is passed, each function inside it will be assumed to be a Redux action creator. An object with the same function names, but bound to a Redux store, will be merged into the component’s props.
/*
function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch),
    counterActions: bindActionCreators(counterActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)

Le state de state.todos est celui du store?


state.todos (normalement), le state est le store et le todos du state est le reducer (cf index du répertoire reducers qui fait un * import à todos)

on utilise state.todos donc les messages (contenus dans state.message) ne modifient pas le store et donc la vue

autre point flickr view pour le moment est définit dans le composant "home" pluggé sur le connect TODO, il va se refresh donc avec le composant home à
chaque update de todo.
si on veut un refresh séparé il faut prévoir un composant différent ou ailleurs (voir comment faire avec route)
par contre si on met à jour flickr il ne raffraichit pas home

state: state n'est pas utile c'est juste pour voir ce qui est passé comme paramètre , le state du store
*/
@connect(state => ({ todos: state.todos, state: state }))
export default class TodosContainer extends React.Component {

	render()
	{
		
    	var { todos, state, dispatch } = this.props;
    	console.log("STATE RENDERING TODOS CONTAINER: ");
    	console.log(state);
    	//todos = todos.todos.concat(todos.message); //décommenter pour que message change le store
		return (
      		<div id="todo-container">
	      		<TodosView todos={todos} 
		          {...bindActionCreators(TodoActions, dispatch)} />
		        <TodosForm
		          {...bindActionCreators(TodoActions, dispatch)} />
      		</div>
      		);
	}

}