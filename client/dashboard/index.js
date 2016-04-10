import React, { Component } from 'react';
import Header from './Header';
import PhotoView from './PhotoView';
import Measurements from './Measurements';
import PowerSockets from './PowerSockets';

const styles = {
  maxWidth: 1024,
  margin: '0 auto'
};

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="grid-pad" style={styles}>
          <div className="col-1-2">
            <PhotoView />
          </div>
          <div className="col-1-2">
            <Measurements />
            <PowerSockets />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
