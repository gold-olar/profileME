import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
// import { GoogleLogin } from 'react-google-login';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // responseGoogle = (response) => {
    //     console.log(response);
    //   }

    render() {
        let redirect = null;
        if (this.props.auth) {
            redirect = <Redirect to="/details" />
        }
        return (
            <div className="login-page">
                <Navbar />
                {redirect}
                <div className="sub-main-pm">
                    <div className="bg-content-pmpvt">
                        <div className="top-content-style">
                        </div>
                        <form action="#" method="post">


                            <span className="login-title">PROFILE<span className="me">ME</span> </span>

                            <p className="errorMessage"> {this.props.errorMessage}</p>

                            <div className="input">
                                <input onChange={(event) => this.props.onInputChange(event, "username")} type="text" placeholder="Username" name="username" required={true} />
                                <span className="fa fa-user"></span>
                            </div>
                            <div className="input">
                                <input onChange={(event) => this.props.onInputChange(event, "email")} type="email" placeholder="Email" name="email" required={true} />
                                <span className="fa fa-envelope"></span>
                            </div>
                            <div className="input">
                                <input onChange={(event) => this.props.onInputChange(event, "password")} type="password" placeholder="Password" name="password" required={true}/>
                                <span className="fa fa-unlock"></span>
                            </div>
                            <div className="input">
                                <input onChange={(event) => this.props.onInputChange(event, "confirmPassword")} type="password" placeholder="Confirm Password" name="Confirmpassword" required={true} />
                                <span className="fa fa-lock"></span>
                            </div>
                            {this.props.loading ? <div className="spinner-grow text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div> : <button onClick={this.props.onSignupFormSubmit} type="submit" className="submit-btn btn btn-light"> SIGN UP</button>}
                        </form>
                        <hr />
                        <p className="or bottom-text-pmls" >Or </p>
                        <div className="other-options">
                            {/* <GoogleLogin
                                clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle} >
                                
                                <span> Signup with Google</span>
                            </GoogleLogin> */}

                           
                        </div>


                    </div>
                </div>

            </div>
        );
    }
}

export default Signup;


