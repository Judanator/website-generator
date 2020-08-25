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
              src="https://i.postimg.cc/90KvT8JN/Untitled-design-1.png"
              rounded
            />
          </Col>

          <Col>
            <Image
              className="foodMenu lunch"
              src="https://i.postimg.cc/8CLMVj2F/Untitled-design-2.png"
              rounded
            />
          </Col>
          
          <Col>
            <Image
              className="foodMenu dinner"
              src="https://i.postimg.cc/8Cskh3HT/Untitled-design-3.png"
              rounded
            />
          </Col>
        </Row>
    </div>
  );
};

export default FoodMenu;
