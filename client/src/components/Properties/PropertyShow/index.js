import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Loading";
import PropertyInfo from "../PropertyInfo";
import useFetchPropertyById from "../hooks/useFetchPropertyById";
import * as ROUTES from "../../../constants/routes";
import Error from "../../Error";

const PropertyShow = ({ history }) => {
  const { propertyId } = useParams();
  const { property, loading, error } = useFetchPropertyById(propertyId);

  if (loading) return <Loading />;
  return (
    <Container>
      {error && <Error error={error} />}
      <Row>
        <Col className="text-center">
          <h2>Property information</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <Link to={ROUTES.PROPERTIES_EDIT.as({ propertyId })}>
            <Button className="btn-focal btn-lg">Edit</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <PropertyInfo property={property} />
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(PropertyShow);
