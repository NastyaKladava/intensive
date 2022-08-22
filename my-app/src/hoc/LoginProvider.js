import React, { createContext, useState } from "react";

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setisLogin = (value) => setIsLoggedIn(value);

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setisLogin, isSubmitted, setIsSubmitted }}
    >
      {children}
    </LoginContext.Provider>
  );
};
