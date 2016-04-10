import React, { Component } from 'react';
import { AppBar } from 'material-ui';

class Application extends Component {

  render() {
    return (
      <div>
        <div className="grid-pad">
          <div className="col-1-1">
            <h1>Grow Place #1</h1>
          </div>
          <div className="col-1-2">
            <img src="/static/photo.jpg" width="100%" />
          </div>
          <div className="col-1-2">
            36 ªC
            62%
          </div>
        </div>
      </div>
    );
  }
}

export default Application;
