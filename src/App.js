import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
import {
  Switch
}from "react-router";
*/
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import ChatPage from './components/ChatPage/ChatPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={ChatPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
    </Router> 
  );
}

export default App;
