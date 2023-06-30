import React from "react";
import Navber from "../Shared/Navber";
import { Outlet } from "react-router-dom";
import ExtraNav from "../Shared/ExtraNav";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div>
      <ExtraNav />
      <Navber />
      {/* <div className="h-[calc(400px-100vh)]"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default Home;
