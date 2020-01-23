import React from 'react';
import { BrowserRouter as Routers, Switch, Redirect, Route } from 'react-router-dom'

import Register from './Components/RegisterComponents/Register'
import Login from './Components/LoginComponents/Login'

import './App.css';

function App() {
  return (
    <Routers>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </Routers>
  );
}

export default App;
