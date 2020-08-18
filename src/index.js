import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home'
import ProtectedRoute from './ProtectedRoute'
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Home} exact />
    <ProtectedRoute path="/app" component={App} exact />
  </BrowserRouter>
,
  document.getElementById('root')
);


