import React, { Component } from 'react';
import { Toggle } from 'material-ui';

class PowerSockets extends Component {

  render() {
    return (
      <div className="grid">
        <div className="col-1-4">
          <Toggle label="Socket #1" />
        </div>
        <div className="col-1-4">
          <Toggle label="Socket #2" />
        </div>
        <div className="col-1-4">
          <Toggle label="Socket #3" />
        </div>
        <div className="col-1-4">
          <Toggle label="Socket #4" />
        </div>
      </div>
    );
  }
}

export default PowerSockets;

