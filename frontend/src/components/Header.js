import React from 'react'
import logo from "../images/JMO_Logo.png"; 
import { Navbar, Nav, Container, } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {Link} from 'react-scroll'


const Header = () => {

    return (
      <header className="py-4">
        <Navbar
          bg="light"
          variant="light"
          expand="lg"
          collapseOnSelect="true"
          fixed="top"
        >
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand className="NavBar-Brand">JMO</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <LinkContainer to="/">
                  <Link
                    smooth={true}
                    to="home"
                    offset={-100}
                    className="nav-link"
                    href="#"
                  >
                    Home
                  </Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Link
                    smooth={true}
                    to="about"
                    offset={-100}
                    className="nav-link"
                    href="#"
                  >
                    About
                  </Link>
                </LinkContainer>
                <LinkContainer to="/classes">
                  <Link
                    smooth={true}
                    to="classes"
                    offset={-100}
                    className="nav-link"
                    href="#"
                  >
                    Classes
                  </Link>
                </LinkContainer>
                <LinkContainer to="/">
                  <Link
                    smooth={true}
                    to="contact"
                    offset={-100}
                    className="nav-link"
                    href="#"
                  >
                    Contact
                  </Link>
                </LinkContainer>
                <LinkContainer to="/signin">
                    <Link
                      smooth={true}
                      to="signin"
                      offset={-100}
                      className="nav-link"
                      href="#"
                    >
                      <i className="fas fa-user"></i>Log in
                    </Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <a className="navbar-brand py-3 ml-auto" href="/">
            <img className="logo" src={logo} alt="logo..." />
          </a>
        </Navbar>
      </header>
    );
}

export default Header
