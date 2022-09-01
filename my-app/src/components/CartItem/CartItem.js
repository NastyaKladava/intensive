import React from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import {
  removeItem,
  decrementQty,
  incrementQty,
} from "../../toolkitStore/reducers/cartSlice";
import styles from "./CartItem.module.css";

const CartItem = ({ id, title, price, qty, sum }) => {
  const dispatch = useDispatch();

  if (qty === 0) {
    dispatch(removeItem(id));
  }

  return (
    <div className={styles.cartItem}>
      <span className={styles.cartItemNum}>{id}</span>
      <span className={styles.cartItemTitle}>{title}</span>
      <span className={styles.cartItemPrice}>{price}</span>
      <div className={styles.cartItemBtns}>
        <Button
          type="button"
          handler={() => dispatch(decrementQty(id))}
          classtype="min"
        />
        <span className={styles.cartItemQty}>{qty}</span>
        <Button
          type="button"
          handler={() => dispatch(incrementQty(id))}
          classtype="plus"
        />
      </div>
      <span className={styles.cartItemSum}>{sum}</span>
      <Button
        type="button"
        handler={() => dispatch(removeItem(id))}
        classtype="primary"
      >
        Удалить
      </Button>
    </div>
  );
};

export default CartItem;
