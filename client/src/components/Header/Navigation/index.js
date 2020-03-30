import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Dropdown,
  NavItem
} from "react-bootstrap";

import * as ROUTES from "../../../constants/routes";

const Navigation = props => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="bottom" bg="dark">
      <Navbar.Brand>Property app</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={NavLink} to={ROUTES.USERS.as()}>
              Users
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={ROUTES.PROPERTIES.as()}>
              Properties
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
