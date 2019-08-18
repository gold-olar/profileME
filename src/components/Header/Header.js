import React from 'react';
import {NavLink} from 'react-router-dom';

import NavBar from '../NavBar/Navbar';
import './header.css';

const Header = ()=> {
  
    return (
     <header>
            <NavBar/>
        

        <div className= 'desc'>
                <h1>  Grow your audience,  Get more clients.</h1>
                <p className="desc-p"> Get personalized profile pages.</p>
               <NavLink to='/signup'> <button type="button" class="btn btn-light">GET STARTED.</button></NavLink>
        </div>
     </header>
    );

}

export default Header;
