import React from "react";
import { Outlet } from "react-router";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./Layout.module.css";
import { logIn, showModal } from "../../toolkitStore/actions";
import {
  cartSelector,
  isLogInSelector,
  isLoadingSelector,
} from "../../toolkitStore/selectors";
import Loading from "../Loading/Loading";

const Layout = () => {
  const isLoading = useSelector(isLoadingSelector);
  const isLogIn = useSelector(isLogInSelector);
  const { totalQty, totalSum } = useSelector(cartSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openCart = () => navigate("/cart");

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <NavLink to="/" className="headerLink">
            Товары
          </NavLink>
          <NavLink to="about" className="headerLink">
            О магазине
          </NavLink>
        </div>
      </header>
      <main className={styles.main}>
        <div className="container container--flex">
          {isLogIn && (
            <div className={styles.containerCart}>
              <p className={styles.containerResult}>
                В корзине <span>{totalQty} </span>товара(ов) на сумму {""}
                <span>{totalSum}</span>$
              </p>
              <Button type="button" handler={openCart} classtype="cart" />
            </div>
          )}
          {!isLogIn && (
            <Button
              classtype="primary"
              type="button"
              handler={() => dispatch(showModal(true))}
            >
              Авторизация
            </Button>
          )}

          {isLogIn && (
            <Button
              type="button"
              handler={() => dispatch(logIn(false))}
              classtype="primary"
            >
              Выйти
            </Button>
          )}
        </div>
        {isLoading && <Loading />}
        <Outlet />
        <Modal />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
