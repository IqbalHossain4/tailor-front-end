import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PriveteRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/signIn" replace={true} state={{ from: location }}></Navigate>
  );
};

export default PriveteRoute;
