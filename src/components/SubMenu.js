import React, { useState } from "react";
import { Link } from "react-router-dom";

function SubMenu({ sidebarItem }) {
  const [subnav, setSubNav] = useState(false);

  const showSubNav = () => {
    setSubNav(!subnav);
  };
  return (
    <>
      <Link
        to={sidebarItem.path}
        className="sidebar-item"
        id={window.location.pathname == sidebarItem.path ? "active" : null}
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
      </Link>
      {subnav &&
        sidebarItem.subNav.map((subItem, index) => {
          return (
            <Link
              to={subItem.path}
              className="sidebar-subitem"
              id={window.location.pathname == subItem.path ? "active" : null}
            >
              <div className="sidebar-subitem-icon">{subItem.icon}</div>
              <div className="sidebar-subitem-title">{subItem.title}</div>
            </Link>
          );
        })}
    </>
  );
}

export default SubMenu;
