import React from 'react'
import logo from "../images/JMO_Logo.png"; 
import { Navbar, Nav, Container, Row, } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg" collapseOnSelect="true">
  <Container>
    <Navbar.Brand href="/">JMB</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/classes">Classes</Nav.Link>
        <Nav.Link href="/login"><i className="fas fa-user"></i>Log in</Nav.Link>
      </Nav>
    </Navbar.Collapse>
     <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo..." /></a>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
