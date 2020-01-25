import React from 'react';
import { BrowserRouter as Routers, Switch, Redirect, Route } from 'react-router-dom'
import {ProtectedRoute} from './protectedRoute'

import Register from './Components/RegisterComponents/Register'
import Login from './Components/LoginComponents/Login'
import Home from './Components/HomeComponents/Home'
import Footer from './Components/FooterComponent/Footer'
import Contact from './Components/ContactComponent/Contact'

import './App.css';

function App() {
  return (
    <Routers>
     
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <ProtectedRoute exact path="/" component={Home} />    
        <ProtectedRoute exact path="/contact" component={Contact} />    

      </Switch>
    </Routers>
  );
}

export default App;
