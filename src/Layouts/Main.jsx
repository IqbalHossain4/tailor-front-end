import React from "react";
import Home from "../Pages/Home";
import ExtraNav from "../Shared/ExtraNav";
import Navber from "../Shared/Navber";
import Footer from "../Shared/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <ExtraNav />
      <Navber />
      <div className="min-h-[calc(100vh-350px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
