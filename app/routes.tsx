import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import Wallet from './containers/Wallets';
import Community from './containers/Community';
import Games from './containers/Games';
import Marketplace from './containers/Marketplace';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={Wallet} />
      <Route path="/games" component={Games} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/community" component={Community} />
    </Switch>
  </App>
);
