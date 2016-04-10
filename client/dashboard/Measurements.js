import React, { Component } from 'react';

const styles = {
  fontSize: 42,
  lineHeight: 2,
  textAlign: 'center'
};

class Measurements extends Component {

  render() {
    return (
      <div className="grid-pad">
        <div className="col-1-2">
          <div style={styles}>36ºC</div>
        </div>
        <div className="col-1-2">
          <div style={styles}>62%</div>
        </div>
      </div>
    );
  }
}

export default Measurements;

