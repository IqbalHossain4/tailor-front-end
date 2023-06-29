import React, { useState } from "react";
import logo from "../assets/tailor.png";
import { Link } from "react-router-dom";
const ExtraNav = () => {
  const [controlUser, setControlUser] = useState(true);
  return (
    <div className="bg-[#d1d8ec]">
      <div className="containers h-[40px] flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={logo} alt="tailor" width="60px" />
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-3 text-sm cursor-pointer ">
            <li
              className="relative borders pe-2"
              onClick={() => setControlUser(!controlUser)}
            >
              Join Us
              {!controlUser ? (
                <ul className="absolute top-[30px] right-[10px] flex items-center text-sm bg-[#d1d8ec]  rounded">
                  <li className="borders px-4  py-2 transition ease-in-out delay-150  hover:bg-white">
                    <Link to="/saller">Saller</Link>
                  </li>
                  <li className="px-4  py-2  transition ease-in-out delay-150  hover:bg-white">
                    <Link to="/buyer">Buyer</Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>
            <li className=" borders pe-2">
              <Link to="/signIn">Sign In</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExtraNav;
