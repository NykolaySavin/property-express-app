import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { withRouter, useParams } from "react-router-dom";
import Loading from "../../Loading/index";
import * as ROUTES from "../../../constants/routes";
import UserForm from "../UserForm";
import useFetchUserById from "../hooks/useFetchUserById";
import userApi from "../../../common/api/users";
import Error from "../../Error";

const UserEdit = ({ history }) => {
  const { userId } = useParams();
  const { user, loading, error, setLoading, setError } = useFetchUserById(
    userId
  );
  if (loading) return <Loading />;

  const onSubmit = async data => {
    setLoading(true);
    try {
      const { data: user } = await userApi.updateById(userId, data);
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
          <UserForm user={user} onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(UserEdit);
