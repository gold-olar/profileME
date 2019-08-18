import React, { Component } from 'react';
import './profile.css';
import avatar from  './Avatar.jpg';

class Profile extends Component {
    user = (this.props.location.pathname.slice(1));



    render() {
        return (
            <div className='profile-page'>
                 <div class="main-banner" id="home">
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
                                <img src={avatar} className="admin img-fluid" alt="" />
                                <h4 className="orange-color">Hi I'm Gold Olar</h4>
                                <h2 className="orange-color"> Introduction</h2>
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis mollis arcu, vel vulputate justo consectetur quis. Donec quis fringilla arcu lorem ipsum dolor sit amet nullam. Consequat adipiscing phasellus.</p>

                            </section>
                            <section id="content2" className="inner-ppmlayouts-wrap">
                                <h3 className=" orange-color head-ppmls">What I do</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis mollis arcu, vel vulputate justo consectetur quis. Donec quis fringilla arcu lorem ipsum dolor sit amet nullam. Consequat adipiscing phasellus.
                            Donec cursus nunc ut rhoncus volutpat. Suspendisse dictum volutpat orci sit amet consequat. Duis fermentum urna et ligula lacinia faucibus efficitur non sapien. Nulla cursus arcu sapien. Nulla luctus tellus dapibus erat tincidunt feugiat. Suspendisse potenti lorem ipsum dolor. Magna sed risus bibendum, ullamcorper risus eget, accumsan odio. Ut ornare mi aliquet, ultrices velit vitae tempor augue </p>
                            </section>
                            <section id="content4" className="inner-ppmlayouts-wrap">
                                <h3 className="head-ppmls orange-color"> Get In Touch</h3>
                  
                                <ul className="ppmpvt_social_list list-unstyled mt-4">
                                    <li>
                                        <a href="http://google.com" className="ppmlayouts-icon">
                                            <span className="fa fa-facebook-f"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://google.com" className="ppmlayouts-icon">
                                            <span className="fa fa-facebook-f"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://google.com" className="ppmlayouts-icon">
                                            <span className="fa fa-facebook-f"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://google.com" className="ppmlayouts-icon">
                                            <span className="fa fa-twitter"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://google.com" className="ppmlayouts-icon">
                                            <span className="fa fa-dribbble"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://google.com" className="ppmlayouts-icon">
                                            <span className="fa fa-google-plus"></span>
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
