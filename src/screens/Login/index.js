import React from "react";
import "./index.css";
import logo from "../../assets/ctv-logo.png";

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="loginLogoBox">
        <img src={logo} alt="ctv-logo-login" />

        <div></div>
        <div></div>
      </div>
    </div>
  );
}
