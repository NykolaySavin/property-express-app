import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { withRouter, useParams } from "react-router-dom";
import Loading from "../../Loading/index";
import * as ROUTES from "../../../constants/routes";
import PropertyForm from "../PropertyForm";
import useFetchPropertyById from "../hooks/useFetchPropertyById";
import propertyApi from "../../../common/api/properties";
import Error from "../../Error";

const PropertyEdit = ({ history }) => {
  const { propertyId } = useParams();
  const {
    property,
    loading,
    error,
    setLoading,
    setError
  } = useFetchPropertyById(propertyId);
  if (loading) return <Loading />;

  const onSubmit = async data => {
    setLoading(true);
    try {
      const { data: property } = await propertyApi.updateById(propertyId, data);
      history.push(ROUTES.PROPERTIES_LIST.as());
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  return (
    <Container>
      {error && <Error error={error} />}
      <Row>
        <Col>
          <PropertyForm property={property} onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(PropertyEdit);
