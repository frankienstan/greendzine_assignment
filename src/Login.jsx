import React from "react";
import "./login.css";
import logo from "/logo.png"; // with import

const Login = ({ onLogin }) => {
  return (
    <div className="login-container">
      <form>
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <div className="tagline">#We are Electric</div>
        </div>
        <div className="container">
          <input type="text" placeholder="Email" name="Email" required />
          <input
            type="password"
            placeholder="password"
            name="password"
            required
          />
          <button type="button" onClick={onLogin}>
            Login
          </button>
          <div className="forgot_password">Forgot Password?</div>
        </div>
      </form>
    </div>
  );
};

export default Login;
