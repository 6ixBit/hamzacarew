"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";
import "./carousel.styles.css";

import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

interface ICarousel {
  children: React.ReactNode;
}

export default function Carousel({ children }: ICarousel) {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}
