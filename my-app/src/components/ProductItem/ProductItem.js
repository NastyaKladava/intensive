import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { AppContext } from "../../hoc/AppProvider";
import styles from "./ProductItem.module.css";

const ProductItem = ({ linkSrc, title, imageSrc, description, price }) => {
  const [prodInputQuantity, setProdInputQuantity] = useState(0);
  const { isLoggedIn, setSum, setQuantity } = useContext(AppContext);

  const addToCart = (e) => {
    let price = Number(parseFloat(e.target.previousSibling.innerText));
    if (prodInputQuantity > 0) {
      setQuantity((prevState) => +prevState + +prodInputQuantity);
    }
    setSum((prevState) => prevState + price * prodInputQuantity);
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
        {!isLoggedIn ? (
          <span className={styles.productNotice}>
            Чтобы добавить товар в корзину залогиньтесь!
          </span>
        ) : (
          <>
            <Button type='button' handler={addToCart}>
              Добавить в корзину
            </Button>
            <Input
              name='prodCount'
              id='prodCount'
              type='number'
              min='0'
              max='10'
              value={prodInputQuantity}
              handleInputChanges={(e) => setProdInputQuantity(e.target.value)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
