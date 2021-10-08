import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
// import Navbar from "react-bootstrap/Navbar";
// import { Nav } from "react-bootstrap";
// import { NavDropdown } from "react-bootstrap";



class MyNavbar extends Component {
    render() {
        return(
            <div className='primary--nav'>
                <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <ReactBootstrap.Container>
                        <ReactBootstrap.Navbar.Brand href="/First-Website-Using-React">.informat*ve</ReactBootstrap.Navbar.Brand>
                        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBootstrap.Nav className="me-auto">
                                <ReactBootstrap.Nav.Link href="/First-Website-Using-React/login">Log In</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="/First-Website-Using-React/register">Sign Up</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.NavDropdown title="More" id="collasible-nav-dropdown">
                                    <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
                                    <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
                                    <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
                                    <ReactBootstrap.NavDropdown.Divider />
                                    <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                                </ReactBootstrap.NavDropdown>
                            </ReactBootstrap.Nav>

                            <ReactBootstrap.Nav>
                                <ReactBootstrap.Nav.Link href="/First-Website-Using-React/login">Log In</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link  
                                    href="/First-Website-Using-React/register">
                                    Sign Up
                                </ReactBootstrap.Nav.Link>
                            </ReactBootstrap.Nav>
                        </ReactBootstrap.Navbar.Collapse>
                    </ReactBootstrap.Container>
                </ReactBootstrap.Navbar>
            </div>
        );
    }
}

export default MyNavbar;