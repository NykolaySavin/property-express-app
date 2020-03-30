import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { withFormik, Field } from "formik";
import * as yup from "yup";
import get from "lodash/get";
import userApi from "../../../common/api/users";
import SelectInput from "../../Form/SelectInput";

const schema = yup.object({
  ownerId: yup.string().required(),
  livingArea: yup
    .number()
    .min(0)
    .nullable(),
  buildingArea: yup
    .number()
    .min(0)
    .nullable(),
  yearAltered: yup
    .number()
    .min(0)
    .nullable(),
  yearBuilt: yup
    .number()
    .min(0)
    .nullable(),
  bathroomsTotal: yup
    .number()
    .min(0)
    .nullable(),
  bedroomsTotal: yup
    .number()
    .min(0)
    .nullable(),
  address: yup
    .object({
      street: yup.string().required(),
      city: yup.string().required(),
      city_district: yup.string().required(),
      country: yup.string().required(),
      house_number: yup.string().required(),
      postcode: yup.string().required()
    })
    .required()
});

const PropertyForm = ({
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
      <Form.Group controlId="formStreet">
        <Form.Label>Street</Form.Label>
        <Form.Control
          type="text"
          placeholder="Street"
          value={get(values, "address.street") || ""}
          name="address.street"
          onChange={handleChange}
          isInvalid={!!get(errors, "address.street")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "address.street")}
        </Form.Control.Feedback>
      </Form.Group>
      <Row>
        <Col>
          <Form.Group controlId="formHouseNumber">
            <Form.Label>House number</Form.Label>
            <Form.Control
              type="text"
              placeholder="House number"
              value={get(values, "address.house_number") || ""}
              name="address.house_number"
              onChange={handleChange}
              isInvalid={!!get(errors, "address.house_number")}
            />
            <Form.Control.Feedback type="invalid">
              {get(errors, "address.house_number")}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formPostcode">
            <Form.Label>Postcode</Form.Label>
            <Form.Control
              type="text"
              placeholder="Postcode"
              value={get(values, "address.postcode") || ""}
              name="address.postcode"
              onChange={handleChange}
              isInvalid={!!get(errors, "address.postcode")}
            />
            <Form.Control.Feedback type="invalid">
              {get(errors, "address.postcode")}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formCityDistrict">
        <Form.Label>City district</Form.Label>
        <Form.Control
          type="text"
          placeholder="City district"
          value={get(values, "address.city_district") || ""}
          name="address.city_district"
          onChange={handleChange}
          isInvalid={!!get(errors, "address.city_district")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "address.city_district")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="City"
          value={get(values, "address.city") || ""}
          name="address.city"
          onChange={handleChange}
          isInvalid={!!get(errors, "address.city")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "address.city")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          placeholder="Country"
          value={get(values, "address.country") || ""}
          name="address.country"
          onChange={handleChange}
          isInvalid={!!get(errors, "address.country")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "address.country")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formLivingArea">
        <Form.Label>Living area</Form.Label>
        <Form.Control
          type="number"
          placeholder="Living area"
          value={get(values, "livingArea") || 0}
          name="livingArea"
          onChange={handleChange}
          isInvalid={!!get(errors, "livingArea")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "livingArea")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBuildingArea">
        <Form.Label>Building area</Form.Label>
        <Form.Control
          type="number"
          placeholder="Building area"
          value={get(values, "buildingArea") || 0}
          name="buildingArea"
          onChange={handleChange}
          isInvalid={!!get(errors, "buildingArea")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "buildingArea")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formYearBuilt">
        <Form.Label>Year built</Form.Label>
        <Form.Control
          type="number"
          placeholder="Year built"
          value={get(values, "yearBuilt") || 0}
          name="yearBuilt"
          onChange={handleChange}
          isInvalid={!!get(errors, "yearBuilt")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "yearBuilt")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formYearAltered">
        <Form.Label>Year altered</Form.Label>
        <Form.Control
          type="number"
          placeholder="Year altered"
          value={get(values, "yearAltered") || 0}
          name="yearAltered"
          onChange={handleChange}
          isInvalid={!!get(errors, "yearAltered")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "yearAltered")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBathroomsTotal">
        <Form.Label>Number of bathrooms</Form.Label>
        <Form.Control
          type="number"
          placeholder="Number of bathrooms"
          value={get(values, "bathroomsTotal") || 0}
          name="bathroomsTotal"
          onChange={handleChange}
          isInvalid={!!get(errors, "bathroomsTotal")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "bathroomsTotal")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBedroomsTotal">
        <Form.Label>Number of bedrooms</Form.Label>
        <Form.Control
          type="number"
          placeholder="Number of bedrooms"
          value={get(values, "bedroomsTotal") || 0}
          name="bedroomsTotal"
          onChange={handleChange}
          isInvalid={!!get(errors, "bedroomsTotal")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "bedroomsTotal")}
        </Form.Control.Feedback>
      </Form.Group>
      <SelectInput
        optionName={"email"}
        fetch={userApi.getAll}
        formError={get(errors, "ownerId")}
        name={`ownerId`}
        onChange={setFieldValue}
        initialValue={get(values, `ownerId`) || ""}
        title="Owner"
      />
      <Button
        id="property-submit"
        variant="primary"
        type="submit"
        className="mt-3 btn-focal btn-lg"
      >
        Save Changes
      </Button>
    </Form>
  );
};

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: values => {
    return values.property || {};
  },
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  },
  validationSchema: schema
})(PropertyForm);
