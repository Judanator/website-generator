import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Menu.css";

const Menu = () => {
  return (
      <Navbar expand="lg" className="menuDiv">
        <Navbar.Brand href="/">
          <img
            src="https://i.postimg.cc/WzV9WrpW/output-onlinejpgtools.png"
            alt="logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/form" className="navItem"> build a site </Nav.Link>
            <Nav.Link href="/blog" className="navItem"> blog </Nav.Link>
            <Nav.Link href="/contact" className="navItem"> contact us </Nav.Link>
            <Nav.Link href="/login" className="navItem"> login </Nav.Link>
            <Nav.Link href="/signup" className="navItem"> signup </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Menu;
