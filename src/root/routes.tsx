import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RootPage from './RootPage';

const Routes = (): React.ReactElement => (
  <Router basename="/">
    <Switch>
      <Route exact path="/" component={RootPage} />
      {/* <Route exact path="/:query" component={Spacecraft} /> */}
      {/* <Route path="/detailProduct/:idProduct" component={Satellites} /> */}
    </Switch>
  </Router>
);
export default Routes;
