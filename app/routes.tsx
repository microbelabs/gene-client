import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import Wallet from './containers/Wallets';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={Wallet} />
    </Switch>
  </App>
);
