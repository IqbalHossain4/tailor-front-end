import { Rating } from "@smastrom/react-rating";
import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import useCarts from "../../Hooks/useCarts";
import ReactImageMagnify from "react-image-magnify";
import Similarproduct from "../SimilarProduct/Similarproduct";
import paypal from "../../assets/paymentImg/Paypal.png";
import spotify from "../../assets/paymentImg/spotify.png";
import stripe from "../../assets/paymentImg/stripe.png";
import visa from "../../assets/paymentImg/visa.png";
import masterCard from "../../assets/paymentImg/masterCard.png";
import discover from "../../assets/paymentImg/discover.png";
import american from "../../assets/paymentImg/american.png";

const ViewProduct = () => {
  const productData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [showImg, setShowImg] = useState(productData.photoOne);
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
      <div className="bg-[#f3f5f8] font-serif">
        <p className="text-xs containers text-gray-400 bg-[#f3f5f8] tracking-widest">
          Home/{productData.name}
        </p>
      </div>
      <div className="containerr md:flex md:items-start md:justify-center  gap-12 py-8">
        {/* imaage section */}

        <div
          id="imageZoom"
          className="w-1/2 lg:p-10 md:p-6 p-4 bg-[#F7F8FC] rounded"
        >
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "images",
                // isFluidWidth: true,
                src: showImg ? showImg : productData.photoOne,
                width: 400,
                height: 500,
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
        <div className="lg:w-1/3 w-full md:mt-0 mt-16 ">
          <div>
            <p className="text-xs mb-6">
              Availability: {productData.totalQuantity}
            </p>
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
          <div className="flex items-center gap-4  ">
            <div className="flex items-center px-2 py-1 mx-2 bg-[#f3f5f8] border rounded-sm">
              <button
                className="font-extrabold text-2xl"
                onClick={() => decreament()}
              >
                -
              </button>
              <p className="text-center w-24 ">
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
                } rounded-md  border-2 border-[#007bff] cursor-pointer`}
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
              className={`w-full py-4 bg-white text-black text-lg rounded-md my-2 border ${
                filterHandler == true
                  ? "transition-all duration-500 hover:bg-[#007bff] hover:text-white hover:border cursor-pointer"
                  : "disabled cursor-not-allowed"
              }`}
            >
              Buy Now
            </button>
            {/* Payment section */}
            <div className="divider font-bold">Guaranteed Safe Checkout</div>
            <div className="flex item-center gap-4 w-[70px] h-[30px]">
              <img src={stripe} className="w-full h-full" alt="" />
              <img src={paypal} className="w-full h-full" alt="" />
              <img src={spotify} className="w-full h-full" alt="" />
              <img src={visa} className="w-full h-full" alt="" />
              <img src={masterCard} className="w-full h-full" alt="" />
              <img src={discover} className="w-full h-full" alt="" />
              <img src={american} className="w-full h-full" alt="" />
            </div>
          </div>
          {/* product information */}
          <div className="text-xs my-8 text-zinc-500">
            <p>Vendor: {productData.sellerName}</p>
            <p>Product Type: {productData.productName}</p>
          </div>
          {/* product description */}
          <div className="collapse text-zinc-500 -ml-3 mb-4">
            <input type="radio" name="my-accordion-1" checked="checked" />
            <div className="collapse-title text-lg text-black">Description</div>
            <div className="collapse-content">
              <p className="text-sm">{productData.description}</p>
            </div>
          </div>
          <hr />
          <div className="collapse  text-zinc-500 -ml-3 mb-4">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Additional Infromation
            </div>
            <div className="collapse-content">
              <p>Color:</p>
              <p>Size:</p>
              <p>Material:</p>
            </div>
          </div>
          <hr />
          <div className="collapse text-zinc-500 -ml-3 mb-4">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-lg text-black">Reviews</div>
            <div className="collapse-content">
              <p>Review are not Available Here</p>
            </div>
          </div>
        </div>
      </div>
      <p className="w-full h-[20px]  bg-[#f3f5f8]  mt-16 "></p>
      <Similarproduct />
    </div>
  );
};

export default ViewProduct;
