import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import UserInfo from "../UserInfo";
import Loading from "../../Loading";
import userApi from "../../../common/api/users";
import * as ROUTES from "../../../constants/routes";
import Error from "../../Error";

const UserCard = ({ user, update }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  if (loading) return <Loading />;
  const handleDelete = async () => {
    setLoading(true);
    try {
      await userApi.deleteById(user.id);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
    update();
  };
  return (
    <Container id="user-card" className="border-dark border">
      {error && <Error error={error} />}
      <UserInfo user={user} />
      <Row>
        <Col xs={12} sm={12} lg={4} md={4}>
          <Link
            id="user-edit-link"
            to={ROUTES.USERS_EDIT.as({ userId: user.id })}
          >
            <Button className="btn-focal btn-lg">Edit</Button>
          </Link>
        </Col>
        <Col xs={12} sm={12} lg={4} md={4}>
          <Link to={ROUTES.USERS_SHOW.as({ userId: user.id })}>
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

export default UserCard;
