import React, { Component } from 'react';
import Measurements from './Measurements';
import PowerSockets from './PowerSockets';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Measurements />
        <PowerSockets />
      </div>
    );
  }
}

export default Dashboard;
