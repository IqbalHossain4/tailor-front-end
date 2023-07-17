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
      <div className="relative w-full h-full font-serif">
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
            <div className="relative md:h-[700px] h-[200px] w-[100%] ">
              <img className="h-[100%] w-[100%]" src={baannerImg} alt="" />
              <div className="absolute   top-[35%] left-[35%] ">
                <div className="w-full relative z-[11]">
                  <h1 className="md:text-[40px] lg:text-[60px] text-[18px] font-extrabold  capitalize shado">
                    Find your <span className="text-black">choice</span>
                  </h1>
                  <button className="absolute md:top-[150px] top-[30px] md:left-[35%] left-[15%] nav-link md:py-2 py-1 md:px-4 px-2  capitalize font-semibold ">
                    Shop Now!
                  </button>
                </div>
              </div>
              <div className="absolute bg-black w-full  h-full opacity-20 top-1 left-1"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative md:h-[700px] h-[200px] w-[100%] ">
              <img className="h-[100%] w-[100%]" src={baannerImg2} alt="" />
              <div className="absolute   top-[35%] left-[35%] ">
                <div className="w-full relative z-[11]">
                  <h1 className="md:text-[40px] lg:text-[60px] text-[18px] font-extrabold  capitalize shado">
                    Show your <span className="text-black">creativity</span>
                  </h1>
                  <button className="absolute md:top-[150px] top-[30px] md:left-[35%] left-[15%] nav-link md:py-2 py-1 md:px-4 px-2  capitalize font-semibold">
                    Join Us!
                  </button>
                </div>
              </div>
              <div className="absolute bg-black w-full  h-full opacity-10 top-1 left-1"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative md:h-[700px] h-[200px] w-[100%] ">
              <div className="md:h-[700px] h-[200px] w-[100%]">
                <video
                  loop
                  muted
                  autoPlay={"autoplay"}
                  ref={vidRef}
                  width={"100%"}
                  className="lg:block hidden "
                >
                  <source src={vid2} type="video/mp4" />
                </video>
                <img
                  className="h-[100%] w-[100%] block lg:hidden"
                  src={baannerImg3}
                  alt=""
                />
              </div>
              <div className="absolute   top-[35%] left-[35%] ">
                <div className="w-full relative z-[11]">
                  <h1 className="md:text-[40px] lg:text-[60px] text-[18px] font-extrabold  capitalize shado">
                    fulfill your <span className="text-black">Dream</span>
                  </h1>
                  <button className="absolute md:top-[150px] top-[30px] md:left-[35%] left-[15%] nav-link md:py-2 py-1 md:px-4 px-2  capitalize font-semibold">
                    Join Us!
                  </button>
                </div>
              </div>
              <div className="absolute bg-black w-full  h-full opacity-10 top-1 left-1"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
