import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";

export default function Banner() {
    const listBanner = [
        {
            title: 'banner1',
            url: "../../../static/images/banner1.jpg"
        },
        {
            title: 'banner2',
            url: "../../../static/images/banner1.jpg"
        }
    ];

    const renderListBanner = () => {
        return listBanner.map((value, index) => {
            return <SwiperSlide key={index}>
                <img src={value.url} alt={value.title} />
            </SwiperSlide>
        })
    }
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {renderListBanner()}
      </Swiper>
    </>
  );
}