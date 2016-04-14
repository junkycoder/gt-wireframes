import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import deviceSize from './deviceSize';

const styles = {
  wrapper: {
    maxWidth: 1024,
    margin: '0 auto',
    marginLeft: 250,
  },
  content: {
    margin: '48px 72px'
  },
  contentSmall: {
    margin: 24
  },
};

const m = (...s) => Object.assign({}, ...s);

class Master extends Component {

  render() {
    return (
      <div>
        <Header />
        <div style={styles.wrapper}>
          <Navigation />
          <div style={m(
            styles.content,
            this.props.isSmallDevice && styles.contentSmall
          )}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default deviceSize(Master);


