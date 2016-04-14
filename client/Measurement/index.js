import React, { Component } from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

class Measurement extends Component {

  render() {
    return (
      <div>
        <h1>Measurement</h1>
        <Table selectable={false}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Type</TableHeaderColumn>
              <TableHeaderColumn>Value</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>Temperature</TableRowColumn>
              <TableRowColumn>43ºC</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Humidity</TableRowColumn>
              <TableRowColumn>64%</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Measurement;


