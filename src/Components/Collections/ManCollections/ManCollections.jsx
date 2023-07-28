import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import MenCollection from "./MenCollection";

const ManCollections = () => {
  const [menData, setMenData] = useState([]);
  const [price, setPrice] = useState(100);
  //get data
  useEffect(() => {
    fetch("http://localhost:5000/categories?category=men")
      .then((res) => res.json())
      .then((data) => setMenData(data));
  }, []);

  //handle price
  const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value));
  };

  //accordion
  const accordionData = [
    {
      title: "Collections",
      content: (
        <ul>
          <li className="transition-all duration-500 hover:text-[#007bff]">
            Men
          </li>
          <li className="transition-all duration-500 hover:text-[#007bff]">
            Trending
          </li>
          <li className="transition-all duration-500 hover:text-[#007bff]">
            Best Seller
          </li>
        </ul>
      ),
    },
    {
      title: "Product Type",
      content: (
        <ul>
          <li className="transition-all duration-500 hover:text-[#007bff]">
            Pant
          </li>
          <li className="transition-all duration-500 hover:text-[#007bff]">
            Shirt
          </li>
          <li className="transition-all duration-500 hover:text-[#007bff]">
            T-Shirt
          </li>
          <li className="transition-all duration-500 hover:text-[#007bff]">
            Punjabi
          </li>
          <li className="transition-all duration-500 hover:text-[#007bff]">
            Longi
          </li>
        </ul>
      ),
    },
    {
      title: "Color",
      content: (
        <ul className="flex flex-wrap items-center gap-4 ">
          <li
            title="Beige"
            className="w-[30px] h-[30px]  bg-[#FBDBB5] transition-all duration-500 hover:border-2 border-[#007bff] rounded-md"
          ></li>
          <li
            title="Black"
            className="w-[30px] h-[30px]  bg-[#000000] transition-all duration-100 hover:border-2 border-[#007bff] rounded-md"
          ></li>
          <li
            title="White"
            className="w-[30px] h-[30px]  bg-[#ffffff] transition-all duration-100  hover:border-[#007bff] border-2  rounded-md"
          ></li>
          <li
            title="Blue"
            className="w-[30px] h-[30px]  bg-[#2196F3] transition-all duration-100 hover:border-2 border-[#007bff] rounded-md"
          ></li>
          <li
            title="Green"
            className="w-[30px] h-[30px]  bg-[#8BC34A] transition-all duration-100  hover:border-2 border-[#007bff] rounded-md"
          ></li>
          <li
            title="Grey"
            className="w-[30px] h-[30px]  bg-[#C0C0C0] transition-all duration-100 hover:border-2 border-[#007bff] rounded-md"
          ></li>
          <li
            title="Light Blue"
            className="w-[30px] h-[30px]  bg-[#ADD8E6] transition-all duration-100 hover:border-2 border-[#007bff] rounded-md"
          ></li>
          <li
            title="Orange"
            className="w-[30px] h-[30px]  bg-[#FEA634] transition-all duration-100 hover:border-2 border-[#007bff] rounded-md"
          ></li>
          <li
            title="Pink"
            className="w-[30px] h-[30px]  bg-[#FFC0CB] transition-all duration-100 hover:border-2 border-[#007bff] rounded-md"
          ></li>
        </ul>
      ),
    },
    {
      title: "Size",
      content: (
        <div className="flex flex-wrap items-center gap-4 text-center">
          <button className="w-[30px] h-[30px] bg-slate-300 rounded-md  text-center transition-all duration-300 hover:bg-[#007bff] hover:text-white">
            XS
          </button>
          <button className="w-[30px] h-[30px] bg-slate-300 rounded-md transition-all duration-300 hover:bg-[#007bff] hover:text-white">
            S
          </button>
          <button className="w-[30px] h-[30px] bg-slate-300 rounded-md transition-all duration-300 hover:bg-[#007bff] hover:text-white">
            M
          </button>
          <button className="w-[30px] h-[30px] bg-slate-300 rounded-md transition-all duration-300 hover:bg-[#007bff] hover:text-white">
            L
          </button>
          <button className="w-[30px] h-[30px] bg-slate-300 rounded-md transition-all duration-300 hover:bg-[#007bff] hover:text-white">
            XL
          </button>
        </div>
      ),
    },
    {
      title: "Price",
      content: (
        <div className="flex items-center justify-between">
          <input
            type="range"
            id="price"
            name="price"
            min="50"
            max="5000"
            value={price}
            onChange={handlePriceChange}
            className="slider"
          />
          <label
            htmlFor="price"
            className=" px-8 bg-gray-100 font-bold mb-4 rounded-md"
          >
            ${price}
          </label>
        </div>
      ),
    },
  ];

  const allSectionsOpen = accordionData.map((_, index) => index);
  const [openSections, setOpenSections] = useState(allSectionsOpen);

  const toggleAccordion = (index) => {
    setOpenSections((prevOpenSections) => {
      if (prevOpenSections.includes(index)) {
        return prevOpenSections.filter((item) => item !== index);
      } else {
        return [...prevOpenSections, index];
      }
    });
  };
  return (
    <div>
      <div className="containerr">
        {/* sideber */}
        <div className="flex items-start gap-16 font-serif">
          <div className="w-1/6">
            <div className="container mx-auto py-4">
              {accordionData.map((item, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="w-full flex items-center justify-between py-2 text-left font-semibold border-b-2"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.title}

                    {openSections.includes(index) ? (
                      <FaMinus className="ml-2 text-xs" />
                    ) : (
                      <FaPlus className="ml-2 text-xs" />
                    )}
                  </button>
                  <div>
                    {openSections.includes(index) && (
                      <div className="text-zinc-500 text-sm leading-10  py-2 cursor-pointer ">
                        {item.content}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-5/6">
            <h2 className="text-2xl mb-8">Mens{}</h2>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-2">
              {menData.map((item) => (
                <MenCollection key={item._id} menData={item}></MenCollection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManCollections;
