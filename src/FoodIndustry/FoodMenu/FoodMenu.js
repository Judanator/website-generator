import React from "react";
import { Image, Col, Row, Container } from "react-bootstrap";

import "./FoodMenu.css";

const FoodMenu = () => {
  return (
    <div>
      <Container className="foodMenuDiv">
        <Image
          src="https://i.postimg.cc/xdLrLRWY/1102x250.png"
          className="image"
          fluid
        />
              </Container>

        <Row className="foodRow">
          <Col md={6}>
            <Image className="foodMenu" src="https://i.postimg.cc/L4gHsts9/lunch.jpg" rounded />
          </Col>

          <Col md={6}>
            <Image className="foodMenu" src="https://i.postimg.cc/L4gHsts9/lunch.jpg" rounded />
          </Col>

          <Col md={6}>
            <Image className="foodMenu" src="https://i.postimg.cc/L4gHsts9/lunch.jpg" rounded />
          </Col>
        </Row>
        </div>
  );
};

export default FoodMenu;
