import React, { Component } from 'react';
import axios from 'axios';
import './profile.css';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            introduction: '',
            whatYouDo: '',
            image: '',
            facebook: '',
            dribble: '',
            linkedin: '',
            behance: '',
            github: '',
            twitter: '',
        }
    }

    async fetchUser() {
        let username = this.props.location.pathname.slice(1);
        const userDetails = await axios.get(`/${username}`)
        let { firstName, lastName, introduction, whatYouDo, image, facebook,
            dribble, linkedin, behance, github, twitter } = userDetails.data.data

        this.setState({
            loading: false,
            firstName, lastName, introduction, whatYouDo, image, facebook,
            dribble, linkedin, behance, github, twitter
        })
        console.log(this.state)

    }
    componentDidMount() {
        this.fetchUser()
    }


    render() {
        return (
            <div className='profile-page'>
                <div className="main-banner" id="home">
                    <div className="banner-info">

                        <div className="middile-inner-con">
                            <div className="tab-main mx-auto">

                                <input id="tab1" type="radio" name="tabs" className="ppmlayouts-sm" checked />
                                <label for="tab1"><span className="fa fa-home" aria-hidden="true"></span>Home</label>

                                <input id="tab2" type="radio" className="ppmlayouts-sm" name="tabs" />
                                <label for="tab2"><span className="fa fa-users" aria-hidden="true"></span> About</label>
                                <input id="tab4" type="radio" className="ppmlayouts-sm" name="tabs" />
                                <label for="tab4"><span className="fa fa-envelope" aria-hidden="true"></span> Contact</label>
                                <section id="content1" className="inner-ppmlayouts-wrap">
                                    <img src={this.state.image} className="admin img-fluid" alt="" />
                                    <h4 className="orange-color">Hi I'm {this.state.firstName} {this.state.lastName}</h4>
                                    <h2 className="orange-color"> Introduction</h2>
                                    <p >{this.state.introduction}</p>

                                </section>
                                <section id="content2" className="inner-ppmlayouts-wrap">
                                    <h3 className=" orange-color head-ppmls">What I do</h3>
                                    <p>{this.state.whatYouDo} </p>
                                </section>
                                <section id="content4" className="inner-ppmlayouts-wrap">
                                    <h3 className="head-ppmls orange-color"> Get In Touch</h3>

                                    <ul className="ppmpvt_social_list list-unstyled mt-4">
                                        <li>
                                            <a href={this.state.facebook} className="ppmlayouts-icon">
                                                <span className="fa fa-facebook-f"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={this.state.email} className="ppmlayouts-icon">
                                                <span className="fa fa-google-plus"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={this.state.github} className="ppmlayouts-icon">
                                                <span className="fa fa-github"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={this.state.twitter} className="ppmlayouts-icon">
                                                <span className="fa fa-twitter"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={this.state.dribble} className="ppmlayouts-icon">
                                                <span className="fa fa-dribbble"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={this.state.behance} className="ppmlayouts-icon">
                                                <span className="fa fa-behance"></span>
                                            </a>

                                        </li>
                                    </ul>
                                </section>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );

    }
}



export default Profile;