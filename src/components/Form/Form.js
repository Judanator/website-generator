import React from "react";
import { Form, FormLabel, Button } from "react-bootstrap";

import "./Form.css";

const BusinessForm = () => {
  return (
    <div className="formDiv">
      <h1 className="container formTitle"> Let's Build Your Website! </h1>
      <form action="/addForm" className="userForm">
        <Form.Group>
          <FormLabel className="formLabel companyNameLabel">
            what is your company name?
          </FormLabel>
          <Form.Control
            className="formInput companyNameInput"
            type="text"
            placeholder="company name"
          />
        </Form.Group>

        <Form.Group>
          <FormLabel className="formLabel companyDomainLabel">
            what is your domain name?
          </FormLabel>
          <Form.Control
            className="formInput companyDomainInput"
            type="text"
            placeholder="domain name"
          />
        </Form.Group>

        <Form.Group>
          <FormLabel className="formLabel companyPhoneLabel">
            company phone number
          </FormLabel>
          <Form.Control
            className="formInput companyPhoneInput"
            type="text"
            placeholder="phone number"
          />
        </Form.Group>

        <Form.Group>
          <FormLabel className="formLabel companyIndustryLabel">
            company industry
          </FormLabel>
          <Form.Control
            as="select"
            className="my-1 mr-sm-2 formInput companyIndustryInput "
            custom>
            <option value="">choose industry</option>
            <option value="food"> food </option>
            <option value="fashion"> fashion/beauty </option>
            <option value="business"> business </option>
            <option value="tech"> tech </option>
            <option value="e-commerce"> e-commerce </option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="formLabel companyMissionLabel"> what is your company mission statement ? </Form.Label>
          <Form.Control as="textarea" rows="3" className="formInput companyMissionInput" placeholder="company mission statement (2-4 sentences)"/>
        </Form.Group>

        <Button className="form-submitBtn" variant="outline-warning">
          <b>submit</b>
        </Button>
      </form>
    </div>
  );
};

export default BusinessForm;
