import React from 'react';

export default class FlickrView extends React.Component {

  componentDidMount() {
    console.log("call flickr");
    this.props.createThunkFlickr();
    console.log("end call flickr");
  }

  handleFlickrCall = () => {
    this.props.createThunkFlickr();
  }

  render() {
    console.log("RENDERING FLICKR REACT COMPONENT");
    var photos = this.props.flickr.map(function(photo) {
        var photoThumb = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_q.jpg';
        var photoUrl = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg';
      return (
        <li>
        <a href={photoUrl}>
          <img src={photoThumb} onMouseOver={this.props.onMouseover}/>
        </a>
      </li>
      )
    }.bind(this));
    return (
      <div id="Flickr">
      <input type="button" value="flickr" onClick={this.handleFlickrCall} />
      Flickr:
        {photos}
      </div>
    );
  }
}