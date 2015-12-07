import React from 'react';

export default class AppView extends React.Component {
  render() {
    return (
      <div id="app-view">
        <h1>Todos ludo</h1>

        <hr />

        before child
        {this.props.children} 
        after child
      </div>
    );
  }
}