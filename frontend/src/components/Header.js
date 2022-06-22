import React from 'react'
import logo from "../images/JMO_Logo.png"; 
import { Navbar, Nav, Container, Row, } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg" collapseOnSelect="true">
  <Container>
      <LinkContainer to='/'>
    <Navbar.Brand>JMO</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <LinkContainer to='/Home'>
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>  
        <LinkContainer to='/about'>
        <Nav.Link >About</Nav.Link>
        </LinkContainer>
          <LinkContainer to='/classes'>
        <Nav.Link >Classes</Nav.Link>
        </LinkContainer>
         <LinkContainer to='/login'>
        <Nav.Link ><i className="fas fa-user"></i>Log in</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
     <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo..." /></a>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
