import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Login } from "app/login/Login";
import { Characters } from "app/main/Characters";

import { AppRoute } from "./AppRoute.enum";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.home} exact component={Characters} />
      <Route path={AppRoute.login} component={Login} />

      <Redirect to={AppRoute.home} />
    </Switch>
  );
};
