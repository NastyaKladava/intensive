import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Products, About, NotFound } from "./pages";
import Layout from "./components/Layout/Layout";
import ProductsPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Products />} />
        <Route path="products/:id" element={<ProductsPage />} />
        <Route path="about" element={<About />} />
        <Route path="modal" element={<Modal />} />
        <Route
          path="cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
