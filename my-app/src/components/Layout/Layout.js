import React, { useContext } from "react";
import { Outlet } from "react-router";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import Cart from "../Cart/Cart";
import { LoginContext } from "../../hoc/LoginProvider";
import styles from "./Layout.module.css";

const Layout = () => {
  const location = useLocation();
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <>
      <header className='header'>
        <Link to='/'> Products</Link>
        <Link to='about'> About</Link>
      </header>
      <main className='main'>
        {isLoggedIn ? <Cart /> : <></>}
        <Link to='/modal' state={{ backgroundLocation: location }}>
          <Button>Авторизация</Button>
        </Link>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
