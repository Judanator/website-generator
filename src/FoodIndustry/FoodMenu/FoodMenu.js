import React from "react";
import { Image, Col, Row } from "react-bootstrap";

import "./FoodMenu.css";

const FoodMenu = () => {
  return (
    <div>
        <Row>
          <Col>
            <Image
              className="foodMenu breakfast"
              src="https://i.postimg.cc/jdnQ6SBY/breakfast.jpg"
              rounded
            />
          </Col>

          <Col>
            <Image
              className="foodMenu lunch"
              src="https://i.postimg.cc/L4gHsts9/lunch.jpg"
              rounded
            />
          </Col>
          
          <Col>
            <Image
              className="foodMenu dinner"
              src="https://i.postimg.cc/L4gHsts9/lunch.jpg"
              rounded
            />
          </Col>
        </Row>
    </div>
  );
};

export default FoodMenu;
