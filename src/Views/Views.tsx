import * as React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import CounterSync from './CounterSync';
import CounterAsync from './CounterAsync';
import Search from './Search';
import Login from './Login';

const Views = () => (
  <Switch>
    <Route exact={true} path="/counter_sync" component={CounterSync} />
    <Route exact={true} path="/counter_async" component={CounterAsync} />
    <Route exact={true} path="/search" component={Search} />
    <Route exact={true} path="/login" component={Login} />
  </Switch>
);

export default Views;
