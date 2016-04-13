import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';

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
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Master;


