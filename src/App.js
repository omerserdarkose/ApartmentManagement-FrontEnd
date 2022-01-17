import React, { useState } from "react";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Admin from "./pages/Admin";
import ApartmentList from "./components/ApartmentList";
import ExpenseList from "./components/ExpenseList";
import MessageInbox from "./components/MessageInbox";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/messages" element={<Login />}></Route>
          <Route path="/admin/recipients" element={<User />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
