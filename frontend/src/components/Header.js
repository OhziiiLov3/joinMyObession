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
              <Navbar.Brand>JMO</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
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
                  <Nav.Link>Classes</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Log in
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
            <a className="navbar-brand" href="/">
              <img className="logo" src={logo} alt="logo..." />
            </a>
          </Container>
        </Navbar>
      </header>
    );
}

export default Header
