import React from 'react';
import * as firebase from 'firebase/app';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './app.css';
import Todo from './pages/Todo';
import firebaseConfig from './config/firebase';
import Login from './pages/Login';


const App = () => {
  firebase.initializeApp(firebaseConfig);
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/todo' component={Todo} />
          <Route exact path='/login' component={Login} />
          <Redirect to='/login' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
