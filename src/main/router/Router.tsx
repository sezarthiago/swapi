import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Master from '../../presentation/pages/master/Master';
import makeHome from '../factories/pages/home/HomeFactory';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/master">
          <Master />
        </Route>
        <Route path="/" component={makeHome} />
      </Switch>
    </BrowserRouter>
  );
}
