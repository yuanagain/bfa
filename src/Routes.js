// routes.js
// Yuan Wang

import React from 'react';
// import { Router, Route } from 'react-router';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import App from './App';
import HomePage from './pages/HomePage'


const Routes = (props) => (
  <Router {...props}>
  	<Switch>
	    <Route path="/home/" component={HomePage} />

	    <Redirect exact from="/" to='/home' />
	    <Redirect from="*" to='/404' />
    </Switch>
  </Router>
);

export default Routes;