import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSelectedProduct } from "../../requests/getProducts";
import Button from "../Button/Button";
import { LoginContext } from "../../hoc/LoginProvider";
import styles from "./Product.module.css";

const requestUrl = "https://api.escuelajs.co/api/v1/products/";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { isLoggedIn, setSum, setQuantity } = useContext(LoginContext);
  const navigate = useNavigate();

  const goBack = () => navigate("/");

  const addToCart = (e) => {
    let price = Number(e.target.previousSibling.innerText);
    setQuantity((prevState) => prevState + 1);
    setSum((prevState) => prevState + price);
  };

  useEffect(() => {
    getSelectedProduct(requestUrl, id).then((result) => setProduct(result));
  }, [id]);

  return (
    <>
      <section className="product">
        <div className={styles.productContainer}>
          <div className={styles.productTop}>
            <Button handler={goBack} className={styles.btn}>
              GoBack
            </Button>
            <h2 className={styles.productTitle}>
              Здесь представлено подробное описание товара
            </h2>
          </div>
          <div className={styles.productBox}>
            <div className={styles.productImage}>
              <img src={product.images} alt={product.title} />
            </div>
            <div className={styles.productAbout}>
              <h3 className={styles.productName}>{product.title}</h3>
              <p className={styles.productDescr}>{product.description}</p>
              <div className={styles.productBuy}>
                <span className={styles.productPrice}>{product.price}</span>
                <div className={styles.productCart}>
                  <Button type="button" handler={addToCart}>
                    Добавить в корзину
                  </Button>
                  {!isLoggedIn && (
                    <span className={styles.productNotice}>
                      Чтобы добавить товар в корзину залогиньтесь!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
