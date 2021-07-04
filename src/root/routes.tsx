import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RootPage from './RootPage';
import DetailProductPage from './DetailProductPage/DetailProductPage';

const Routes = (): React.ReactElement => (
  <Switch>
    <Route exact path="/" component={RootPage} />
    <Route path="/detailProduct/:idProduct" component={DetailProductPage} />
  </Switch>
);
export default Routes;
