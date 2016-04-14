import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import deviceSize from './deviceSize';
//import { m } from './misc';

class Header extends Component {

  render() {
    return (
      <div>
        <AppBar
          title={!this.props.isLargeDevice && 'GrowModule'}
          showMenuIconButton={!this.props.isLargeDevice}
          onLeftIconButtonTouchTap={this.props.onNavButtonTouchTap}
        />
      </div>
    );
  }
}

export default deviceSize(Header);

