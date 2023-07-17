import { Rating } from "@smastrom/react-rating";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
const Trending = ({ product }) => {
  const {
    _id,
    name,
    price,
    photoOne,
    photoTwo,
    photoThree,
    category,
    productName,
    rating,
  } = product;
  const { user } = useContext(AuthContext);
  const [showImg, setShowImg] = useState(null);
  //add to chart
  const items = {
    email: user.email,
    itemsId: _id,
    name: name,
    price: price,
    photoOne: photoOne,
  };
  const addTochart = () => {
    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((data) => {
        console.log("hello out");
        if (data.insertedId) {
          console.log("hello in");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="font-serif">
      <div className="rounded chart">
        <div className="w-[350px] h-[350px] w mx-auto lg:p-10 md:p-6 p-4 bg-[#f0f8ff] rounded">
          <img
            className="rounded w-full h-full"
            src={showImg ? showImg : photoOne}
            alt=""
          />
        </div>

        {/* text section */}
        <div className="addbtn">
          <div className="text-center mt-4">
            <span className="flex justify-center">
              <Rating readOnly value={rating} style={{ maxWidth: 60 }} />
            </span>
            <p className="mt-2 text-sm">{name}</p>
            <h4 className="font-semibold text-lg">${price}</h4>
          </div>

          <div className="flex justify-center gap-4 mx-auto mt-3 mb-6">
            <img
              onClick={() => setShowImg(photoOne)}
              className={`w-[40px] h-[35px] ${
                showImg == photoOne ? "border" : "border-none"
              } rounded-md border-2 border-[#007bff] cursor-pointer`}
              src={photoOne}
              alt=""
            />
            <img
              onClick={() => setShowImg(photoTwo)}
              className={`w-[40px] h-[35px] ${
                showImg == photoTwo ? "border" : "border-none"
              } rounded-md border-2 border-[#007bff] cursor-pointer`}
              src={photoTwo}
              alt=""
            />
            <img
              onClick={() => setShowImg(photoThree)}
              className={`w-[40px] h-[35px] ${
                showImg == photoThree ? "border" : "border-none"
              } rounded-md border-2 border-[#007bff] cursor-pointer`}
              src={photoThree}
              alt=""
            />
          </div>
          {/* add chart */}
          <div className="text-center ">
            <button onClick={addTochart} className="py-2 px-4 nav-link">
              Add To Chart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
