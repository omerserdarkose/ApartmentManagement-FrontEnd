import React, { useState } from "react";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Admin from "./pages/Admin";
import ApartmentList from "./components/ApartmentList";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <BrowserRouter>
       <Navbar></Navbar>
      {/* <Routes>
        <Route exact path="/" element={<Admin/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>  */}
      {/* <ApartmentList></ApartmentList> */}
      <ExpenseList></ExpenseList>
    </BrowserRouter>
  );
}

export default App;
