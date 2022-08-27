import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [prodQuantity, setProdQuantity] = useState(0);
  const [prodSum, setProdSum] = useState(0);

  const setisLogin = (value) => setIsLoggedIn(value);
  const setQuantity = (value) => setProdQuantity(value);
  const setIsShow = (value) => setIsShowModal(value);
  const setSum = (value) => setProdSum(value);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setisLogin,
        isSubmitted,
        setIsSubmitted,
        isShowModal,
        setIsShow,
        prodQuantity,
        setQuantity,
        prodSum,
        setSum,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
