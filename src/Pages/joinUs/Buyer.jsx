import React, { useContext, useState } from "react";
import SubHeader from "../../Components/SubHeade/SubHeader";
import { AuthContext } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const image_hoisting_token = import.meta.env.VITE_imgApi;
const Buyer = () => {
  const { user, joinNewUser, updateProfiles } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [storeImg, setStoreImg] = useState(null);
  const [passError, setPassError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passHide, setPassHide] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // img hoisting
  const img_hoisting_url = `https://api.imgbb.com/1/upload?key=${image_hoisting_token}`;

  const handlePhoto = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const formData = new FormData();
  formData.append("image", selectedFile);
  fetch(img_hoisting_url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((imgdata) => {
      // console.log(imgdata.data);
      setStoreImg(imgdata.data.display_url);
    });
  //handle Form
  const handleBuyerForm = (e) => {
    e.preventDefault();
    const firstName = e.target.first_name.value;
    const lastName = e.target.last_name.value;
    const name = firstName + " " + lastName;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = storeImg;

    if (password === "" && email === "") {
      setPassError("your password field is empty");
      setEmailError("your email field is empty");
      return;
    }

    if (password.length < 6) {
      setPassError("at list 6 character needed");
      return;
    }
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(password)) {
      setPassError("one Capital Latter Needed");

      return;
    }
    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(password)) {
      setPassError("Password must contain at least one Special Symbol.");
      return;
    }
    const fullUsers = {
      name: name,
      photo: photo,
      email: email.toLowerCase(),
    };
    joinNewUser(email, password)
      .then((user) => {
        const result = user.result;
        console.log(result);
        updateProfiles(name, photo)
          .then(() => {
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(fullUsers),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  navigate(from, { replace: true });
                  console.log(data);
                }
              });
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <SubHeader title={"Join Us as a Buyer"} />
      <div className="w-full h-full flex items-center justify-center mt-24 font-serif">
        <div className=" border p-16 ">
          <form onSubmit={handleBuyerForm}>
            <div className="flex flex-col">
              <div className="md:flex items-center">
                <div className="input-container flex flex-col">
                  <input
                    placeholder="First Name"
                    className="input-field"
                    type="text"
                    name="first_name"
                  />
                  <label className="input-label">First Name</label>
                  <span className="input-highlight"></span>
                </div>

                <div className="input-container flex flex-col">
                  <input
                    placeholder="Last Name"
                    className="input-field"
                    type="text"
                    name="last_name"
                  />
                  <label className="input-label">Last Name</label>
                  <span className="input-highlight"></span>
                </div>
              </div>

              <div className="md:flex items-center">
                <div className="input-container flex flex-col">
                  <input
                    placeholder="Email"
                    className="input-field"
                    type="email"
                    name="email"
                  />
                  <label className="input-label">Email</label>
                  <span className="input-highlight"></span>
                  <p className="text-red-400">{emailError}</p>
                </div>

                <div className="input-container flex flex-col">
                  <div className="relative">
                    <input
                      placeholder="Password"
                      className="input-field"
                      type={`${!passHide ? "text" : "password"}`}
                      name="password"
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
                  <p className="text-red-400">{passError}</p>
                </div>
              </div>
              <div className="input-container">
                <label className="">Upload Photo</label>
                <input
                  type="file"
                  className="input-field"
                  onChange={handlePhoto}
                />
              </div>
            </div>
            <div className="input-container bg-black text-white transition-all ease-in-out delay-150  hover:bg-[#d1d8ec] hover:text-black font-semibold mb-24 cursor-pointer">
              <input
                className="input-field cursor-pointer"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
          <p className="input-container text-[13px]">
            I have an account!{" "}
            <span className="text-[15px] font-semibold text-green-400 cursor-pointer">
              SignIn
            </span>
          </p>
          <div className="input-container  text-center text-[20px] font-bold border border-green-400 cursor-pointer">
            G
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyer;
