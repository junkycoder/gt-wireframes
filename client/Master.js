import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import deviceSize from './deviceSize';
import { m } from './misc';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles = {
  wrapper: {
    maxWidth: 1024,
    margin: '0 auto',
  },
  wrapperLarge: {
    marginLeft: 250,
  },
  content: {
    margin: '48px 72px'
  },
  contentSmall: {
    margin: 24
  },
};

class Master extends Component {

  state = {
    isNavOpen: false
  }

  handleNavOpen(ev) {
    this.setState({ isNavOpen: true });
  }

  handleNavClose() {
    this.setState({ isNavOpen: false });
  }

  render() {
    return (
      <div>
        <Header
          onNavButtonTouchTap={::this.handleNavOpen}
        />
        <div style={m(
          styles.wrapper,
          this.props.isLargeDevice && styles.wrapperLarge
        )}>
          <Navigation
            isOpen={this.state.isNavOpen}
            onNavClose={::this.handleNavClose}
          />
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

