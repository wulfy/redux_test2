import React from 'react';
import FlickrView              from 'components/FlickrView';
import { bindActionCreators } from 'redux';
import * as FlickrActions       from 'actions/FlickerActions';
import { connect }            from 'react-redux';

@connect(state => ({ flickr: state.flickr }))
export default class FlickrContainer extends React.Component {

	render()
	{
		
    	var { flickr, dispatch } = this.props;
    	//todos = todos.todos.concat(todos.message); //décommenter pour que message change le store
		return (
      		<div id="flick-container">
	      		<FlickrView flickr={flickr} {...bindActionCreators(FlickrActions, dispatch)} />
      		</div>
      		);
	}

}