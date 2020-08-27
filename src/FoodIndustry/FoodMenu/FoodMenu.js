import React from "react";
import { Image, Col, Row } from "react-bootstrap";

import "./FoodMenu.css";
import BreakfastMenu from '../BreakfastMenu/BreakfastMenu'

const FoodMenu = () => {

  return (
    <div>
        <Row>
          <Col>
            <Image
              className="foodMenu breakfast"
              src="https://i.postimg.cc/SKJcvVGr/BREAKFAST-MENU.png"
              rounded
            />
          </Col>

          <Col>
            <Image
              className="foodMenu lunch"
              src="https://i.postimg.cc/d3jzxGRq/BREAKFAST-MENU-1.png"
              rounded
            />
          </Col>
          
          <Col>
            <Image
              className="foodMenu dinner"
              src="https://i.postimg.cc/5Nph5qNg/BREAKFAST-MENU-2.png"
              rounded
            />
          </Col>
        </Row>

        <BreakfastMenu/>
    </div>
  );
};

export default FoodMenu;
