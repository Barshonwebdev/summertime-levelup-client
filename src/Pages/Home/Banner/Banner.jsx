import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from '../../../assets/banner/1.jpg'
import slider2 from '../../../assets/banner/2.jpg'
import slider3 from '../../../assets/banner/3.jpg'
import slider4 from '../../../assets/banner/4.jpg'
import slider5 from '../../../assets/banner/5.jpg'
import slider6 from '../../../assets/banner/6.jpg'
import slider7 from '../../../assets/banner/7.jpg'
import slider8 from '../../../assets/banner/8.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, } from "swiper/modules";

const Banner=()=> {
  return (
    <div>
      <div className="hidden md:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper md:rounded-lg"
        >
          <SwiperSlide className="">
            <img className="zoom" src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="zoom" src={slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="zoom" src={slider3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="zoom" src={slider4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="zoom" src={slider5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="zoom" src={slider6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="zoom" src={slider7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="zoom" src={slider8} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper md:rounded-lg"
        >
          <SwiperSlide className="relative">
            <img className="z-20" src={slider1} alt="" />
            <p className="flex justify-center items-center z-10 absolute">
              sdsadsadasdas
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider8} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner; 


