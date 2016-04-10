import React, { Component } from 'react';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';

class PhotoView extends Component {

  render() {
    return (
      <Card>
        <CardMedia>
          <img
            src="/static/photo.jpg"
            width="100%"
          />
        </CardMedia>
      </Card>
    );
  }
}

export default PhotoView;

