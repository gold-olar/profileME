import React, { Component } from 'react';
import { NavLink , Route, BrowserRouter} from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import axios from 'axios';
import DetailsForm from '../DetailsForm/DetailsForm';




class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            loading: false,
            errorMessage: '',
        };
    }

    onInputChange = (event, inputIdentifier) => {
        this.setState({
            [inputIdentifier]: event.target.value,
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const { username, email, password } = this.state;
        if (username && email && password) {
            console.log(username, email, password)
            this.setState({ loading: true, errorMessage: " " })

            let chosenPassword = this.state.password;
            let confirmPassword = this.state.confirmPassword;

            if (chosenPassword === confirmPassword) {
                this.setState({ errorMessage: " " });

                axios.post('https://profilemeeapi.herokuapp.com/api/register/', {
                    username, email, password
                })
                    .then(response => {
                       console.log(response.data);
                       
                    })
                    .catch(error => {
                        console.log(error);
                    })
            } else {
                this.setState({
                    errorMessage: "Passwords don't match.",
                    loading: false
                })
            }
        }else{
            return this.setState({errorMessage: "Please fill in required fields."})

        }
    }

    render() {
        return (
            <div className="login-page">
                <Navbar />
                <div className="sub-main-pm">
                    <div className="bg-content-pmpvt">
                        <div className="top-content-style">
                        </div>
                        <form action="#" method="post">

                            <span className="login-title">PROFILE<span className="me">ME</span> </span>

                            <p className="errorMessage"> {this.state.errorMessage}</p>

                            <div className="input">
                                <input onChange={(event) => this.onInputChange(event, "username")} type="text" placeholder="Username" name="username" required />
                                <span className="fa fa-user"></span>
                            </div>
                            <div className="input">
                                <input onChange={(event) => this.onInputChange(event, "email")} type="email" placeholder="Email" name="email" required />
                                <span className="fa fa-envelope"></span>
                            </div>
                            <div className="input">
                                <input onChange={(event) => this.onInputChange(event, "password")} type="password" placeholder="Password" name="password" required />
                                <span className="fa fa-unlock"></span>
                            </div>
                            <div className="input">
                                <input onChange={(event) => this.onInputChange(event, "confirmPassword")} type="password" placeholder="Confirm Password" name="Confirmpassword" required />
                                <span className="fa fa-lock"></span>
                            </div>
                            {this.state.loading ? <div className="spinner-grow text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div> : <button onClick={this.onFormSubmit} type="submit" className="submit-btn btn btn-light"> SIGN UP</button>}
                        </form>
                        <NavLink to='/forgot-password' className="bottom-text-pmls">Forgot Password?</NavLink>
                        <hr />
                        <p className="or bottom-text-pmls" >Or Sign up with</p>
                        <div className="other-options">
                            <a href="http://google.com" className="btn-face m-b-20">
                                <span className="fa fa-facebook-f"></span>
                                Facebook
                        	</a>

                            <a href="http://google.com" className="btn-google m-b-20">
                                <span className="fa fa-google"></span>  Google
        					</a>
                        </div>


                    </div>
                </div>

            </div>
        );
    }
}

export default Signup;
