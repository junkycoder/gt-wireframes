import React, { Component } from 'react';
import { Toggle } from 'material-ui';

const sockets = [
  { id: 1, label: 'Socket #1', value: true },
  { id: 2, label: 'Socket #3', value: false },
  { id: 4, label: 'Socket #4', value: false },
  { id: 5, label: 'Socket #5', value: true },
];

class PowerSockets extends Component {

  render() {
    return (
      <div>
        <h1>Power Sockets</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        {sockets.map(socket => (
          <Toggle
            key={socket.id}
            label={socket.label}
            labelPosition="right"
            style={{ marginTop: 20 }}
            toggled={socket.value}
          />
        ))}
      </div>
    );
  }
}

export default PowerSockets;


