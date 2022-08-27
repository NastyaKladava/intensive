import React, { useContext } from "react";
import { Outlet } from "react-router";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import Cart from "../Cart/Cart";
import { AppContext } from "../../hoc/AppProvider";
import styles from "./Layout.module.css";

const Layout = () => {
  const location = useLocation();
  const { isLoggedIn, setisLogin } = useContext(AppContext);

  const handleLogOut = () => setisLogin(false);;

  const handleisShowModal = () =>;

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
          {isLoggedIn && <Cart />}
          <Link to='/modal' state={{ backgroundLocation: location }}>
            <Button type='button'>Авторизация</Button>
          </Link>
          {isLoggedIn && (
            <Button type='button' handler={handleLogOut}>
              Выйти
            </Button>
          )}
        </div>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
