import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import useFetchProperties from "../hooks/useFetchProperties";
import Loading from "../../Loading";
import * as ROUTES from "../../../constants/routes";
import Error from "../../Error";
import PropertyCard from "../PropertyCard";

const PropertyList = () => {
  const { properties, loading, error, getProperties } = useFetchProperties();
  if (loading) return <Loading />;
  const update = () => {
    getProperties();
  };
  return (
    <Container id='property-list'>
      {error && <Error error={error} />}
      <Row>
        <Col>
          <Link id='property-create-link' to={ROUTES.PROPERTIES_CREATE.as()}>
            <Button className="btn-focal btn-lg">Add new</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          {properties.map(property => (
            <PropertyCard property={property} update={update} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyList;
