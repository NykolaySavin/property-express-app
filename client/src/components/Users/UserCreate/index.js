import React, { useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Loading from "../../Loading/index";
import * as ROUTES from "../../../constants/routes";
import UserForm from "../UserForm";
import userApi from "../../../common/api/users";
import Error from "../../Error";

const UserCreate = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) return <Loading />;

  const onSubmit = async data => {
    setLoading(true);
    try {
      const { data: user } = await userApi.create(data);
      history.push(ROUTES.USERS_LIST.as());
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
          <UserForm onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(UserCreate);
