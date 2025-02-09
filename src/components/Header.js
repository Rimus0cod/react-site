import React, { Component } from "react";
import {
  Button,
  FormControl,
  Navbar,
  Container,
  Nav,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom"; // Используй Link вместо href!
import logo from "./logo.webp";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              style={{ borderRadius: "50%", width: "35px", height: "35px" }}
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="d-flex w-100 justify-content-between align-items-center">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  {" "}
                  Home{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/catalog">
                  {" "}
                  Catalog{" "}
                </Nav.Link>
              </Nav>

              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  style={{ width: "250px" }}
                />
                <Button variant="outline-info" className="ml-2">
                  Search
                </Button>
              </Form>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/bookmarks">
                  {" "}
                  Bookmarks{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  {" "}
                  Profile{" "}
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
