import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { addToCart } from "../../toolkitStore/reducers/cartSlice";
import styles from "./ProductItem.module.css";
import { isLogInSelector } from "../../toolkitStore/selectors";

const ProductItem = ({ id, linkSrc, title, imageSrc, description, price }) => {
  const isLogIn = useSelector(isLogInSelector);
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addToCart({ id, title, price }));
  };

  return (
    <div className={styles.productItem}>
      <Link to={linkSrc} className={styles.productLink}>
        <h3 className={styles.productTitle}>{title}</h3>
      </Link>
      <img src={imageSrc} className={styles.productImage} alt={title} />
      <p className={styles.productDescr}>{description}</p>
      <div className={styles.productBuy}>
        <span className={styles.productPrice}>{price}$</span>
        {!isLogIn ? (
          <span className={styles.productNotice}>
            Чтобы добавить товар в корзину залогиньтесь!
          </span>
        ) : (
          <Button type="button" handler={addProductToCart} classtype="primary">
            Добавить в корзину
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
