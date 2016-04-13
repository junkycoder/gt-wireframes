import React, { Component } from 'react';
import Header from './Header';
import PhotoView from './PhotoView';
import Measurements from './Measurements';
import PowerSockets from './PowerSockets';
import Navigation from './Navigation';

const styles = {
  maxWidth: 1024,
  margin: '0 auto',
  marginLeft: 250
};

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Header />
        <div style={styles}>
          <Navigation />
          <div style={{margin: '48px 72px'}}>
            <PhotoView />
            <Measurements />
            <PowerSockets />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
