// import React from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";

// Import Swiper styles
import "swiper/css";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Deals = () => {
  return (
    <>
      <div className="w-[1600px] mx-auto flex bg-white mt-4  ">

        <div className="flex flex-col overflow-hidden">
          <h1 className="text-3xl font-semibold m-4 cursor-pointer">Best Deals on Smartphones</h1>
          <div className="flex-1  ">
            <Swiper
              slidesPerView={6}
           
              navigation={true}
              modules={[ Navigation]}
            >
              <SwiperSlide>
                <div className="w-full p-4 flex flex-col justify-center items-center">
                  <img
                    src={"/Products/m1.jpeg"}
                    className="hover:scale-105 hover:cursor-pointer"
                    alt=""
                  />
                  <div className="flex flex-col items-center">
                    <p className="font-medium">moto edge 40 neo</p>
                    <h4>incl of offer</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full p-4 flex flex-col justify-center items-center">
                  <img
                    src={"/Products/m2.jpeg"}
                    className="hover:scale-105 hover:cursor-pointer"
                    alt=""
                  />
                  <div className="flex flex-col items-center">
                    <p className="font-medium">moto edge 40 neo</p>
                    <h4>incl of offer</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full p-4 flex flex-col justify-center items-center">
                  <img
                    src={"/Products/m3.jpeg"}
                    className="hover:scale-105 hover:cursor-pointer"
                    alt=""
                  />
                  <div className="flex flex-col items-center">
                    <p className="font-medium">moto edge 40 neo</p>
                    <h4>incl of offer</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full p-4 flex flex-col justify-center items-center">
                  <img
                    src={"/Products/m4.webp"}
                    className="hover:scale-105 hover:cursor-pointer"
                    alt=""
                  />
                  <div className="flex flex-col items-center">
                    <p className="font-medium">moto edge 40 neo</p>
                    <h4>incl of offer</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full p-4 flex flex-col justify-center items-center">
                  <img
                    src={"/Products/m5.jpeg"}
                    className="hover:scale-105 hover:cursor-pointer"
                    alt=""
                  />
                  <div className="flex flex-col items-center">
                    <p className="font-medium">moto edge 40 neo</p>
                    <h4>incl of offer</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full p-4 flex flex-col justify-center items-center">
                  <img
                    src={"/Products/m6.jpeg"}
                    className="hover:scale-105 hover:cursor-pointer"
                    alt=""
                  />
                  <div className="flex flex-col items-center">
                    <p className="font-medium">moto edge 40 neo</p>
                    <h4>incl of offer</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full p-4 flex flex-col justify-center items-center">
                  <img
                    src={"/Products/m7.webp"}
                    className="hover:scale-105 hover:cursor-pointer"
                    alt=""
                  />
                  <div className="flex flex-col items-center">
                    <p className="font-medium">moto edge 40 neo</p>
                    <h4>incl of offer</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full p-4 flex flex-col justify-center items-center">
                  <img
                    src={"/Products/m8.jpeg"}
                    className="hover:scale-105 hover:cursor-pointer"
                    alt=""
                  />
                  <div className="flex flex-col items-center">
                    <p className="font-medium">moto edge 40 neo</p>
                    <h4>incl of offer</h4>
                  </div>
                </div>
              </SwiperSlide>
            
            
            </Swiper>
          </div>
        </div>

        <div className="w-[20%] ">
            <img src={"/Add.webp"} alt="" />
        </div>
      </div>
    </>
  );
};

export default Deals;
