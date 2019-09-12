import React from 'react';
import { NavLink } from 'react-router-dom';

import Features from '../Features/Features';
import NavigationBar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import './header.css';

const Header = ({auth, logOut}) => {

    return (
        <section>
            <header>
                <NavigationBar auth = {auth} logOut = {logOut} />


                <div className='desc'>
                    <h1>  Grow your audience,  Get more clients.</h1>
                    <p className="desc-p"> Get personalized profile pages.</p>
                    <NavLink to='/signup'> <button type="button" className="btn btn-light">GET STARTED.</button></NavLink>
                </div>

            </header>
            <Features id="features"/>
            <Footer/>
        </section>
    );

}

export default Header;
