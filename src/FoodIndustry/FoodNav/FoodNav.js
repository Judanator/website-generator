import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./FoodNav.css";

const FoodNav = (props) => {
  return (
    <div>
      <Navbar className="navbarDiv" expand="lg">
        <Navbar.Brand href="/foodIndustry" className="foodLogo">
          {props.companyName}       </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="food-navItem" href="/foodIndustry">
              Home
            </Nav.Link>
            <Nav.Link className="food-navItem" href="/foodIndustry">
              Menus
            </Nav.Link>
            <Nav.Link className="food-navItem" href="/foodIndustry">
              Location
            </Nav.Link>
            <Nav.Link className="food-navItem" href="/foodIndustry">
              Order Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <img
        className="foodGif"
        src="https://i.postimg.cc/cCHH0Khy/foodgif.gif"
        alt="foodgif"
      />
    </div>
  );
};

export default FoodNav;
