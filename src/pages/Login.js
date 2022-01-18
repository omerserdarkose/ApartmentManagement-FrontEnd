import axios from "axios";
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
// u@U*#A47vz
// %yj79d#8FA
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });

    setEmail("");
    setPassword("");

    let response = await axios.post("auth/login", { email, password });

    if (response.data.success) {
      localStorage.setItem("access_token", response.data.data.token);
      return navigate("/admin");
    }

    console.log(redirect);
  };

  return (
    <div className="login ">
        <form className="login-wrapper shadow p-3 mb-5 bg-white rounded" onSubmit={handleSubmit}>
          <h3>Log In</h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block my-3">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
    </div>
  );
};

export default Login;
