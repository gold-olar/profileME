import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import './navbar.css'


class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
  
    render() {
        return (
            <div>
                <Navbar className="navbarr" color="light" light expand="md">
                    <NavbarBrand href="/">PROFILE<span className="me">ME</span></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to='/' className="nav-link"> HOME </NavLink>
                            </NavItem>
                            

                            {this.props.auth ?
                                <NavItem>
                                    <NavLink to='/logout' onClick={this.props.logOut} className="nav-link"> LOGOUT </NavLink>
                                </NavItem>
                                :
                                <Fragment>
                                    <NavItem>
                                        <NavLink to='/signup' className="nav-link"> SIGN UP </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to='/login' className="nav-link"> LOGIN </NavLink>
                                    </NavItem>
                                </Fragment>
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;
