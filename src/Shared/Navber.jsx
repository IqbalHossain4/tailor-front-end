import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
const Navber = () => {
  const [men, setMen] = useState(true);
  const [women, setWomen] = useState(true);
  const [kids, setKids] = useState(true);
  const [couple, setCouple] = useState(true);
  const [srcBtn, setSrcBtn] = useState(true);
  //nav Options
  const navOptions = (
    <div className="flex items-center gap-4 cursor-pointer">
      <li className="nav-link py-2 md:px-6 px-2">Home</li>
      <li className="nav-link py-2 md:px-6 px-2">About</li>
      <li className="nav-link py-2 md:px-6 px-2">Contact Us</li>
      <li className="nav-link py-2 md:px-6 px-2">SignIn</li>
    </div>
  );

  return (
    <div className="containers">
      <div className="navbar py-4 font-semibold bg-white">
        <div className="navbar-start">
          <div className="dropdown nav-link p-3  cursor-pointer ">
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
              className="menu menu-sm py-8 px-4  dropdown-content md:w-[300px] flex flex-col gap-3 mt-3 z-[1] bg-neumor text-center"
            >
              <div className="md:hidden block">{navOptions}</div>
              <h4 className="font-semibold bg-black text-white rounded-md py-1 px-2">
                Categories
              </h4>
              <li onClick={() => setMen(!men)}>
                <span className="nav-link  p-2 hover:bg-[#f0f8ff]">
                  Men
                  {!men ? <FaAngleDown /> : <FaAngleRight />}
                </span>
                {!men ? (
                  <ul className="flex  flex-col gap-4 rounded-md py-4 px-4">
                    <li className="nav-link p-2">Shirt</li>
                    <li className="nav-link p-2">Punjabi</li>
                    <li className="nav-link p-2">Pent</li>
                    <li className="nav-link p-2">Longi</li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="relative">
                <span
                  onClick={() => setWomen(!women)}
                  className=" nav-link p-2  hover:bg-[#f0f8ff]"
                >
                  <span>Women</span>
                  <span>{!women ? <FaAngleDown /> : <FaAngleRight />}</span>
                </span>

                {!women ? (
                  <ul className="flex  flex-col gap-4 rounded-md py-4 px-4">
                    <li className="nav-link p-2 ">T-Shirt</li>
                    <li className="nav-link p-2">Shirt</li>
                    <li className="nav-link p-2">Punjabi</li>
                    <li className="nav-link p-2">Pent</li>
                    <li className="nav-link p-2">Longi</li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className=" relative">
                <span
                  onClick={() => setKids(!kids)}
                  className="nav-link p-2 hover:bg-[#f0f8ff]"
                >
                  <span>Kids</span>
                  <span>{!kids ? <FaAngleDown /> : <FaAngleRight />}</span>
                </span>

                {!kids ? (
                  <ul className="flex  flex-col gap-4 rounded-md py-4 px-4">
                    <li className="nav-link p-2 ">T-Shirt</li>
                    <li className="nav-link p-2">Shirt</li>
                    <li className="nav-link p-2">Punjabi</li>
                    <li className="nav-link p-2">Pent</li>
                    <li className="nav-link p-2">Longi</li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li onClick={() => setCouple(!couple)}>
                <span className="nav-link p-2  hover:bg-[#f0f8ff]">
                  <span>Couples</span>
                  <span>{!couple ? <FaAngleDown /> : <FaAngleRight />}</span>
                </span>

                {!couple ? (
                  <ul className="flex  flex-col gap-4 rounded-md py-4 px-4">
                    <li className="nav-link p-2 ">T-Shirt</li>
                    <li className="nav-link p-2">Shirt</li>
                    <li className="nav-link p-2">Punjabi</li>
                    <li className="nav-link p-2">Pent</li>
                    <li className="nav-link p-2">Longi</li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center md:block hidden">
          <ul>{navOptions}</ul>
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
                  className="ps-4 md:w-[340px] w-[150px] "
                />

                <button className="btn btn-square bg-neumor">
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
          <button className="rounded-full ">
            <div className="nav-link p-2 indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
