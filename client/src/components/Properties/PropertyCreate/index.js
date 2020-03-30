import React, { useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Loading from "../../Loading/index";
import * as ROUTES from "../../../constants/routes";
import PropertyForm from "../PropertyForm";
import propertyApi from "../../../common/api/properties";
import Error from "../../Error";

const PropertyCreate = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) return <Loading />;

  const onSubmit = async data => {
    setLoading(true);
    try {
      const { data: property } = await propertyApi.create(data);
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
          <PropertyForm onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(PropertyCreate);
