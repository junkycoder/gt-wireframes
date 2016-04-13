import React, { Component } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';

const linkStyle = {
  textDecoration: 'none'
};

const items = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/power-sockets', label: 'Power Sockets' },
  { path: '/webcams', label: 'Webcams' },
  { path: '/measurementebcams', label: 'Measurement' },
  { path: '/about', label: 'About' },
];

class Navigation extends Component {

  render() {
    return (
      <div>
        <LeftNav
          containerStyle={{zIndex: 1100, paddingTop: 68}}
          open={true}
          >
          {items.map(item => (
            <Link
              to={item.path}
              style={linkStyle}
              key={item.path}
              >
              <MenuItem>{item.label}</MenuItem>
            </Link>
          ))}
        </LeftNav>
      </div>
    );
  }
}

export default Navigation;

