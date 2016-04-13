import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';

class Header extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="GrowModule"
          showMenuIconButton={false}
          style={{zIndex: 1101}}
        />
      </div>
    );
  }
}

export default Header;

