import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../contextAPI";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useUser();
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;