import React from "react";
import { Switch, Route } from "react-router-dom";

import PropertyList from "./PropertyList";
import PropertyCreate from "./PropertyCreate";
import PropertyEdit from "./PropertyEdit";
import PropertyShow from "./PropertyShow";

import * as ROUTES from "../../constants/routes";

const PropertyPage = () => (
  <div>
    <Switch>
      <Route exact path={ROUTES.PROPERTIES.href} component={PropertyList} />
      <Route path={ROUTES.PROPERTIES_LIST.href} component={PropertyList} />
      <Route path={ROUTES.PROPERTIES_CREATE.href} component={PropertyCreate} />
      <Route path={ROUTES.PROPERTIES_EDIT.href} component={PropertyEdit} />
      <Route path={ROUTES.PROPERTIES_SHOW.href} component={PropertyShow} />
    </Switch>
  </div>
);

export default PropertyPage;
