import Image from 'next/image'
import React, { useState } from 'react'
import { PackageCard } from './Package';
import { Star } from 'lucide-react';

const Product = () => {
    // Fix the typo in state setter name
    const [color, setColor] = useState('black'); // Set default color

    const handleColor = (color: string) => {
        setColor(color)
    }
    const product = [
        {
            number: "140 * 120",
            label: "แบบตั้งโต๊ะ",
            image: [
                {
                    color: "black",
                    url: "/image/black.png"
                },
                {
                    color: "white",
                    url: "/image/white.png"
                }
            ]
        },
    ]

    return (
        <div className="container mx-auto grid gap-8 px-6">
            <div className='lg:flex mx-auto justify-between'>
                {product.map((stat, index) => (
                    <div key={index} className="text-center lg:p-6">
                        <Image
                            // Fix the image source filtering
                            src={stat.image.find((item) => item.color === color)?.url || stat.image[0].url}
                            alt="Hero background"
                            width={450}
                            height={450}
                            className="object-contain rounded-2xl my-4 mx-auto"
                        />
               
                        {/* Add color selection buttons */}
                        <div className="flex justify-center gap-2 mt-4">
                            {stat.image.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleColor(item.color)}
                                    className={`w-8 h-8 rounded-full border-2 ${color === item.color ? 'border-blue-500' : 'border-gray-300'
                                        }`}
                                    style={{ backgroundColor: item.color }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
                <div className='mt-5'>
                    <PackageCard
                        title="แผนพรีเมียม"
                        size="140 * 120"
                        type="แบบตั้งโต๊ะ"
                        features={["1 แท็ก NFC", "ลิงก์โปรไฟล์ที่กำหนดเอง", "จัดส่งฟรี"]}
                        icon={<Star className="w-8 h-8 text-yellow-500" />}
                        price="490 บาท"
                    />
                </div>
            </div>
        </div>
    )
}

export default Product