import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Loading";
import UserInfo from "../UserInfo";
import useFetchUserById from "../hooks/useFetchUserById";
import * as ROUTES from "../../../constants/routes";
import Error from "../../Error";

const UserShow = ({ history }) => {
  const { userId } = useParams();
  const { user, loading, error } = useFetchUserById(userId);

  if (loading) return <Loading />;
  return (
    <Container>
      {error && <Error error={error} />}
      <Row>
        <Col className="text-center">
          <h2>User information</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <Link to={ROUTES.USERS_EDIT.as({ userId })}>
            <Button className="btn-focal btn-lg">Edit</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <UserInfo user={user} />
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(UserShow);
