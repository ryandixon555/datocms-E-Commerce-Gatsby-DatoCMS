import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const MyNavBar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="/">Brand Name Here</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="../about">About</Nav.Link>
        <Nav.Link href="../contact">Contact</Nav.Link>
        <Nav.Link href="../store">Store</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form> */}
    </Navbar.Collapse>
  </Navbar>
)
  
export default MyNavBar