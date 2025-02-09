import React, { Component } from "react";
import {
  Button,
  FormControl,
  Navbar,
  Container,
  Nav,
  Form,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Bookmarks from "../pages/Bookmarks";
import Catalog from "../pages/Сatalog";
import Profile from "../pages/Profile";

import logo from "./logo.webp";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
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
                  <Nav.Link href="/"> Home </Nav.Link>
                  <Nav.Link href="/catalog"> Catalog </Nav.Link>
                </Nav>

                <Form inline className="d-flex">
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
                  <Nav.Link href="/bookmarks"> Bookmarks </Nav.Link>
                  <Nav.Link href="/profile"> Profile </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </>
    );
  }
}
