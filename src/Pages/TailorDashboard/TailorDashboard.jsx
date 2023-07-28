import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaPlusCircle, FaUserAlt } from "react-icons/fa";

const TailorDashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="containers font-serif">
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-base-200">
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-sid px-4">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="mt-16 text-center">
            {user && (
              <>
                <div className="w-[150px] h-[150px] rounded-[100%] overflow-hidden mx-auto">
                  <img className="w-full h-full" src={user.photoURL} alt="" />
                </div>
                <h3 className="font-bold text-md">{user.displayName}</h3>
                <p>{user.email}</p>
              </>
            )}
          </div>
          <div className="divider"></div>

          <ul className="menu w-80 h-full ">
            {/* Sidebar content here */}
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/userdashboard">
                <FaUserAlt />
                Profile
              </Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to="/addproduct">
                <FaPlusCircle /> Add Product
              </Link>
            </li>
            <li>
              <Link to="/addedproduct">
                <FaPlusCircle /> All Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TailorDashboard;
