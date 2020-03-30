import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../Header";
import UsersPage from "../Users";
import PropertiesPage from "../Properties";

import * as ROUTES from "../../constants/routes";

import NotFoundPage from "../NotFound";

const App = () => (
  <Router>
    {" "}
    <Route component={Header} />
    <Container fluid={true}>
      <Row>
        <Col>
          {" "}
          <Switch>
            <Route path={"/"} component={UsersPage} exact />
            <Route
              path={ROUTES.USERS.href}
              component={UsersPage}
            />
            <Route
              path={ROUTES.PROPERTIES.href}
              component={PropertiesPage}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Col>
      </Row>
    </Container>
  </Router>
);

export default App;
