import React, { useState } from "react";
import  {NavLink}  from "react-router-dom";

function SubMenu({ sidebarItem }) {
  const [subnav, setSubNav] = useState(false);

  const showSubNav = () => {
    setSubNav(!subnav);
  };
  return (
    <>
      <NavLink
        to={sidebarItem.path}
        className="sidebar-item"
      >
        <div className="sidebar-item-icon">{sidebarItem.icon}</div>
        <div className="sidebar-item-title">{sidebarItem.title}</div>
        <div className="sidebar-item-icon" onClick={showSubNav}>
          {sidebarItem.subNav && subnav
            ? sidebarItem.iconOpened
            : sidebarItem.subNav
            ? sidebarItem.iconClosed
            : null}
        </div>
      </NavLink>
      {subnav &&
        sidebarItem.subNav.map((subItem, index) => {
          return (
            <NavLink
              to={subItem.path}
              className="sidebar-subitem"
              key={index}
            >
              <div className="sidebar-subitem-icon">{subItem.icon}</div>
              <div className="sidebar-subitem-title">{subItem.title}</div>
            </NavLink>
          );
        })}
    </>
  );
}

export default SubMenu;
