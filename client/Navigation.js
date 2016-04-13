import React, { Component } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';


class Navigation extends Component {

  render() {
    return (
      <div>
        <LeftNav open={true} containerStyle={{zIndex: 1100, paddingTop: 68}}>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Power Sockets</MenuItem>
          <MenuItem>Webcams</MenuItem>
          <MenuItem>Measurement</MenuItem>
          <MenuItem>About</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

export default Navigation;

