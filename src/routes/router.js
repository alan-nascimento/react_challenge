import React, { lazy, Suspense } from 'react';
import { CircularProgress } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { routes } from '.';

const Dashboard = lazy(() => import('src/pages/dashboard/dashboard'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path={routes.USERS} component={Dashboard} />
          <Route exact path={routes.TODOS} component={Dashboard} />
          <Route render={() => <Redirect to={routes.USERS} />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
