import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { withFormik, Field } from "formik";
import * as yup from "yup";
import get from "lodash/get";

const schema = yup.object({
  firstName: yup.string().nullable(),
  lastName: yup.string().nullable(),
  email: yup
    .string()
    .email()
    .required(),
  phone: yup.string().nullable()
});

const UserForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  touched,
  isValid,
  errors,
  setFieldValue
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFirstName">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          value={get(values, "firstName") || ""}
          name="firstName"
          onChange={handleChange}
          isInvalid={!!get(errors, "firstName")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "firstName")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          value={get(values, "lastName") || ""}
          name="lastName"
          onChange={handleChange}
          isInvalid={!!get(errors, "lastName")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "lastName")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={get(values, "email") || ""}
          name="email"
          onChange={handleChange}
          isInvalid={!!get(errors, "email")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "email")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone"
          value={get(values, "phone") || ""}
          name="phone"
          onChange={handleChange}
          isInvalid={!!get(errors, "phone")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "phone")}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3 btn-focal btn-lg">
        Save Changes
      </Button>
    </Form>
  );
};

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: values => {
    return values.user || {};
  },
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  },
  validationSchema: schema
})(UserForm);
