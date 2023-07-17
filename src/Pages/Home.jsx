import React from "react";
import Banner from "../Components/Banner/Banner";
import SubCategory from "../Components/SubCategory/SubCategory";
import BestProducts from "../Components/BestSellerProduct/BestProducts";
import NewCollection from "../Components/NewCollection/NewCollection";
import Trendings from "../Components/Trending/Trendings";

const Home = () => {
  return (
    <div>
      <Banner />
      <SubCategory />
      <BestProducts />
      <NewCollection />
      <Trendings />
    </div>
  );
};

export default Home;
