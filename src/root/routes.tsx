import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RootPage from './RootPage';
import DetailProductPage from './DetailProductPage/DetailProductPage';

const Routes = (): React.ReactElement => (
  <Switch>
    <Route exact path="/" component={RootPage} />
    <Route exact path="/items" component={RootPage} />
    <Route exact path="/items/:productId" component={DetailProductPage} />
  </Switch>
);
export default Routes;
