import React, { useState, useEffect } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { fetchProducts } from "../../requests/getProducts";
import styles from "./ProductsPage.module.css";

const requestUrl = "https://fakestoreapi.com/products?limit=10";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(requestUrl, setProducts);
  }, []);

  return (
    <>
      <section className='products'>
        <div className={styles.productsContainer}>
          <h2 className={styles.productsTitle}>Перечень наших товаров</h2>
          <div className={styles.productsBox}>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                linkSrc={`/products/${product.id}`}
                imageSrc={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
