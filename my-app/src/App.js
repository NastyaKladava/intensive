import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Products, About, NotFound } from "./pages";
import Layout from "./components/Layout/Layout";
import ProductsPage from "./components/ProductPage/ProductPage";
import { AppProvider } from "./hoc/AppProvider";

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="products/:id" element={<ProductsPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppProvider>
  );
};

export default App;
