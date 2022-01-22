import axios from "axios";
import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
          <h3>Kullanıcı Girişi</h3>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              value={password}
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block my-3">
            Giriş
          </button>
          <p className="forgot-password text-right">
            <Link to="#">Şifremi Unuttum </Link>
          </p>
        </form>
    </div>
  );
};

export default Login;
