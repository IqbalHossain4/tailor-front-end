import React, { useContext, useState } from "react";
import SubHeader from "../../Components/SubHeade/SubHeader";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const image_hoisting_token = import.meta.env.VITE_imgApi;
const Saller = () => {
  const { user, joinNewUser } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [storeImg, setStoreImg] = useState(null);
  const [category, setCategory] = useState(null);
  const [passHide, setPassHide] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(storeImg);
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
  //join a seller
  const handleSaller = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const firstName = e.target.first_name.value;
    const lastName = e.target.last_name.value;
    const name = firstName + " " + lastName;
    const tailor = e.target.tailor_name.value;
    const photo = storeImg;
    const categories = category;

    const fullSaller = {
      name: name,
      email: email,
      tailor: tailor,
      photo: photo,
      categories: categories,
      status: "pending",
    };

    joinNewUser(email, password)
      .then((user) => {
        const result = user.result;
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(fullSaller),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              navigate(from, { replace: true });
              console.log(data);
            }
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // console.log(category);
  return (
    <div>
      <SubHeader title={"Join Us as a Saller"} />
      <div className="w-full h-full flex items-center justify-center my-24">
        <div className=" border p-16">
          <form onSubmit={handleSaller}>
            <div className="flex flex-col">
              <div className="md:flex items-center">
                <div className="input-container flex flex-col">
                  <input
                    placeholder="First Name"
                    className="input-field"
                    type="text"
                    name="first_name"
                    required
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
                    required
                  />
                  <label className="input-label">Last Name</label>
                  <span className="input-highlight"></span>
                </div>
              </div>

              <div className="md:flex items-center">
                <div className="input-container flex flex-col">
                  <input
                    placeholder="Tailor Name"
                    className="input-field"
                    type="text"
                    name="tailor_name"
                    required
                  />
                  <label className="input-label">Tailor Name</label>
                  <span className="input-highlight"></span>
                </div>

                <div className="input-container flex flex-col">
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    className=" md:w-[210px] w-full border-b-2 border-[#b2b8c9] p-[10px] font-[16px] box-shad"
                    defaultValue={"Categories"}
                  >
                    <option value="Categories" selected disabled>
                      Categories
                    </option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                    <option value="Couples">Couples</option>
                  </select>
                  <label className="input-label">Categories</label>
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
                    required
                  />
                  <label className="input-label">Email</label>
                  <span className="input-highlight"></span>
                </div>

                <div className="input-container flex flex-col">
                  <div className="relative">
                    <input
                      placeholder="Password"
                      className="input-field"
                      type={`${!passHide ? "text" : "password"}`}
                      name="password"
                      required
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
              </div>
              <div className="input-container">
                <label className="">Upload Photo</label>
                <input
                  type="file"
                  className="input-field"
                  onChange={handlePhoto}
                  required
                />
              </div>
            </div>
            <div className="input-container bg-black text-white transition-all ease-in-out delay-150  hover:bg-[#d1d8ec] hover:text-black font-semibold mb-24">
              <input
                className="input-field cursor-pointer"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
          <p className="input-container text-[13px]">
            I have an account{" "}
            <span className="text-[15px] font-semibold text-green-400">
              SignIn
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Saller;
