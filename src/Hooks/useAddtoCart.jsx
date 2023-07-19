import React from "react";
import useCarts from "./useCarts";
import Swal from "sweetalert2";

const useAddtoCart = () => {
  const [, refetch] = useCarts();
  const addItem = (selectedItems) => {
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
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return addItem;
};

export default useAddtoCart;
