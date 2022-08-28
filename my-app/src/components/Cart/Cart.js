import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { cart, productsFromCart } from "../../toolkitStore/selectors/products";
import { clearCart, getTotals } from "../../toolkitStore/reducers/cartSlice";
import styles from "./Cart.module.css";

const Cart = () => {
  const products = useSelector(productsFromCart);
  const { totalQty, totalSum } = useSelector(cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [products, dispatch]);

  return (
    <section className='cart'>
      <div className={styles.cartContainer}>
        <h2 className={styles.productsCartTitle}>
          Перечень добавленных товаров
        </h2>
        {products.length === 0 ? (
          <p className={styles.productsCartNotice}>
            Корзина пуста, добавьте товары!
          </p>
        ) : (
          <div className={styles.productsCart}>
            <div className={styles.productsCartTop}>
              <span className={styles.cartItemNum}>№</span>
              <span className={styles.cartItemTitle}>Наименование</span>
              <span className={styles.cartItemPrice}>Цена за шт.</span>
              <span className={styles.cartItemQty}>Кол-во</span>
              <span className={styles.cartItemSum}>Сумма за товар</span>
            </div>
            <div className={styles.productsCart}>
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  qty={product.quantity}
                  sum={product.quantity * product.price}
                />
              ))}
            </div>
            <div className={styles.productsCartBottom}>
              <p className={styles.productsCartResult}>
                В корзину добавлено <span>{totalQty}</span> товаров на сумму{" "}
                <span>{totalSum}$</span>
              </p>
              <div className={styles.productsCartBtns}>
                <Button
                  type='button'
                  handler={() => dispatch(clearCart())}
                  classtype='primary'
                >
                  Очистить
                </Button>
                <Button disabled='disabled' classtype='primary'>
                  Оплатить
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
