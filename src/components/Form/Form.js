import React from "react";
import { Form, FormLabel } from "react-bootstrap";

import "./Form.css";

const BusinessForm = () => {
  return (
    <div className="formDiv">
      <h1 className="container formTitle"> Let's Build Your Website! </h1>
      <form action="/addForm" className="userForm">
      <Form.Group>
       <FormLabel className="formLabel companyNameLabel">what is your company name?</FormLabel>
        <Form.Control className="formInput companyNameInput" type="text" placeholder="company name"/>
      </Form.Group>

      <Form.Group>
      <FormLabel className="formLabel companyDomainLabel">what is your domain name?</FormLabel>
        <Form.Control className="formInput companyDomainInput" type="text" placeholder="domain name"/>
      </Form.Group>

      <Form.Group>
      <FormLabel className="formLabel companyPhoneLabel">company phone number</FormLabel>
        <Form.Control className="formInput companyPhoneInput" type="text" placeholder="phone number"/>
      </Form.Group>

      <Form.Group>
      <FormLabel className="formLabel companyIndustryLabel">company industry</FormLabel>
        <Form.Control className="formInput companyIndustryInput" type="text" placeholder="company industry"/>
      </Form.Group>

      </form> 
    </div>
  );
};

export default BusinessForm;
