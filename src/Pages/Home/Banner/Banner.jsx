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
import { Fade } from "react-awesome-reveal";

const Banner=()=> {
  return (
    <div>
      <div className="hidden md:block">
        <Fade>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
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
        </Fade>
      </div>
      <div className=" md:hidden">
        <Fade>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper rounded"
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
        </Fade>
      </div>
    </div>
  );
};

export default Banner; 


