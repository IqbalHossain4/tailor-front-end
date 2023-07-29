import React, { useEffect, useState } from "react";
import SubHeader from "../../../SubHeade/SubHeader";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const ManageUsers = () => {
  const [storeUsers, setStoreUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setStoreUsers(data));
  }, [storeUsers]);
  //Handle Role

  //Handle Status
  const updateStatus = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="font-serif">
      <SubHeader title={"Manage All Users"} />
      <div className="overflow-x-auto mx-8">
        <table className="table table-xs">
          <thead>
            <tr className="text-black text-lg">
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {storeUsers.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name ? item.name : "No available"}</td>
                <td>{item.email ? item.email : "No available"}</td>
                <td onClick={() => updateRole(item._id)}>
                  {item.tailor ? "Seller" : "Buyer"}
                </td>
                <td>
                  <button
                    onClick={() => updateStatus(item._id)}
                    className={`capitalize  ${
                      item.status !== "pending"
                        ? item.status &&
                          "bg-[#97DEFF] text-black w-[80px] py-2 rounded"
                        : "bg-[#E21818] text-white w-[80px] py-2 rounded"
                    }`}
                  >
                    {item.status ? item.status : ""}
                  </button>
                </td>
                <td>
                  <FaEdit />
                </td>
                <td>
                  <FaRegTrashAlt />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
