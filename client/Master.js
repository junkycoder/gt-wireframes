import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Dashboard from './dashboard';

const styles = {
  maxWidth: 1024,
  margin: '0 auto',
  marginLeft: 250
};

class Master extends Component {

  render() {
    return (
      <div>
        <Header />
        <div style={styles}>
          <Navigation />
          <div style={{margin: '48px 72px'}}>
            <Dashboard />
          </div>
        </div>
      </div>
    );
  }
}

export default Master;


