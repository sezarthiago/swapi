import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Master from '../pages/master/Master';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/master">
          <Master />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
