import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LoginContext } from "./LoginProvider";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isLoggedIn } = useContext(LoginContext);

  if (!isLoggedIn) {
    return <Navigate to='/modal' state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
