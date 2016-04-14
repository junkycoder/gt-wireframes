import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import deviceSize, { DeviceSizes } from './deviceSize';

console.log(deviceSize, DeviceSizes);

const styles = {
  wrapper: {
    maxWidth: 1024,
    margin: '0 auto',
    paddingLeft: 250,
  },
  content: {
    margin: '48px 72px'
  },
  contentMobile: {
    margin: 24
  },
};

class Master extends Component {

  render() {
    return (

      <div>
        <Header />
        <div style={styles.wrapper}>
          <Navigation />
          <div style={styles.content}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default deviceSize(Master);


