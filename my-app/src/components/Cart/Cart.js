import React from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.productsCart}>
      <p className='productsText'>
        В корзине <span></span> товаров на сумму <span></span>
      </p>
    </div>
  );
};

export default Cart;
