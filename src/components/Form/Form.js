import React, { useContext, useState } from "react";
import axios from "axios";

import { Form, FormLabel, Button } from "react-bootstrap";

import { GlobalContext } from "../../Context/GlobalState";
import Menu from "../Menu/Menu";

import "./Form.css";

const BusinessForm = () => {
  const { session } = useContext(GlobalContext);

  const [businessName, setBusinessName] = useState("");
  const [businessDomain, setBusinessDomain] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [businessType, setBusinessType] = useState("");
  const [businessMission, setBusinessMission] = useState("");

  const inputBusinessName = (event) => {
    setBusinessName(event.target.value);
  };

  const inputBusinessDomain = (event) => {
    setBusinessDomain(event.target.value);
  };

  const inputPhone = (event) => {
    setPhoneNumber(event.target.value);
  };

  const inputBusinessType = (event) => {
    setBusinessType(event.target.value);
  };

  const inputBusinessMission = (event) => {
    setBusinessMission(event.target.value);
  };

  const submitBtn = (e) => {
    e.preventDefault();

    const newForm = {
      businessName,
      businessDomain,
      phoneNumber,
      businessType,
      businessMission,
      // user: props.location.state.userData.username,
    };

    axios.post("http://localhost:5000/addForm", newForm);
    console.log("success");

    let typeofbusiness = businessType

    switch (typeofbusiness) {
      case "food":
        window.location = "/foodIndustry";
        break;
      default:
        window.location = "/";
    }
  };

  return (
    <div className="formDiv">
      <Menu />
      <h1 className="container formTitle"> Let's Build Your Website! </h1>
      {/* <form action="/addForm" method="POST" className="userForm"> */}
      <form onSubmit={submitBtn} className="userForm">
        <Form.Group>
          <FormLabel className="formLabel companyNameLabel">
            what is your company name?
          </FormLabel>
          <Form.Control
            className="formInput companyNameInput"
            type="text"
            placeholder="company name"
            name="businessName"
            onChange={inputBusinessName}
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
            name="businessDomain"
            onChange={inputBusinessDomain}
          />
        </Form.Group>

        <Form.Group>
          <FormLabel className="formLabel companyPhoneLabel">
            company phone number
          </FormLabel>
          <Form.Control
            className="formInput companyPhoneInput"
            type="number"
            placeholder="phone number"
            name="phoneNumber"
            onChange={inputPhone}
          />
        </Form.Group>

        <Form.Group>
          <FormLabel className="formLabel companyIndustryLabel">
            company industry
          </FormLabel>
          <Form.Control
            name="businessType"
            as="select"
            className="my-1 mr-sm-2 formInput companyIndustryInput "
            custom
            onChange={inputBusinessType}>
            <option value="">choose industry</option>
            <option value="food"> food </option>
            <option value="fashion"> fashion/beauty </option>
            <option value="business"> business </option>
            <option value="tech"> tech </option>
            <option value="e-commerce"> e-commerce </option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="formLabel companyMissionLabel">
            what is your company mission statement ?
          </Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            className="formInput companyMissionInput"
            placeholder="company mission statement (2-4 sentences)"
            name="businessMission"
            onChange={inputBusinessMission}
          />
        </Form.Group>

        <input type="hidden" value={session} name="user"></input>

        <Button
          className="form-submitBtn"
          variant="outline-warning"
          type="submit">
          <b>submit</b>
        </Button>
      </form>
    </div>
  );
};

export default BusinessForm;
