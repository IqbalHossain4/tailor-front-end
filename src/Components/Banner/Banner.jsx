import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import vid2 from "../../assets/video/banner(2).mp4";
import baannerImg from "../../assets/video/img.jpg";
import baannerImg2 from "../../assets/video/img1.jpg";
import baannerImg3 from "../../assets/video/img2.jpg";

const Banner = () => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="md:h-[700px] h-[200px] w-[100%] relative">
              <img className="h-[100%] w-[100%]" src={baannerImg} alt="" />
              <div className="absolute w-full h-full  text-red-500 text-[50px]">
                <h4>Hello</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:h-[700px] h-[200px] w-[100%]">
              <img className="h-[100%] w-[100%]" src={baannerImg2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:h-[700px] h-[200px] w-[100%]">
              <video
                loop
                muted
                autoPlay={"autoplay"}
                ref={vidRef}
                width={"100%"}
                className="md:block hidden"
              >
                <source src={vid2} type="video/mp4" />
              </video>
              <img
                className="h-[100%] w-[100%] block md:hidden"
                src={baannerImg3}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
