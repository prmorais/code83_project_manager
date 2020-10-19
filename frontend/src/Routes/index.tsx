import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Start from '../pages/Start';
import SigninDev from '../pages/SigninDev';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/sign-in/dev" exact component={SigninDev} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
