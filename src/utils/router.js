import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import DashBoardPage from '../pages/Dashboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashBoardPage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
