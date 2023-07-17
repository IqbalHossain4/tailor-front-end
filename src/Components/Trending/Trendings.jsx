import React, { useEffect, useState } from "react";
import SubHeader from "../SubHeade/SubHeader";
import Trending from "./Trending";

const Trendings = () => {
  const [trndingProduct, setTrendingProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bestseller")
      .then((res) => res.json())
      .then((data) => setTrendingProduct(data));
  }, []);
  return (
    <div>
      <SubHeader
        title={"Trending"}
        subTitle={"Top Wishes of this week"}
      ></SubHeader>
      <div className="containerr">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-6">
          {trndingProduct.map((product) => (
            <Trending key={product._id} product={product}></Trending>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trendings;
