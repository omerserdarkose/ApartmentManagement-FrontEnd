import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import User from "./User";

const Admin = (location) => {
  return (
    <div className="row">
      <div className="col-sm-4 col-md-3 col-lg-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-sm-8 col-md-9 col-lg-10 mt-4">
        <Routes>
          <Route path="/messages" element={<Login />}></Route>
          <Route path="/recipients" element={<User />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
