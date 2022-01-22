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
import MessageSent from "./components/MessageSent";
import MessageRead from "./components/MessageRead";
import Loading from "./components/Loading";
import MessageNew from "./components/MessageNew";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/messages" element={<MessageNew />}></Route>
          <Route exact path="/admin/messages/inbox" element={<MessageInbox />} ></Route>
          <Route path="/admin/messages/inbox/:id" element={<MessageRead />} ></Route>
          <Route exact path="/admin/messages/sent" element={<MessageSent />}></Route>
          <Route path="/admin/messages/sent/:id" element={<MessageRead />} ></Route>
          <Route path="/admin/expenses" element={<ExpenseList />}></Route>
          <Route path="/admin/recipients" element={<User />}></Route>
          <Route path="/admin/recipients/owners" element={<User />}></Route>
          <Route path="/admin/recipients/hirers" element={<User />}></Route>
          <Route path="/admin/apartments" element={<Loading />}></Route>
          <Route path="/admin/settings" element={<User />}></Route>
          <Route path="/admin/settings/users" element={<User />}></Route>
          <Route path="/admin/settings/claims" element={<User />}></Route>
          <Route path="/admin/settings/apartments" element={<User />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
