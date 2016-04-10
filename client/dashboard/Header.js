import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';

class Header extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="Grow Place #1"
          showMenuIconButton={false}
        />
      </div>
    );
  }
}

export default Header;

