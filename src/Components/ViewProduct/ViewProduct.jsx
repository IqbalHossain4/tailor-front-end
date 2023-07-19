import { Rating } from "@smastrom/react-rating";
import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import useCarts from "../../Hooks/useCarts";
const ViewProduct = () => {
  const productData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [showImg, setShowImg] = useState(null);
  const [cart, refetch] = useCarts();
  const [cartItems, setCartItems] = useState([]);

  //add to chart
  const addTocharts = () => {
    if (user) {
      const selectedItems = {
        email: user.email,
        itemsId: productData._id,
        name: productData.name,
        price: productData.price,
        photoOne: productData.photoOne,
        quantity: parseInt(1),
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
  //increament
  const increaseQuantity = (id) => {
    const updatedId = cart.find((items) => items._id === id);
    fetch(`http://localhost:5000/increase/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: updatedId.quantity }),
    })
      .then((res) => res.json())
      .then(() => {
        refetch();
      });
  };
  //decreament
  const decreaseQuantity = (id) => {
    const updatedId = cart.find((items) => items._id === id);

    fetch(`http://localhost:5000/decrease/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: updatedId.quantity }),
    })
      .then((res) => res.json())
      .then(() => {
        refetch();
      });
  };

  return (
    <div>
      <div className="bg-[#f3f5f8] font-serif">
        <p className="text-xs containers text-gray-400 bg-[#f3f5f8] tracking-widest">
          Home/{productData.name}
        </p>
      </div>
      <div className="containerr flex items-start">
        {/* imaage section */}
        <div className="max-h-[100px]">
          <img
            style={{ maxHeight: "500px" }}
            className="w-full  h-full"
            src={productData.photoOne}
            alt=""
          />
        </div>
        {/* text section */}
        <div>
          <div>
            <h2>{productData.name}</h2>
            <h3>${productData.price}</h3>
            <span className="flex">
              <Rating
                readOnly
                value={productData.rating}
                style={{ maxWidth: 60 }}
              />
              <span className="text-xs ms-2 ">{productData.rating}</span>
            </span>
          </div>
          {/* add chart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <button
                className="font-extrabold text-2xl"
                onClick={() => decreaseQuantity(productData._id)}
              >
                -
              </button>
              <p className="text-center border w-32 px-2 py-3 mx-2 bg-[#f3f5f8] rounded-sm">
                {productData.quantity >= 1 ? productData.quantity : 1}
              </p>
              <button
                className="font-extrabold text-2xl"
                onClick={() => increaseQuantity(productData._id)}
              >
                +
              </button>
            </div>

            <button onClick={() => addTocharts()} className="py-2 px-4 btns">
              <FaShoppingCart className="inline-block mr-1" /> Add To Chart
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
