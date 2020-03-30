import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import PropertyInfo from "../PropertyInfo";
import Loading from "../../Loading";
import propertyApi from "../../../common/api/properties";
import * as ROUTES from "../../../constants/routes";
import Error from "../../Error";

const PropertyCard = ({ property, update }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  if (loading) return <Loading />;
  const handleDelete = async () => {
    setLoading(true);
    try {
      await propertyApi.deleteById(property.id);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
    update();
  };
  return (
    <Container className="border-dark border">
      {error && <Error error={error} />}
      <PropertyInfo property={property} />
      <Row>
        <Col  xs={12} sm={12} lg={4} md={4}>
          <Link id="property-edit-link" to={ROUTES.PROPERTIES_EDIT.as({ propertyId: property.id })}>
            <Button className="btn-focal btn-lg">Edit</Button>
          </Link>
        </Col>
        <Col xs={12} sm={12} lg={4} md={4}>
          <Link to={ROUTES.PROPERTIES_SHOW.as({ propertyId: property.id })}>
            <Button className="btn-focal btn-lg">Show</Button>
          </Link>
        </Col>
        <Col xs={12} sm={12} lg={4} md={4}>
          <Button
            className="btn-focal btn-lg"
            variant="danger"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyCard;
