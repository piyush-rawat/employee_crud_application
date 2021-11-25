import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const RestrictedRoute = (props) => {
  const { isAuth } = useSelector((state) => state.auth);

  return <>{!isAuth ? <Route {...props} /> : <Redirect to="/dashboard" />}</>;
};

export default RestrictedRoute;
