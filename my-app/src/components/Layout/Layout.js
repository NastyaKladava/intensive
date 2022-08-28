import React, { useContext } from "react";
import { Outlet } from "react-router";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { AppContext } from "../../hoc/AppProvider";
import styles from "./Layout.module.css";

const Layout = () => {
  const { isLoggedIn, setisLogin, isShowModal, setIsShow } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleLogOut = () => setisLogin(false);
  const handleOpenModal = () => setIsShow(true);
  const openCart = () => navigate("/cart");

  return (
    <>
      <header className={styles.header}>
        <div className='container'>
          <NavLink to='/' className='headerLink'>
            Товары
          </NavLink>
          <NavLink to='about' className='headerLink'>
            О магазине
          </NavLink>
        </div>
      </header>
      <main className='main'>
        <div className='container container--flex'>
          {isLoggedIn && (
            <Button type='button' handler={openCart} classtype='cart'></Button>
          )}
          <Button classtype='primary' type='button' handler={handleOpenModal}>
            Авторизация
          </Button>
          {isLoggedIn && (
            <Button type='button' handler={handleLogOut} classtype='primary'>
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
