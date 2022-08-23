import React from "react";

const FormSignOut = () => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formfields}>
        <Input
          htmlFor="login"
          labelText="Login"
          id="login"
          type="text"
          name="login"
          placeholder="Enter login"
          notice={errors.login}
          value={fields.login}
          handleInputChanges={handleInputChanges}
        />
        <Input
          htmlFor="password"
          labelText="Password"
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          notice={errors.password}
          value={fields.password}
          handleInputChanges={handleInputChanges}
        />
      </div>
      <div className={styles.formBtns}>
        {isLoggedIn ? (
          <Button handler={handleLogOut}>Выйти</Button>
        ) : (
          <Button type="submit">Войти</Button>
        )}
        {/* <Button type="submit">{isLoggedIn ? "Выйти" : "Войти"}</Button> */}
        <Button type="button" handler={goBack}>
          Отмена
        </Button>
      </div>
    </form>
  );
};

export default FormSignOut;
