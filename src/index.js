import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL="https://localhost:44394/api/";

axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('access_token');

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
