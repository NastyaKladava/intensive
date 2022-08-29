import React from "react";
import { Outlet } from "react-router";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./Layout.module.css";
import { logIn, showModal } from "../../toolkitStore/actions";
import { isLogInSelector } from "../../toolkitStore/selectors";

const Layout = () => {
  const isLogIn = useSelector(isLogInSelector);
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
      <main className="main">
        <div className="container container--flex">
          {isLogIn && (
            <Button type="button" handler={openCart} classtype="cart"></Button>
          )}
          <Button
            classtype="primary"
            type="button"
            handler={() => dispatch(showModal(true))}
          >
            Авторизация
          </Button>
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
        <Outlet />
        <Modal />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
