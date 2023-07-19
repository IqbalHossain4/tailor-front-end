import React, { useEffect, useState } from "react";
import useCarts from "../../Hooks/useCarts";
import SimilarProducts from "./SimilarProducts";
import SubHeader from "../SubHeade/SubHeader";
import image from "../../assets/image/arrival.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carosal.css";
import { Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

const Similarproduct = () => {
  const [cart] = useCarts();
  const [showImg, setShowImg] = useState(null);
  const [similarProduct, setSimilarProduct] = useState([]);
  var categories;
  cart.map((item) => (categories = item.category));
  //fetch data with catrgory
  useEffect(() => {
    fetch(`http://localhost:5000/category?category=${categories}`)
      .then((res) => res.json())
      .then((data) => setSimilarProduct(data));
  }, [similarProduct]);
  console.log(similarProduct);

  //carosal
  const [setSwiperRef] = useState(null);

  return (
    <>
      <SubHeader
        title={"You May Be Interested In These Products"}
        subTitle={"Silimar Product"}
      />
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          {similarProduct.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="font-serif">
                <div className="rounded chart">
                  <div className="w-[350px] h-[350px] mx-auto  lg:p-10 md:p-6 p-4 bg-[#f0f8ff] rounded">
                    <img
                      className="rounded w-full h-full"
                      src={showImg ? showImg : item.photoOne}
                      alt=""
                    />
                  </div>

                  {/* text section */}
                  <div className="addbtn">
                    <div className="text-center mt-4">
                      <span className="flex justify-center">
                        <Rating
                          readOnly
                          value={item.rating}
                          style={{ maxWidth: 60 }}
                        />
                      </span>
                      <p className="mt-2 text-sm">{item.name}</p>
                      <h4 className="font-semibold text-lg">${item.price}</h4>
                    </div>

                    <div className="flex justify-center gap-4 mx-auto mt-3 mb-6">
                      <div className="w-[40px] h-[40px]">
                        <img
                          onClick={() => setShowImg(item.photoOne)}
                          className={`w-full h-full ${
                            showImg == item.photoOne ? "border" : "border-none"
                          } rounded-md border-2 border-[#007bff] cursor-pointer`}
                          src={item.photoOne}
                          alt=""
                        />
                      </div>
                      <div className="w-[40px] h-[40px]">
                        <img
                          onClick={() => setShowImg(item.photoTwo)}
                          className={`w-full h-full ${
                            showImg == item.photoTwo ? "border" : "border-none"
                          } rounded-md border-2 border-[#007bff] cursor-pointer`}
                          src={item.photoTwo}
                          alt=""
                        />
                      </div>
                      <div className="w-[40px] h-[40px]">
                        <img
                          onClick={() => setShowImg(item.photoThree)}
                          className={`w-full h-full ${
                            showImg == item.photoThree
                              ? "border"
                              : "border-none"
                          } rounded-md border-2 border-[#007bff] cursor-pointer`}
                          src={item.photoThree}
                          alt=""
                        />
                      </div>
                    </div>
                    {/* add chart */}
                    <div className="text-center ">
                      <button className="py-2 px-4 nav-link">
                        Add To Chart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Similarproduct;
