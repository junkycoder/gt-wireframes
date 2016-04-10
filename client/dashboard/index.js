import React, { Component } from 'react';
import Header from './Header';
import PhotoView from './PhotoView';
import Measurements from './Measurements';
import PowerSockets from './PowerSockets';

class Dashboard extends Component {

  render() {
    return (
      <div className="grid-pad">
        <div className="col-1-1">
          <Header />
        </div>
        <div className="col-1-2">
          <PhotoView />
        </div>
        <div className="col-1-2">
          <Measurements />
        </div>
        <div className="col-1-1">
          <PowerSockets />
        </div>
      </div>
    );
  }
}

export default Dashboard;
