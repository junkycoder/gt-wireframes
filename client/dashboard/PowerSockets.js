import React, { Component } from 'react';
import { Toggle } from 'material-ui';

class PowerSockets extends Component {

  render() {
    return (
      <div className="grid-pad">
          <Toggle label="Socket #1" labelPosition="right" />
          <Toggle label="Socket #2" labelPosition="right" />
          <Toggle label="Socket #3" labelPosition="right" />
          <Toggle label="Socket #4" labelPosition="right" />
      </div>
    );
  }
}

export default PowerSockets;

