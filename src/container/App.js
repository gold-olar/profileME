import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import './App.css';
import axios from 'axios';


// Components
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/Signup';
import Profile from '../components/Profile/Profile';
import DetailsForm from '../components/DetailsForm/DetailsForm';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false,
      errorMessage: '',
      auth: false,
    };
  }

  onInputChange = (event, inputIdentifier) => {
    this.setState({
      [inputIdentifier]: event.target.value,
    })
  }


  onSignupFormSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    if (username && email && password) {
      this.setState({ loading: true, errorMessage: " " })

      let chosenPassword = this.state.password;
      let confirmPassword = this.state.confirmPassword;

      if (chosenPassword === confirmPassword) {
        try {
          this.setState({ errorMessage: " " });
          const signUp = await axios.post('http://profilemeeapi.herokuapp.com/api/register/', { username, email, password });

          if (signUp.status === 201) {
            const login = await axios.post('http://profilemeeapi.herokuapp.com/api/login/', { username, password });
            const { Token } = login.data;

            axios.defaults.headers.common['Authorization'] = `Token ${Token}`;
            return this.setState({ auth: true });
          }
        } catch (error) {
          return this.setState({ errorMessage: "There was a problem with Signing up.", loading: false });

        }
      } else {
        this.setState({
          errorMessage: "Passwords don't match.",
          loading: false
        });
      }
    } else {
      return this.setState({ errorMessage: "Please fill in required fields." });

    }
  }

  onLoginFormSubmit = async (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    if (username && password) {
      try {
        this.setState({ loading: true, errorMessage: " " });

        const login = await axios.post('http://profilemeeapi.herokuapp.com/api/login/', { username, password });
        const { Token } = login.data;
        axios.defaults.headers.common['Authorization'] = `Token ${Token}`;
        this.setState({ auth: true });
      } catch (error) {
        this.setState({ loading: false, errorMessage: "Invalid Username or Password" })

      }

    } else {
      return this.setState({ errorMessage: "Please fill in required fields." });
    }
  }

  logOut = () => {
    this.setState({
      auth: false,
      loading: false,
      username: '',
      password: '',
      email: '',
      errorMessage: '',
      confirmPassword: '',
    })
  }



  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Route path='/' exact render={(props) => <Header {...props} auth={this.state.auth} logOut={this.logOut} />} />

          <Switch>

            {this.state.auth ?
              <Route path='/details' exact render={(props) => <DetailsForm {...props} auth={this.state.auth} logOut={this.logOut} />} />
              :
              <Route path='/details' exact render={(props) =>
                <Login
                  {...props} onInputChange={this.onInputChange}
                  onLoginFormSubmit={this.onLoginFormSubmit}
                  loading={this.state.loading}
                  errorMessage={this.state.errorMessage}
                  auth={this.state.auth}
                />} />
            }



            <Route
              path='/signup' exact
              render={(props) =>
                <SignUp {...props} onInputChange={this.onInputChange}
                  onSignupFormSubmit={this.onSignupFormSubmit}
                  loading={this.state.loading}
                  errorMessage={this.state.errorMessage}
                  auth={this.state.auth}
                />
              }
            />

            <Route path='/login' exact render={(props) =>
              <Login
                {...props} onInputChange={this.onInputChange}
                onLoginFormSubmit={this.onLoginFormSubmit}
                loading={this.state.loading}
                errorMessage={this.state.errorMessage}
                auth={this.state.auth}
              />
            } />
            <Redirect from="/logout" to="/login" />
            <Route path='/:name' component={Profile} />
          </Switch>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
