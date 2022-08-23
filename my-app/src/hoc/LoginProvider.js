import React, { createContext, useState } from "react";

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [prodQuantity, setProdQuantity] = useState(0);
  const [prodSum, setProdSum] = useState(0);

  const setisLogin = (value) => setIsLoggedIn(value);
  const setQuantity = (value) => setProdQuantity(value);
  const setSum = (value) => setProdSum(value);

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setisLogin,
        isSubmitted,
        setIsSubmitted,
        prodQuantity,
        setQuantity,
        prodSum,
        setSum,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
