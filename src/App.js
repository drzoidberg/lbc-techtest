import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RegisterView from './views/RegisterView/RegisterView';

import uuid from './lib/generateUuid';

// preparing App component for accepting a list of different routes
const routesList = [
  { key: uuid(), exact: false, path: '/register', component: RegisterView },
  { key: uuid(), exact: false, path: '/', component: RegisterView }, // in this test, we want to be sure every route redirects to the Register view
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {routesList.map((route) => (
            <Route key={route.key} exact={route.exact} path={route.path}>
              {route.component()}
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
