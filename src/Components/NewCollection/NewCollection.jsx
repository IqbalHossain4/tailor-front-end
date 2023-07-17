import React from "react";
import arrival from "../../assets/image/arrival.jpg";
import newCollection from "../../assets/image/newCollection.jpg";
import getOff from "../../assets/image/getof.jpg";
const NewCollection = () => {
  return (
    <div className="mt-16">
      <div className="containerr">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4 font-serif">
          <div className="w-full h-full relative">
            <img
              className="w-[590px] h-[395px] transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-500"
              src={arrival}
              alt=""
            />
            <div className=" absolute  top-[40%] xl:left-[30%] lg:left-[15%] left-[20%] bg-white bg-opacity-60 py-4 px-8 rounded text-center">
              <p className="text-sm">
                Autumn <span className="text-[#007bff]">2023</span>
              </p>
              <button className="text-2xl">New Arrival</button>
            </div>
          </div>
          <div className="w-full h-full relative">
            <img
              className="w-[590px] h-[395px] transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-500"
              src={newCollection}
              alt=""
            />
            <div className="py-4 px-8 absolute  top-[40%] xl:left-[30%] lg:left-[15%] left-[20%]  bg-white bg-opacity-60 rounded text-center">
              <p className="text-sm">New Collection</p>
              <button className="text-2xl text-[#007bff]">
                Attractive Style
              </button>
            </div>
          </div>
          <div className="w-full h-full relative">
            <img
              className="w-[590px] h-[395px] transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-500"
              src={getOff}
              alt=""
            />
            <div className="py-4 px-8 absolute  top-[40%] xl:left-[25%] lg:left-[10%] left-[20%] bg-white bg-opacity-80 rounded text-center">
              <p className="text-sm">Great Summer Clearance sales</p>
              <button className="text-2xl">
                Get Up To <span className="text-[#007bff]">50% Off</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
