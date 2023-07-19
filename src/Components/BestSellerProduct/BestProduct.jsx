import React, { useContext, useState } from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useCarts from "../../Hooks/useCarts";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
const BestProduct = ({ product }) => {
  const { user } = useContext(AuthContext);
  const [showImg, setShowImg] = useState(null);
  const [cart, refetch] = useCarts();
  const [cartItems, setCartItems] = useState([]);
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
  //add to chart

  const addTocharts = () => {
    if (user) {
      const selectedItems = {
        email: user.email,
        itemsId: _id,
        name: name,
        price: price,
        photoOne: photoOne,
        quantity: parseInt(1),
        category: category,
      };
      const existingItemIndex = cart.findIndex(
        (item) => item.itemsId === selectedItems.itemsId
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex];
        setCartItems(updatedCartItems);
        Swal.fire({
          position: "center",
          icon: "info",
          title: "This product already added",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        const newItem = { ...selectedItems };
        setCartItems([...cartItems, newItem]);
        fetch("http://localhost:5000/carts", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(selectedItems),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              refetch();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully saved on the Cart",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    }
  };
  return (
    <div className="font-serif">
      <div className="rounded chart">
        <div className="w-[350px] h-[350px] w mx-auto lg:p-10 md:p-6 p-4 bg-[#F7F8FC] rounded">
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
            <p className="mt-2 text-sm cursor-pointer hover:text-[#007bff]">
              <Link to={`/product/${_id}`}>{name}</Link>
            </p>
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
            {user ? (
              <button onClick={() => addTocharts()} className="py-2 px-4 btns">
                <FaShoppingCart className="inline-block mr-1" />
                Add To Chart
              </button>
            ) : (
              <button className="py-2 px-4 btns">
                <Link to="/signIn">
                  <FaShoppingCart className="inline-block mr-1" />
                  Add To Chart
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
