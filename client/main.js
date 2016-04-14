import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Master from './Master';
import Dashboard from './Dashboard';
import PowerSockets from './PowerSockets';
import Webcams from './Webcams';
import Measurement from './Measurement';
import NotFound from './NotFound';

render(
  <Router history={browserHistory}>
    <Route component={Master} path="/">
      <Route component={Dashboard} path="dashboard" />
      <Route component={PowerSockets} path="power-sockets" />
      <Route component={Webcams} path="webcams" />
      <Route component={Measurement} path="measurement" />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('app')
);
