import React, { useEffect, useContext} from "react";
import { Navbar, Nav } from "react-bootstrap";
import axios from 'axios'
import { GlobalContext } from "../../Context/GlobalState";

import "./Menu.css";

const Menu = () => {
  const {getSession} = useContext(GlobalContext)

  useEffect(() => {
    axios.get("http://localhost:3000/getSession")
    .then((res) => {
      const sessionData = {
        firstName: res.data.user.firstName,
        id: res.data.user._id,
        email: res.data.user.email
      }

      getSession(sessionData)
    });
  }, []);

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
            <Nav.Link href="/profile" className="navItem"> profile </Nav.Link>
            <Nav.Link href="/foodindustry" className="navItem"> food </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Menu;
