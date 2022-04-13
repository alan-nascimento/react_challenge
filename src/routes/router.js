import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { DashboardPage } from 'src/pages';
import { routes } from '.';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.USERS} component={DashboardPage} />
        <Route exact path={routes.TODOS} component={DashboardPage} />
        <Route render={() => <Redirect to={routes.USERS} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
