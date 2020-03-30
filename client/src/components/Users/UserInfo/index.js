import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, useParams } from "react-router-dom";

const UserInfo = ({ user }) => {
  return (
    <Container>

      <Row>
        <Col className="text-center">
          {Object.keys(user).map(
            key =>
              user[key] && (
                <p>
                  {key} : {user[key]}
                </p>
              )
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(UserInfo);
