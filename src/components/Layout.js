import React from "react";
import { Outlet,useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";

const Layout = () => {
  const navigate=useNavigate();

  return (
    <div className="grid grid-cols-12 bg-gray-100 items-baseline">
      <div className="col-span-2 h-screen sticky top-0 hidden lg:flex">
        <SideMenu />
      </div>
      <div className="ms-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
