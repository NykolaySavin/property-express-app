import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, useParams } from "react-router-dom";
import parseAddressLong from "../../../common/parsers/parseAddressLong";

const PropertyInfo = ({ property }) => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          {Object.keys(property).map(key => {
            if (key === "address") {
              return <p>{parseAddressLong(property[key])}</p>;
            } else {
              return (
                property[key] && (
                  <p>
                    {key} : {property[key]}
                  </p>
                )
              );
            }
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(PropertyInfo);
