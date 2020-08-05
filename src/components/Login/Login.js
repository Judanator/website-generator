import React from "react";
import { Form, Button } from "react-bootstrap";
import './Login.css'

const Login = () => {
  return (
    <Form>
      <form action="/login" method="POST" className="login">
      <h1 className="loginTitle"> Please Log In </h1>
        <Form.Group controlId="formBasicEmail" className="signupForm">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="What is your email?" name="email"/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="loginForm">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password"/>
        </Form.Group>

        <Button className="login-submitBtn" variant="outline-warning" type="submit">
          <b>submit</b>
        </Button>
      </form>
    </Form>
  );
};

export default Login;
