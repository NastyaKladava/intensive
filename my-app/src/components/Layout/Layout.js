import React, { useContext } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Cart from "../Cart/Cart";
import Modal from "../Modal/Modal";
import { AppContext } from "../../hoc/AppProvider";
import styles from "./Layout.module.css";

const Layout = () => {
  const { isLoggedIn, setisLogin, isShowModal, setIsShow } =
    useContext(AppContext);

  const handleLogOut = () => setisLogin(false);

  const handleOpenModal = () => setIsShow(true);

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
          {isLoggedIn && <Cart />}
          <Button type="button" handler={handleOpenModal}>
            Авторизация
          </Button>
          {isLoggedIn && (
            <Button type="button" handler={handleLogOut}>
              Выйти
            </Button>
          )}
        </div>
        <Outlet />
        <Modal isShowModal={isShowModal} setIsShow={setIsShow} />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
