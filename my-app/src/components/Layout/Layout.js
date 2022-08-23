import React, { useContext } from "react";
import { Outlet } from "react-router";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import Cart from "../Cart/Cart";
import { LoginContext } from "../../hoc/LoginProvider";
import styles from "./Layout.module.css";

const Layout = () => {
  const location = useLocation();
  const { isLoggedIn } = useContext(LoginContext);

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
        <div className="container">
          {isLoggedIn && <Cart />}
          <Link to="/modal" state={{ backgroundLocation: location }}>
            {" "}
            <Button>Авторизация</Button>
          </Link>
        </div>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
