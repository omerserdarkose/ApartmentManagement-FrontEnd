import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import User from "./User";
import NotFound from "./NotFound";
import MessageInbox from "../components/MessageInbox";
import MessageSent from "../components/MessageSent";
import ExpenseList from "../components/ExpenseList";
import MessageRead from "../components/MessageRead";
import Loading from "../components/Loading";
import MessageNew from "../components/MessageNew";

const Admin = (location) => {
  return (
    <div className="row">
      <div className="col-sm-4 col-md-3 col-lg-2 pe-0 ">
        <Sidebar></Sidebar>
      </div>
      <div className="col-sm-8 col-md-9 col-lg-10 p-0">
        <Routes>
          <Route path="/messages" element={<MessageNew />}></Route>
          <Route exact path="/messages/inbox" element={<MessageInbox />}></Route>
          <Route path="/messages/inbox/:id" element={<MessageRead />}></Route>
          <Route exact path="/messages/sent" element={<MessageSent />}></Route>
          <Route path="/messages/sent/:id" element={<MessageRead />}></Route>
          <Route path="/expenses" element={<ExpenseList />}></Route>
          <Route path="/recipients" element={<User />}></Route>
          <Route path="/recipients/owners" element={<User />}></Route>
          <Route path="/recipients/hirers" element={<User />}></Route>
          <Route path="/apartments" element={<Loading />}></Route>
          <Route path="/settings" element={<User />}></Route>
          <Route path="/settings/users" element={<User />}></Route>
          <Route path="/settings/claims" element={<User />}></Route>
          <Route path="/settings/apartments" element={<User />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
