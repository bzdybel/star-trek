import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Login } from "app/login/Login";
import { Characters } from "app/main/Characters";
import { CharacterDetails } from "app/components/CharacterDetails";
import { AppRoute } from "../routing/AppRoute.enum";
import { useProfile } from "./Authcontext";

export const App = () => {
  const auth = useProfile({
    login: localStorage.getItem("login"),
    password: localStorage.getItem("password"),
    token: localStorage.getItem("token"),
  });
  if (auth) {
    return <AuthenticatedApp />;
  }
  return <UnathenticatedApp />;
};

function AuthenticatedApp() {
  return (
    <Switch>
      <Route path={AppRoute.characters} exact component={Characters} />
      <Route path={`${AppRoute.character}/:id`} component={CharacterDetails} />
      <Redirect to={AppRoute.characters} />
    </Switch>
  );
}

function UnathenticatedApp() {
  return (
    <Switch>
      <Route path={AppRoute.home} component={() => <Login />} />
    </Switch>
  );
}
