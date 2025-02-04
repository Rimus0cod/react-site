import React, { Component } from 'react'
import { Button, FormControl, Navbar, Container, Nav, Form } from 'react-bootstrap'
import logo from './logo192.png'

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href="/">
              <img src={logo}
               height={30}
               width={30}
               className="d-inline-block align-top"
               alt='Logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <div className="d-flex w-100 justify-content-between align-items-center">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about"> About us </Nav.Link>
                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                <Nav.Link href="/blog"> Blog </Nav.Link>
              </Nav>

              <Form inline className="d-flex">
                <FormControl 
                  type='text' 
                  placeholder='Search' 
                  className="mr-sm-2" 
                  style={{ width: '250px' }} 
                />
                <Button variant='outline-info' className="ml-2">
                  Search
                </Button>
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
