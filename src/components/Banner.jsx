import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "../App.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Banner() {
  return (
    <>
    <div className="w-[1600px] mx-auto mt-4  ">
    <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={"/Banners/Banner1.webp"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={"/Banners/Banner2.webp"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={"/Banners/Banner3.webp"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={"/Banners/Banner4.webp"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={"/Banners/Banner5.webp"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={"/Banners/Banner6.webp"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={"/Banners/Banner7.webp"} alt="" /></SwiperSlide>
      </Swiper>
    </div>
      
    </>
  );
}

