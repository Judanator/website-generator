import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Menu from '../Menu/Menu'
import "./Signup.css";

const Signup = () => {

  return (
    <>
    <Menu/>
    <Form>
      <form action="/signup" method="POST" className="signup">
      <h1 className="signupTitle"> Please Sign up  </h1>
        <Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First name" name="firstName" type="firstName"/>
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last name" name="lastName" type="lastName"/>
          </Col>
        </Row>

        <Form.Group controlId="formBasicEmail" className="signupForm">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="What is your email?" name="email"/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="signupForm">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password"/>
        </Form.Group>

        <Button className="signup-submitBtn" variant="outline-warning" type="submit">
          <b>submit</b>
        </Button>
      </form>
    </Form>
    </>
  );
};

export default Signup;
