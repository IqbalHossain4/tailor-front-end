import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import SubHeader from "../../Components/SubHeade/SubHeader";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const { login, googleSignIn } = useContext(AuthContext);
  const [passHide, setPassHide] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //handle error
  const [errorPass, setErrorPass] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  //handle login Form
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorPass("");
    setErrorEmail("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPass = e.target.confirm_pass.value;
    if (password !== confirmPass) {
      setErrorPass("Password are not Match");
      return;
    }
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .caatch((error) => {
        console.log(error);
        setErrorEmail(error.message);
      });
  };

  //handle google form
  const handlesocial = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <SubHeader title={"SignIn"} />
      <div className="w-full h-full flex items-center justify-center mt-4">
        <div className="border p-16 ">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col">
              <div className="input-container flex flex-col">
                <input
                  placeholder="Email"
                  className="input-field"
                  type="email"
                  name="email"
                />
                <label className="input-label">Email</label>
                <span className="input-highlight"></span>
                <p className="text-red-400">{errorEmail}</p>
              </div>

              <div className="md:flex items-center">
                <div className="input-container flex flex-col">
                  <div className="relative">
                    <input
                      placeholder="Password"
                      className="input-field"
                      type={`${!passHide ? "text" : "password"}`}
                      name="confirm_pass"
                    />
                    <div className="absolute right-[10px] top-[30%]">
                      {passHide ? (
                        <FaEyeSlash onClick={() => setPassHide(false)} />
                      ) : (
                        <FaEye onClick={() => setPassHide(true)} />
                      )}
                    </div>
                  </div>
                  <label className="input-label">Password</label>
                  <span className="input-highlight"></span>
                </div>

                <div className="input-container flex flex-col">
                  <input
                    placeholder="Confirm Password"
                    className="input-field"
                    type="password"
                  />
                  <label className="input-label">Confirm Password</label>
                  <span className="input-highlight"></span>
                  <p className="text-red-400">{errorPass}</p>
                </div>
              </div>
            </div>
            <div className="input-container bg-black text-white transition-all ease-in-out delay-150  hover:bg-[#d1d8ec]  hover:text-black font-semibold mb-24">
              <input
                className="input-field cursor-pointer"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
          <p className="input-container text-[13px]">
            New users?{" "}
            <span className="text-[15px] font-semibold text-green-400">
              Join Us
            </span>
          </p>
          <div
            onClick={handlesocial}
            className="input-container  text-center text-[20px] font-bold border border-green-400 cursor-pointer"
          >
            G
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
