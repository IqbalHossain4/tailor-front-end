import React from "react";
import female from "../../assets/categoryImage/famale.jpg";
import male from "../../assets/categoryImage/male.jpg";
import kids from "../../assets/categoryImage/kids.jpg";
import couple from "../../assets/categoryImage/couple.jpg";
import shoes from "../../assets/categoryImage/shoes.jpg";
import newProduct from "../../assets/categoryImage/female-group.jpg";

const SubCategory = () => {
  return (
    <div className="containerr">
      <div className="lg:grid md:grid flex flex-col  lg:grid-cols-4 md:grid-cols-4  grid-cols-1 lg:grid-rows-2 md:grid-rows-2 grid-rows-none gap-4 w-full 2xl:h-[500px] xl:h-[400px] lg:h-[350px]   md:h-[250px]   overflow-hidden box-content font-serif">
        <div className="lg:col-start-1 col-end-2 row-start-1 row-end-3">
          <div className="mb-4 row-start-1 row-end-2 w-full h-fit relative btnHover">
            <img
              className="object-cover max-h-[240px] w-full   transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-500"
              src={newProduct}
              alt=""
            />
            <div className="w-full h-full flex items-center justify-center">
              <button className="absolute top-[40%]    py-[6px] px-[20px]  hoverBtn">
                New
              </button>
            </div>
          </div>
          <div className="row-start-2 row-end-3 w-full lg:h-fit h-full relative btnHover">
            <img
              className="object-s h-full w-full transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-500"
              src={kids}
              alt=""
            />
            <div className="w-full h-full flex items-center justify-center">
              <button className="absolute top-[40%]      py-[6px] px-[20px]  hoverBtn">
                Kids
              </button>
            </div>
          </div>
        </div>

        <div className="col-start-2 col-end-3 row-start-1 row-end-3 w-full h-fit relative btnHover">
          <img
            className="object-fill h-fit w-full transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-500"
            src={male}
            alt=""
          />
          <div className="w-full h-full flex items-center justify-center">
            <button className="absolute  top-[40%]    py-[6px] px-[20px]  hoverBtn">
              Men
            </button>
          </div>
        </div>

        <div className="row-start-1 row-end-2 w-full h-fit relative btnHover">
          <img
            className="object-cover max-h-[240px] w-full transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-500"
            src={female}
            alt=""
          />
          <div className="w-full h-full flex items-center justify-center">
            <button className="absolute top-[40%]    py-[6px] px-[20px]  hoverBtn">
              Women
            </button>
          </div>
        </div>
        <div className="row-start-1 row-end-2 w-full h-fit relative btnHover">
          <img
            className="object-cover max-h-[240px] w-full transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-500"
            src={couple}
            alt=""
          />
          <div className="w-full h-full flex items-center justify-center">
            <button className="absolute top-[40%]    py-[6px] px-[20px]  hoverBtn">
              Couple
            </button>
          </div>
        </div>

        <div className="col-start-3 col-end-[-1] row-start-2 row-end-3 w-full h-fit relative btnHover">
          <img
            className="object-cover h-full w-full transition ease-in-out delay-250 hover:-translate-1 hover:scale-105 duration-500"
            src={shoes}
            alt=""
          />
          <div className="w-full h-full flex items-center justify-center">
            <button className="absolute lg:top-[20%] md:top-[15%] top-[40%]    py-[6px] px-[20px]  hoverBtn">
              Trending
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
