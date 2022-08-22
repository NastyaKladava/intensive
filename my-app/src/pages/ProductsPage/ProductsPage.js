import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { getAllProducts } from "../../requests/getProducts";
import { LoginContext } from "../../hoc/LoginProvider";
import styles from "./ProductsPage.module.css";

const requestUrl = "https://api.escuelajs.co/api/v1/products";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    getAllProducts(requestUrl).then((result) => setProducts(result));
  }, []);

  return (
    <>
      <section className='products'>
        <div className={styles.productsContainer}>
          <h2 className={styles.productsTitle}>Our Products</h2>
          <ul className={styles.productsBox}>
            {products.map((product) => (
              <li key={product.id} className={styles.productItem}>
                <Link
                  to={`/products/${product.id}`}
                  className={styles.productLink}
                >
                  <h3 className={styles.productTitle}>{product.title}</h3>{" "}
                </Link>
                <img
                  src={product.images[0]}
                  className={styles.productImage}
                  alt={product.title}
                />
                <span>{product.price}</span>
                <Button>Добавить в корзину</Button>
                {isLoggedIn ? (
                  <></>
                ) : (
                  <span>Чтобы добавить товар в корзину залогиньтесь!</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
