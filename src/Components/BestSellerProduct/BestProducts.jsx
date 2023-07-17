import React, { useEffect, useState } from "react";
import BestProduct from "./bestProduct";
import SubHeader from "../SubHeade/SubHeader";

const BestProducts = () => {
  const [bestProduct, setBestProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bestseller")
      .then((res) => res.json())
      .then((data) => setBestProduct(data));
  }, []);
  return (
    <div>
      <SubHeader
        title={"Best Seller"}
        subTitle={"Top Products of this week"}
      ></SubHeader>
      <div className="containerr">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-6">
          {bestProduct.map((product) => (
            <BestProduct key={product._id} product={product}></BestProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
