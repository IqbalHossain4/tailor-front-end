import React, { useContext, useState } from "react";
import {
  FaAngleRight,
  FaAngleDown,
  FaUserAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useCarts from "../Hooks/useCarts";
const Navber = () => {
  const [men, setMen] = useState(true);
  const [women, setWomen] = useState(true);
  const [kids, setKids] = useState(true);
  const [couple, setCouple] = useState(true);
  const [srcBtn, setSrcBtn] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCarts();
  const [handleProfile, setHandleProfile] = useState(true);
  //make nav Active

  const Active = ({ to, children }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "text-[#007bff]" : "text-black"
        }
      >
        {children}
      </NavLink>
    );
  };
  //logout user
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  //nav Options
  const navOptions = (
    <div className="flex items-center md:gap-4 gap-2 cursor-pointer ">
      <li className="nav-links py-2 md:px-6 px-2">
        <Active to="/">Home</Active>
      </li>
      <li className="nav-links py-2 md:px-6 px-2">
        <Active to="/men">Men</Active>
      </li>
      <li className="nav-links py-2 md:px-6 px-2">
        <Active to="/kids">Kids</Active>
      </li>
      <li className="nav-links py-2 md:px-6 px-2">
        <Active to="/women">Women</Active>
      </li>

      <li className="nav-links py-2 md:px-6 px-2">
        <Active to="/kids">Couples</Active>
      </li>

      {cart.length > 0 && (
        <li className=" py-2 md:px-6 px-2 hidden md:block">
          <Link to="/selected">
            <button className="rounded-full relative">
              <div className=" p-2 indicator">
                <FaShoppingCart />
                <div className="badge bg-black text-white absolute -top-2 -right-6">
                  +{cart?.length || 0}
                </div>
              </div>
            </button>
          </Link>
        </li>
      )}
    </div>
  );

  // dashboard
  let isTailor = false;
  let isAdmin = true;
  return (
    <div className="font-serif">
      <div className="containers">
        <div className="navbar py-4 font-semibold bg-white ">
          <div className="navbar-start ">
            <div className="dropdown nav-link p-3  cursor-pointer s ">
              <label tabIndex={0}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              {/* Nav Categories */}

              <ul
                tabIndex={0}
                className="menu menu-sm py-8 px-4  dropdown-content md:w-[300px] w-auto flex flex-col gap-3 mt-3 z-[10] bg-neumor text-xs text-center text-black "
              >
                <div className="md:hidden block">{navOptions}</div>
                <h4 className="font-semibold bg-black text-white rounded-md py-1 px-2">
                  Categories
                </h4>
                <li onClick={() => setMen(!men)}>
                  <span className="nav-link  p-2 text-xs">
                    Men
                    {!men ? <FaAngleDown /> : <FaAngleRight />}
                  </span>
                  {!men ? (
                    <ul className="flex  flex-col gap-4 rounded-md py-4 px-4 text-left text-xs ">
                      <li className="nav-link p-2">Pant</li>
                      <li className="nav-link p-2">Shirt</li>
                      <li className="nav-link p-2">T-Shirt</li>
                      <li className="nav-link p-2">Punjabi</li>
                      <li className="nav-link p-2">Longi</li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className=" relative">
                  <span onClick={() => setKids(!kids)} className="nav-link p-2">
                    <span className="text-xs">Kids</span>
                    <span>{!kids ? <FaAngleDown /> : <FaAngleRight />}</span>
                  </span>

                  {!kids ? (
                    <ul className="flex  flex-col gap-4 rounded-md py-4 px-4 text-left text-xs">
                      <li className="nav-link p-2">Pant</li>
                      <li className="nav-link p-2">Shirt</li>
                      <li className="nav-link p-2 ">T-Shirt</li>
                      <li className="nav-link p-2">Punjabi</li>
                      <li className="nav-link p-2">Khelna</li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className="relative">
                  <span
                    onClick={() => setWomen(!women)}
                    className=" nav-link p-2 "
                  >
                    <span className="text-xs">Women</span>
                    <span>{!women ? <FaAngleDown /> : <FaAngleRight />}</span>
                  </span>

                  {!women ? (
                    <ul className="flex text-left  flex-col gap-4 rounded-md py-4 px-4 text-xs">
                      <li className="nav-link p-2">Pant</li>
                      <li className="nav-link p-2">T-Shirt</li>
                      <li className="nav-link p-2 ">Shari</li>
                      <li className="nav-link p-2">Three pies</li>
                      <li className="nav-link p-2">Sheloar comiz</li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>

                <li onClick={() => setCouple(!couple)}>
                  <span className="nav-link p-2">
                    <span className="text-xs">Couples</span>
                    <span>{!couple ? <FaAngleDown /> : <FaAngleRight />}</span>
                  </span>

                  {!couple ? (
                    <ul className="flex  flex-col gap-4 rounded-md py-4 px-4 text-left text-xs">
                      <li className="nav-link p-2 ">Panjabi + Shari</li>
                      <li className="nav-link p-2">Shirt + Three pies</li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center md:block hidden">
            <ul className="text-xs">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            {/* search btn */}
            {!srcBtn ? (
              <div
                className={`${
                  !srcBtn ? "btn-transfer" : "btn-return  "
                }form-control  nav-link mr-4  z-[3]`}
              >
                <div className="input-group w-full ">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="ps-4 md:w-[340px] w-[150px] bg-[#f3f5f8]"
                  />

                  <button className="btn btn-square bg-black text-white hover:bg-black hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            <button
              onClick={() => setSrcBtn(!srcBtn)}
              className="rounded-full flex items-center p-3"
            >
              {srcBtn ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              ) : (
                <span className="text-[15px]">Cancel</span>
              )}
            </button>

            {user && (
              <button
                onClick={() => setHandleProfile(!handleProfile)}
                className="relative w-[50px] h-[50px] ms-4"
              >
                <FaUserAlt />
              </button>
            )}

            <div
              className={`absolute z-50 right-[20px] lg:right-[40px] top-[110px] lg:top-[110px] transform py-4 px-6 text-black font-semibold  rounded-[10px] w-[200px] bg-white  ${
                !handleProfile ? "block" : "hidden"
              } ${user ? "block" : "hidden"}`}
            >
              {user && (
                <ul className="text-xs">
                  <li className="nav-link py-2 px-2 mt-2 cursor-pointer">
                    <Link to="/userdashboard">Profile</Link>
                  </li>

                  {isTailor && (
                    <li className=" nav-link py-2  px-2 mt-2 cursor-pointer">
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                  )}
                  {isAdmin && (
                    <li className=" nav-link py-2  px-2 mt-2 cursor-pointer">
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                  )}
                  <li
                    onClick={handleLogOut}
                    className=" cursor-pointer mt-2 nav-link py-2  px-2"
                  >
                    LogOut
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
