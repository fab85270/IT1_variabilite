import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { ConnectionContext } from "./Context/ConnectionContext";

const PrivateRoute = ({ path, element }) => {
  const { isConnected } = useContext(ConnectionContext);

  console.log(isConnected)
  if (isConnected) {
    return <Route path={path} element={element} />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
