import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

// Components
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/Signup';
import Profile from '../components/Profile/Profile';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' exact component={Header} />
          <Switch>
            <Route path='/signup' exact component={SignUp} />
            <Route path='/login' exact component={Login} />
            <Route path='/:name' component={Profile} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
