import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useCarts from "../../../Hooks/useCarts";
import SubHeader from "../../SubHeade/SubHeader";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { user } = useContext(AuthContext);
  const [ownProduct, setOwnProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/ownProduct?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOwnProduct(data));
  }, [ownProduct]);

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
        fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {});
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="font-serif">
      <SubHeader title={"Available Your All Products"} />
      <div className="containerr">
        <table className="table ">
          <thead>
            <th className="underline text-md text-black">Photo</th>
            <th className="underline text-md text-black">Price</th>
            <th className="underline text-md text-black">Category</th>
            <th className="underline text-md text-black">Product Type</th>
            <th className="underline text-md text-black">Edit</th>
            <th className="underline text-md text-black">Action</th>
          </thead>

          <tbody>
            {ownProduct.map((items) => (
              <tr key={items._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          className="object-scale-down"
                          src={items.photoOne}
                          alt="productPhoto"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xs">{items.name}</div>
                    </div>
                  </div>
                </td>

                <td className="text-xs text-black">${items.price}</td>
                <td className="text-xs text-black">{items.category}</td>
                <td className="text-xs text-black">{items.productName}</td>
                <td>
                  <button className="font-extrabold text-md">
                    <Link to={`/dashboard/tailor/ownProducts/${items._id}`}>
                      <FaEdit />
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => itemDelete(items._id)}
                    className="font-extrabold text-md"
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
