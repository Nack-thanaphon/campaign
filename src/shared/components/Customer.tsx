"use client"

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useMutation } from "@tanstack/react-query";
import Link from 'next/link';
import { getAllPromote, ProfileData } from '../services/superbase.service';
import { Phone } from 'lucide-react';
import Image from 'next/image';

const Customer = () => {
    const [data, setData] = useState<ProfileData[]>([]);

    const fetch = useMutation({
        mutationFn: async () => {
            try {
                const response = await getAllPromote();
                setData(response ?? []);
            } catch (error: any) {
                console.error("Draft error:", error);
                throw new Error(error);
            }
        },
    });

    useEffect(() => {
        fetch.mutate();
    }, []);

    return (
        <div className="my-2">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                    },
                    600: {
                        slidesPerView: 1,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className="mx-auto text-center border py-5 bg-white-200 rounded-lg p-2">
                        <Link
                            href={`/${item.slug}`}
                            key={item.id}
                            className="block transition-transform duration-200 hover:scale-102"
                        >
                            <Image
                                src={"/Google-Review.png"}
                                alt="Logo"
                                width={100}
                                height={100}
                                className="rounded-full object-cover mx-auto mb-2"
                            />
                            <h1 className='text-bold text-[1.5rem]'>{item.profile_name}</h1>
                            <div className="flex justify-center mt-1 p-3">
                                <Phone className="w-4 h-4 mr-2" />
                                <p>{item.phone}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Customer;