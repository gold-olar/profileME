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
      loading: false,
      auth: false,
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      firstName : '',
      lastName: '',
      introduction: '',
      whatYouDo: '',
      image: '',
      facebook: '',
      dribble: '',
      linkedin :  '',
      behance: '',
      github: '',
      twitter: '',
      token:'',

    };
  }

  onInputChange = (event, inputIdentifier) => {
    this.setState({
      [inputIdentifier]: event.target.value,
    });

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
          const signUp = await axios.post('/register', { username, email, password });
          console.log(signUp)


          if (signUp.data.HttpStatus === 200) {
            console.log('e wan go login');
            const login = await axios.post('/login', { email, password });
            
            const { token } = login.data.data;
            // console.log(token)


            axios.defaults.headers.common['auth'] = token ;
            return this.setState({ auth: true , loading: false, token});
          }else{
            // console.log(signUp.data.message)
            this.setState({
              loading: false, errorMessage: signUp.data.message
            })
          }
        } catch (error) {
          console.log(error);
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

    const { email, password } = this.state;
    if (email && password) {
      try {
        this.setState({ loading: true, errorMessage: " " });
        const login = await axios.post('/login', { email, password });

        if (login.data.status){
          const { token } = login.data.data;
          axios.defaults.headers.common['auth'] = token;
          this.setState({ auth: true , loading:false, token });

        } else {
          this.setState({
            loading: false,
            errorMessage: login.data.message
          })

        } 
      } catch (error) {
        this.setState({ loading: false, errorMessage: "Something went wrong." })
        console.log(error)

      }

    } else {
      return this.setState({ errorMessage: "Please fill in required fields." });
    }
  }

  logOut = () => {
    axios.defaults.headers.common['auth'] = " ";

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

  onDetailsFormSubmit = async (event) => {
    event.preventDefault();
    this.setState({
      loading: true,

    })

    const {  firstName,lastName,introduction,whatYouDo, image, facebook,
      dribble, linkedin, behance, github, twitter,
     token} = this.state;
    const profileDetails = { 
      firstName,lastName,introduction,whatYouDo, image, facebook,
      dribble, linkedin, behance, github, twitter }

     if(firstName && lastName){
      
      const detailsFormResponse = await axios.put('/editProfile', profileDetails, {  headers: { token: token  }, });
      if (detailsFormResponse){
        this.setState({ loading: false, })
        console.log(detailsFormResponse.data);

      }

     }else{
       this.setState({errorMessage: "Please ensure you have filled all required fields."})
     }

  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Route path='/' exact render={(props) => <Header {...props} auth={this.state.auth} logOut={this.logOut} />} />

          <Switch>

            {this.state.auth ?
              <Route path='/details' exact render={(props) => <DetailsForm
                {...props} auth={this.state.auth}
                logOut={this.logOut}
                onInputChange={this.onInputChange}
                loading={this.state.loading}
                onDetailsFormSubmit={this.onDetailsFormSubmit}

              />} />
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
