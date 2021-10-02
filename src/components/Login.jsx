import React, { useState } from "react";
import { loginUser } from "../api";
import { storeToken, storeUser } from "../auth";

import "./Login.css";

const Login = ({ setIsloggedIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="auth-component-main-container">
      <form
        id="Login"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const { data } = await loginUser(userName, password);

            storeToken(data.token);
            storeUser(userName);
            setIsloggedIn(true);
            //clear Login fields
            setUserName("");
            setPassword("");
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            placeholder="enter username"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </fieldset>

        <button className="btn">Login</button>


      </form>
    </div>
  );
};

export default Login;
