import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Products, About, NotFound } from "./pages";
import Layout from "./components/Layout/Layout";
import Product from "./components/Product/Product";
import { Modal } from "./components/Modal/Modal";
import { LoginProvider } from "./hoc/LoginProvider";

const App = () => {
  const location = useLocation();
  let state = location.state;

  return (
    <LoginProvider>
      <Routes location={state?.backgroundLocation || location}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Products />} />
          <Route path='products/:id' element={<Product />} />
          <Route path='about' element={<About />} />
          <Route path='modal' element={<Modal />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path='modal' element={<Modal />} />
        </Routes>
      )}
    </LoginProvider>
  );
};

export default App;
