import React from "react";
import Navber from "../Shared/Navber";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
};

export default Home;
