import React, { Component } from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";



class MyNavbar extends Component {
    render() {
        return(
            <div className='primary--nav'>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/First-Website-Using-React">.informat*ve</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/First-Website-Using-React/login">Log In</Nav.Link>
                                <Nav.Link href="/First-Website-Using-React/register">Sign Up</Nav.Link>
                                <NavDropdown title="More" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                              </Nav>

                              <Nav>
                                  <Nav.Link href="/First-Website-Using-React/login">Log In</Nav.Link>
                                  <Nav.Link  
                                      href="/First-Website-Using-React/register">
                                      Sign Up
                                  </Nav.Link>
                                </Nav>
                          </Navbar.Collapse>
                    </Container>
              </Navbar>
            </div>
        );
    }
}

export default MyNavbar;