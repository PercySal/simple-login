"use client";
import styles from "./login.module.scss";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function Login() {
  const loginInfo = {
    name: "test",
    password: "1234",
  };

  const [loginError, setLoginError] = useState(false);

  function handleFormSubmit() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === loginInfo.name && pass === loginInfo.password) {
      return redirect("/?isLoggedIn=1");
    } else {
      setLoginError(true);
      return;
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginSite}>Fake SNS</div>
      <div className={styles.loginForm}>
        <form action={handleFormSubmit}>
          <label>
            <input
              className={styles.loginInput}
              type="text"
              name="username"
              id="username"
              placeholder="Username or Email Address"
              required
            ></input>
          </label>
          <label>
            <input
              className={styles.loginInput}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            ></input>
          </label>
          {loginError ? (
            <p className={styles.loginError}>
              Incorrect username and/or password
            </p>
          ) : (
            <p></p>
          )}
          <button className={styles.loginButton} type="submit">
            Log In
          </button>
          <a className={styles.loginForgot} href="">
            Forgot password?
          </a>
        </form>

        <hr></hr>
        <a className={styles.loginCreate} href="">
          Create New Account
        </a>
      </div>
    </div>
  );
}
