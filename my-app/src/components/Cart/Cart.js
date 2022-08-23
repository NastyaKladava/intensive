import React, { useContext } from "react";
import { LoginContext } from "../../hoc/LoginProvider";
import styles from "./Cart.module.css";

const Cart = () => {
  const { prodSum, prodQuantity } = useContext(LoginContext);

  return (
    <div className={styles.productsCart}>
      <p className="productsText">
        В корзине <span>{prodQuantity}</span> товаров на сумму{" "}
        <span>{prodSum}</span>
      </p>
    </div>
  );
};

export default Cart;
