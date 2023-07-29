import React, { Children, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaClipboardList,
  FaHome,
  FaPlusCircle,
  FaStore,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";
import bgWave from "../../assets/wave.svg";

const TailorDashboard = () => {
  const { user } = useContext(AuthContext);
  let isTailor = false;
  let isAdmin = true;
  //make nav active
  const Active = ({ to, children }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? `${isAdmin ? "text-black" : "text-emerald-400"}`
            : ""
        }
      >
        {children}
      </NavLink>
    );
  };
  return (
    <div>
      <div className=" font-serif ">
        <div className="drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content  bg-base-200 pb-16">
            <Outlet></Outlet>

            {/* <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}
          </div>
          <div
            className={`drawer-sid px-4 h-screen overflow-hidden 
           ${
             isAdmin ? "bg-[#62CDFF] text-white" : "bg-white text-black"
           } relative`}
          >
            {isAdmin && (
              <div className="w-full">
                <img
                  src={bgWave}
                  className="w-[100%]  bg-cover bg-center bg-no-repeat absolute bottom-0 left-0 "
                  alt=""
                />
              </div>
            )}

            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <div className="mt-16 text-center">
              {user && (
                <>
                  <div className="w-[150px] h-[150px] rounded-[100%] overflow-hidden mx-auto">
                    <img className="w-full h-full" src={user.photoURL} alt="" />
                  </div>
                  <h3 className="font-bold text-md mt-4">{user.displayName}</h3>
                  <p className="capitalize">{user.email}</p>
                </>
              )}
            </div>
            <div className="divider"></div>

            <ul className="menu md:w-80 w-[50px] h-full ">
              {/* Sidebar content here */}
              <li>
                <Active to="/">
                  <FaHome /> Home
                </Active>
              </li>
              <li>
                <Active to="/userdashboard">
                  <FaUserAlt />
                  Profile
                </Active>
              </li>

              <div className="divider"></div>
              {isTailor && (
                <>
                  <li>
                    <Active to="/dashboard/tailor">
                      <FaHome /> Dashboard
                    </Active>
                  </li>
                  <li>
                    <Active to="/dashboard/tailor/addProduct">
                      <FaPlusCircle /> Add Product
                    </Active>
                  </li>
                  <li>
                    <Active to="/dashboard/tailor/ownProduct">
                      <FaStore /> All Product
                    </Active>
                  </li>
                </>
              )}

              {isAdmin && (
                <>
                  <li>
                    <Active to="/dashboard/admin">
                      <FaHome /> Dashboard
                    </Active>
                  </li>
                  <li>
                    <Active to="/dashboard/admin/manageProduct">
                      <FaUsers /> Manage Users
                    </Active>
                  </li>
                  <li>
                    <Active to="/dashboard/admin/">
                      <FaClipboardList /> Manage Product
                    </Active>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailorDashboard;
