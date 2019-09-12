import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom'
import Navbar from '../NavBar/Navbar';
import './login.css';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            tryingToAvoidUselessConstructor : '',
        }
    }
    
    render() {
        let redirect = null;
        if(this.props.auth){
            redirect = <Redirect to = "/details"/>
        }
        return (
            <div className="login-page">
                <Navbar />
                {redirect}
                <div className="sub-main-pm">
                    <div className="bg-content-pmpvt">
                        <div className="top-content-style">
                        </div>
                        <form action="#" >
                            <span className="login-title">PROFILE<span className="me">ME</span> </span>
                            <p className="errorMessage"> {this.props.errorMessage}</p>

                            <div className="input">
                                <input  onChange={(event) => this.props.onInputChange(event, "username")} type="text" placeholder="Username" name="username" required />
                                <span className="fa fa-user"></span>
                            </div>
                            <div className="input">
                                <input  onChange={(event) => this.props.onInputChange(event, "password")} type="password" placeholder="Password" name="password" required />
                                <span className="fa fa-unlock"></span>
                            </div>
                            {this.props.loading ? <div className="spinner-grow text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div> : <button onClick={this.props.onLoginFormSubmit} type="submit" className="submit-btn btn btn-light"> LOGIN </button>}
                        </form>
                        <NavLink to='' className="bottom-text-pmls">Forgot Password?</NavLink>
                        <br/>
                        <br/>
                        {/* <hr />
                        <p className="or bottom-text-pmls" >Or Login with</p>
                        <div className="other-options">
                            <a href="http://google.com" className="btn-face m-b-20">
                            <span className="fa fa-facebook"></span>
                             Facebook
                        	</a>

                            <a href="http://google.com" className="btn-google m-b-20">
                            <span className="fa fa-google"></span>  Google
        					</a>
                        </div> */}


                    </div>
                </div>

            </div>
        );
    }
}

export default Login;
