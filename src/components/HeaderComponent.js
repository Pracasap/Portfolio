import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md" className="nav-bar">  
                    <div className="container">  
                    <NavbarBrand href="/" className="NavbarBrand">Prakash.com</NavbarBrand> 
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-5">
                            <NavItem>
                                <NavLink className="nav-link mr-4" to="/home">
                                <ion-icon name="home" />  &nbsp;Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link mr-4" to="/projects">
                                <ion-icon name="file-tray" /> &nbsp;Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">
                                <ion-icon name="call" /> &nbsp;Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse> 
                    </div>  
                </Navbar> 
            </React.Fragment>
        );
    }
}

export default Header;