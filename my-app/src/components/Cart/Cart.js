import React, { useContext } from "react";
import { AppContext } from "../../hoc/AppProvider";
import styles from "./Cart.module.css";

const Cart = () => {
  const { prodSum, prodQuantity } = useContext(AppContext);

  return (
    <div className={styles.productsCart}>
      <p className='productsText'>
        В корзине <span>{prodQuantity}</span> товаров на сумму{" "}
        <span>{prodSum}</span>$.
      </p>
    </div>
  );
};

export default Cart;
