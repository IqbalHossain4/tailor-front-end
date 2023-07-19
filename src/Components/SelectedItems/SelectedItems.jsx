import React, { useEffect, useState } from "react";
import SubHeader from "../SubHeade/SubHeader";
import useCarts from "../../Hooks/useCarts";
import { FaRegTrashAlt } from "react-icons/fa";
import Similarproduct from "../SimilarProduct/Similarproduct";
import Swal from "sweetalert2";
const SelectedItems = () => {
  const [cart, refetch] = useCarts();

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
  //item delete
  const itemDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/itemDelete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            refetch();
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="font-serif">
      <div className="containerr">
        <SubHeader title={"Shopping Cart"} subTitle={"Choose Your Favorite"} />
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {cart.map((items) => (
                <tr key={items._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={items.photoOne}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{items.name}</div>
                      </div>
                    </div>
                  </td>

                  <td className="text-lg">${items.price}</td>
                  <td className="text-lg flex items-center">
                    <button
                      className="font-extrabold text-2xl"
                      onClick={() => decreaseQuantity(items._id)}
                    >
                      -
                    </button>
                    <p className="text-center border w-32 px-2 py-3 mx-2">
                      {items.quantity >= 1 ? items.quantity : 1}
                    </p>
                    <button
                      className="font-extrabold text-2xl"
                      onClick={() => increaseQuantity(items._id)}
                    >
                      +
                    </button>
                  </td>
                  <td className="text-lg">
                    ${parseFloat(items.price) * parseInt(items.quantity)}
                  </td>
                  <td>
                    <button
                      onClick={() => itemDelete(items._id)}
                      className="font-extrabold text-xl"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* similarProduct */}
        <Similarproduct />
      </div>
    </div>
  );
};

export default SelectedItems;
