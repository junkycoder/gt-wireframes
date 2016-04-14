import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import deviceSize from './deviceSize';
import { m } from './misc';

const styles = {
  appBarLarge: {
    zIndex: 1101
  }
}

class Header extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="GrowModule"
          showMenuIconButton={!this.props.isLargeDevice}
          style={m(
            this.props.isLargeDevice && styles.appBarLarge
          )}
          onLeftIconButtonTouchTap={this.props.onNavButtonTouchTap}
        />
      </div>
    );
  }
}

export default deviceSize(Header);

