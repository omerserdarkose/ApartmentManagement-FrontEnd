import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import SidebarData from "./SidebarData";
import SubMenu from "./SubMenu";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        {SidebarData.map((sidebarItem, index) => {
          return (
            <SubMenu sidebarItem={sidebarItem} key={index}></SubMenu>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
