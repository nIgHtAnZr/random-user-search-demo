import React from 'react';
import { Router as ReactRouter, Route, Switch } from 'react-router';
import PageNotFound from '../components/errorPages/PageNotFound';
import InternalServerError from '../components/errorPages/InternalServerError';
import UserSearch from '../containers/index';
import history from './history';

const Routes = () => {
  return (
    <ReactRouter history={history}>
      <Switch>
        <Route exact path="/" component={UserSearch} />
        <Route
          exact
          path="/internal-server-error"
          component={InternalServerError}
        />
        <Route component={PageNotFound} />
      </Switch>
    </ReactRouter>
  );
};

export default Routes;
