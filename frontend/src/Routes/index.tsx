import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Start from '../pages/Start';
import SignInDev from '../pages/SignInDev';
import SignInClient from '../pages/SignInClient';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/sign-in/dev" exact component={SignInDev} />
      <Route path="/sign-in/client" exact component={SignInClient} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
