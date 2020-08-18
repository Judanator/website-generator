import React from "react";
import "./SubscribeBlock.css";
import { Form, Button } from "react-bootstrap";

const SubscribeBlock = () => {
  return (
    <div className="subscribeBlockDiv">
      <div className="subscribe-text">
        receive updates for deals <br /> and special events!
      </div>

      <div className="subscribe-email">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SubscribeBlock;
