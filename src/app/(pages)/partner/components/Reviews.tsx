"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const mockReviews = [
    { author: "John Doe", rating: 5, text: "Amazing food and great service!" },
    { author: "Jane Smith", rating: 4, text: "Really enjoyed the meal, will come back again." },
    { author: "Sam Wilson", rating: 3, text: "Good food but the service was a bit slow." },
    { author: "Anna Lee", rating: 5, text: "Best restaurant in town!" },
    { author: "Mike Brown", rating: 4, text: "Great atmosphere and delicious food." },
];

const Reviews = () => {
    return (
        <div className="my-2">
            <Swiper
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay, Grid]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 6000 }}
            >
                {mockReviews.map((item, index) => (
                    <SwiperSlide key={index} className="mx-auto text-center p-2">
                        <p className="text-center mt-2">&quot; {item.text} &quot;</p>
                        <small className="text-center mt-2">{item.author}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;