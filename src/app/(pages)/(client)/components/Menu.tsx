"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';

const menuItem = [
  { name: "ผัดไทย", image: "/image/shimp.jpg" },
  { name: "ต้มยำกุ้ง", image: "/image/curry.png" },
];

const Menu = (
  //   { menuItem }: {
  //   menuItem: {
  //     name: string;
  //     image: string;
  //     price: string;
  //   }[];
  // }
) => {
  return (
    <div className="my-2">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay, Grid]}
        autoplay={{ delay: 6000 }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1,
          },
        }}
      >
        {menuItem.map((item, index) => (
          <SwiperSlide key={index} className="mx-auto rounded-lg border h-full p-2">
            <Image src={item.image} alt={item.name} width={200} height={200} className="rounded-lg h-full mx-auto" />
            <h3 className="text-center mt-2">{item.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Menu;