import React from "react";
import Home from "../Pages/Home";
import ExtraNav from "../Shared/ExtraNav";
import Navber from "../Shared/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div>
      <ExtraNav />
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
