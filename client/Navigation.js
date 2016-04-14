import React, { Component } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';
import deviceSize from './deviceSize';
import { m } from './misc';

const linkStyle = {
  textDecoration: 'none'
};

const items = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/power-sockets', label: 'Power Sockets' },
  { path: '/webcams', label: 'Webcams' },
  { path: '/measurement', label: 'Measurement' },
  { path: '/about', label: 'About' },
];

const styles = {
  container: {
    paddingTop: 68,
  }
};

class Navigation extends Component {

  handleRequestChange(open) {
    if (!open) {
      this.props.onNavClose();
    }
  }

  render() {
    return (
      <div>
        <LeftNav
          containerStyle={styles.containerStyle}
          docked={!!this.props.isLargeDevice}
          onRequestChange={::this.handleRequestChange}
          open={this.props.isOpen || this.props.isLargeDevice}
        >
          <AppBar
            title="GrowModule"
            showMenuIconButton={false}
          />
          {items.map(item => (
            <Link
              to={item.path}
              style={linkStyle}
              key={item.path}
            >
              <MenuItem onTouchTap={this.props.onNavClose}>
                {item.label}
              </MenuItem>
            </Link>
          ))}
        </LeftNav>
      </div>
    );
  }
}

export default deviceSize(Navigation);

