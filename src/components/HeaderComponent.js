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
                <Navbar dark stick="top" expand="md" className="nav-bar">  
                    <div className="container">  
                    <NavbarBrand href="/" className="NavbarBrand">P S</NavbarBrand> 
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-5">
                            <NavItem>
                                <NavLink className="nav-link mr-4" to="/home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link mr-4" to="/projects">
                                    Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">
                                    Contact
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