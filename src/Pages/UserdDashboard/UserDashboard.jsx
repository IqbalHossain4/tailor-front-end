import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="containerr">
        <div className="flex items-center justify-center font-serif">
          <div className="md:flex items-start gap-[30px]">
            <div className="w-[300px] h-[250px] rounded-[100%] overflow-hidden">
              <img className="h-full w-full" src={user.photoURL} alt="logo" />
            </div>
            <div>
              <p className="text-xs mb-2">Full Name</p>
              <h3 className="text-2xl mb-3">{user.displayName}</h3>
              <p className="text-xs mb-2">Email Address</p>
              <h3 className="text-2xl mb-3">{user.email}</h3>
              <p className="text-xs mb-2">Phone Number</p>
              <h3 className="text-2xl mb-3">
                {user.phoneNumber ? user.phoneNumber : "Add Phone Number"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
