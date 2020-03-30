import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import useFetchUsers from "../hooks/useFetchUsers";
import Loading from "../../Loading";
import * as ROUTES from "../../../constants/routes";
import Error from "../../Error";
import UserCard from "../UserCard";

const UserList = () => {
  const { users, loading, error, getUsers } = useFetchUsers();
  if (loading) return <Loading />;
  const update = () => {
    getUsers();
  };
  return (
    <Container id="user-list">
      {error && <Error error={error} />}
      <Row>
        <Col>
          <Link id="user-create-link" to={ROUTES.USERS_CREATE.as()}>
            <Button className="btn-focal btn-lg">Add new</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          {users.map(user => (
            <UserCard user={user} update={update} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default UserList;
