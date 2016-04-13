import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Header from './Header';
import Navigation from './Navigation';

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
          <MediaQuery minWidth={769}>
            <div style={styles.content}>
              {this.props.children}
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={768}>
            <div style={styles.contentMobile}>
              {this.props.children}
            </div>
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default Master;


