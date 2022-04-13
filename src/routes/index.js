import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { DashboardPage } from 'src/pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users" component={DashboardPage} />
        <Route exact path="/todos" component={DashboardPage} />
        <Route render={() => <Redirect to="/users" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
