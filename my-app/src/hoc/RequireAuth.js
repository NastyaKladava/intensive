import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AppContext } from "./AppProvider";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isLoggedIn } = useContext(AppContext);

  if (!isLoggedIn) {
    return <Navigate to='/modal' state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;

// !!!Этот компонент не использовала. Просто оставила себе для примера
