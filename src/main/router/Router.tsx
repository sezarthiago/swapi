import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import makeHome from '../factories/pages/home/HomeFactory';
import makeMaster from '../factories/pages/master/MasterFactory';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/master/:master" component={makeMaster} />
        <Route path="/" component={makeHome} />
      </Switch>
    </BrowserRouter>
  );
}
