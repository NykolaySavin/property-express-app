import React from "react";
import { Switch, Route } from "react-router-dom";

import UserList from "./UserList";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import UserShow from "./UserShow";

import * as ROUTES from "../../constants/routes";

const UserPage = () => (
  <div>
    <Switch>
      <Route exact path={ROUTES.USERS.href} component={UserList} />
      <Route path={ROUTES.USERS_LIST.href} component={UserList} />
      <Route path={ROUTES.USERS_CREATE.href} component={UserCreate} />
      <Route path={ROUTES.USERS_EDIT.href} component={UserEdit} />
      <Route path={ROUTES.USERS_SHOW.href} component={UserShow} />
    </Switch>
  </div>
);

export default UserPage;
