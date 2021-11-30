import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import logo from '../images/discord.png'

const Login = () => {
  const signUp = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo}/>
        <h2>
          Chat with your friends,co-workers all at the same time. Hello👋.
        </h2>
      </div>

      <Button onClick={signUp}>Sign In</Button>
    </div>
  );
};

export default Login;
