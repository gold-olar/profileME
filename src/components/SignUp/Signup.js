import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Navbar from '../NavBar/Navbar';




class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    onInputChange = (event, inputIdentifier) => {
        console.log(event.target.value);
        this.setState({
            [inputIdentifier] : event.target.value,
        })
    }

    onFormSubmit =(event) => {
        event.preventDefault();
        console.log(this.state);
        // Fetch Api Here
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
                            <div className="input">
                                <input onChange = {(event) => this.onInputChange(event, "username")} type="text" placeholder="Username" name="username" required />
                                <span className="fa fa-user"></span>
                            </div>
                            <div className="input">
                                <input  onChange = {(event) => this.onInputChange(event, "email")} type="email" placeholder="Email" name="email" required />
                                <span className="fa fa-envelope"></span>
                            </div>
                            <div className="input">
                                <input  onChange = {(event) => this.onInputChange(event, "password")} type="password" placeholder="Password" name="password" required />
                                <span className="fa fa-unlock"></span>
                            </div>
                            <div className="input">
                                <input  onChange = {(event) => this.onInputChange(event, "confirmPassword")} type="password" placeholder="Confirm Password" name="Confirmpassword" required />
                                <span className="fa fa-lock"></span>
                            </div>
                            <button  onClick = {this.onFormSubmit} type="submit" className="submit-btn btn btn-light"> SIGN UP</button>
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
