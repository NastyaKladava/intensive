import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { getAllProducts } from "../../requests/getProducts";
import { LoginContext } from "../../hoc/LoginProvider";
import styles from "./ProductsPage.module.css";

const requestUrl = "https://api.escuelajs.co/api/v1/products";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { isLoggedIn, setSum, setQuantity } = useContext(LoginContext);

  const addToCart = (e) => {
    let price = Number(parseInt(e.target.previousSibling.innerText));
    setQuantity((prevState) => prevState + 1);
    setSum((prevState) => prevState + price);
  };

  useEffect(() => {
    getAllProducts(requestUrl, setProducts);
  }, []);

  // Хотела из этого большого компонента вынести что-то в небольшие компоненты/компонент,
  // чтоб дальше можно было переиспользовать в Product. Но просто Product и ProdPage
  // отличаюся внутри расположением тегов, и я не стала этого делать.

  // Также хотела сделать для ProdPage ещё одну страницу, чтоб показывать ее, если user залогинился (как мы на занятии делали)
  // но вместо этого я просто проверяю state isLoggenIn и показываю определённые компоненты (корзина и т.д.), если user залогинен, так как их не много.
  //Такой подход нормален?

  return (
    <>
      <section className='products'>
        <div className={styles.productsContainer}>
          <h2 className={styles.productsTitle}>Перечень наших товаров</h2>
          <ul className={styles.productsBox}>
            {products.map((product) => (
              <li key={product.id} className={styles.productItem}>
                <Link
                  to={`/products/${product.id}`}
                  className={styles.productLink}
                >
                  <h3 className={styles.productTitle}>{product.title}</h3>
                </Link>
                <img
                  src={product.images[0]}
                  className={styles.productImage}
                  alt={product.title}
                />
                <div className={styles.productBuy}>
                  <span className={styles.productPrice}>{product.price}$</span>
                  {!isLoggedIn ? (
                    <span className={styles.productNotice}>
                      Чтобы добавить товар в корзину залогиньтесь!
                    </span>
                  ) : (
                    <Button type='button' handler={addToCart}>
                      Добавить в корзину
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
