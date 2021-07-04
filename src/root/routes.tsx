import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RootPage from './RootPage';
import DetailProductPage from './DetailProductPage/DetailProductPage';

const Routes = (): React.ReactElement => (
  <Router basename="/">
    <Switch>
      <Route exact path="/" component={RootPage} />
      {/* <Route exact path="/:query" component={Spacecraft} /> */}
      <Route path="/detailProduct/:idProduct" component={DetailProductPage} />
    </Switch>
  </Router>
);
export default Routes;
