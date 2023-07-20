import { Rating } from "@smastrom/react-rating";
import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import useCarts from "../../Hooks/useCarts";
import ReactImageMagnify from "react-image-magnify";

const ViewProduct = () => {
  const productData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [showImg, setShowImg] = useState(null);
  const [cart, refetch] = useCarts();
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState(1);
  const [filterHandler, setFilterHandler] = useState(null);

  //increament
  let increment = () => {
    setQuantities(quantities + 1);
  };
  //decreament
  let decreament = () => {
    setQuantities(quantities - 1);
  };

  //add to chart
  const addTocharts = () => {
    if (user) {
      const selectedItems = {
        email: user.email,
        itemsId: productData._id,
        name: productData.name,
        price: productData.price,
        photoOne: productData.photoOne,
        quantity: quantities,
        category: productData.category,
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
    <div>
      <div className="bg-[#f3f5f8] font-serif ">
        <p className="text-xs containers text-gray-400 bg-[#f3f5f8] tracking-widest">
          Home/{productData.name}
        </p>
      </div>
      <div className="containerr md:flex md:items-start md:justify-center  gap-12 py-8">
        {/* imaage section */}
        <div id="imageZoom" className="lg:p-10 md:p-6 p-4 bg-[#F7F8FC] rounded">
          {/* <img
            style={{ maxHeight: "400px" }}
            className="w-full h-full object-scale-down"
            src={showImg ? showImg : productData.photoOne}
            alt="productImage"
          /> */}

          <ReactImageMagnify
            className="w-full h-full"
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: showImg ? showImg : productData.photoOne,
              },
              largeImage: {
                src: showImg ? showImg : productData.photoOne,
                width: 1200,
                height: 700,
              },
            }}
          />
        </div>
        {/* text section */}
        <div className="">
          <div>
            <h2 className="text-2xl font-extrabold">{productData.name}</h2>
            <h3 className="mt-1 mb-6 text-[#2879fe] text-2xl font-extrabold">
              ${productData.price}
            </h3>
            <span className="flex mb-6">
              <Rating
                readOnly
                value={productData.rating}
                style={{ maxWidth: 80 }}
              />
              <span className="text-xs ms-2 text-[#2879fe]">
                {productData.rating}
              </span>
            </span>
          </div>
          {/* add chart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <button
                className="font-extrabold text-2xl"
                onClick={() => decreament()}
              >
                -
              </button>
              <p className="text-center border w-32 px-2 py-3 mx-2 bg-[#f3f5f8] rounded-sm">
                {quantities >= 1 ? quantities : 1}
              </p>
              <button
                className="font-extrabold text-2xl"
                onClick={() => increment()}
              >
                +
              </button>
            </div>

            <button onClick={() => addTocharts()} className="py-2 px-4 btns">
              <FaShoppingCart className="inline-block mr-1" /> Add To Chart
            </button>
          </div>
          <div className="my-2">
            <div className="flex items-center gap-4 mx-auto mt-3 mb-6">
              <img
                onClick={() => setShowImg(productData.photoOne)}
                className={`w-[40px] h-[35px] object-scale-down ${
                  showImg == productData.photoOne ? "border" : "border-none"
                } rounded-md border-2 border-[#007bff] cursor-pointer`}
                src={productData.photoOne}
                alt=""
              />
              <img
                onClick={() => setShowImg(productData.photoTwo)}
                className={`w-[40px] h-[35px] object-scale-down ${
                  showImg == productData.photoTwo ? "border" : "border-none"
                } rounded-md border-2 border-[#007bff] cursor-pointer`}
                src={productData.photoTwo}
                alt=""
              />
              <img
                onClick={() => setShowImg(productData.photoThree)}
                className={`w-[40px] h-[35px] object-scale-down ${
                  showImg == productData.photoThree ? "border" : "border-none"
                } rounded-md border-2 border-[#007bff] cursor-pointer`}
                src={productData.photoThree}
                alt=""
              />
            </div>
            <span className="text-xs flex items-center gap-2">
              <input
                type="checkbox"
                name="name"
                onClick={(e) => setFilterHandler(e.target.checked)}
              />
              <span>I agree with the terms and conditions</span>
            </span>
            <br />
            <button
              className={`w-full py-4 bg-black text-white text-lg rounded-md my-2  ${
                filterHandler == true
                  ? "transition-all duration-500 hover:bg-white hover:text-black hover:border cursor-pointer"
                  : "disabled cursor-not-allowed"
              }`}
            >
              {" "}
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
