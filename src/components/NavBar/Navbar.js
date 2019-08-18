import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'

const NavBar = () => {

    return (
        <div className='navigation-bar'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">PROFILE<span className="me">ME</span> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <NavLink to='/' className="nav-link"> Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/login' className="nav-link"> Login </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to='/signup' className="nav-link">Sign Up </NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );

}

export default NavBar;
