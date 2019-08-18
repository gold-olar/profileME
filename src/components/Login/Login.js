import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Navbar from '../NavBar/Navbar';
import './login.css';



class Login extends Component {
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
                                <input type="email" placeholder="Email" name="email" required />
                                <span className="fa fa-envelope"></span>
                            </div>
                            <div className="input">
                                <input type="password" placeholder="Password" name="password" required />
                                <span className="fa fa-unlock"></span>
                            </div>
                            <button type="submit" className="submit-btn btn btn-light"> LOGIN</button>
                        </form>
                        <NavLink to='/forgot-password' className="bottom-text-pmls">Forgot Password?</NavLink>
                        <hr />
                        <p className="or bottom-text-pmls" >Or Login with</p>
                        <div className="other-options">
                            <a href="http://google.com" className="btn-face m-b-20">
                            <span className="fa fa-facebook"></span>
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

export default Login;
