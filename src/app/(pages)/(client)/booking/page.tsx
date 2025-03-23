"use client";

import React, { useState } from "react";

export default function Page() {
    const nfcDevices = [
        { brand: "Apple", model: "iPhone 15 Pro" },
        { brand: "Apple", model: "iPhone 14 Pro Max" },
        { brand: "Apple", model: "iPhone 13 Pro" },
        { brand: "Samsung", model: "Galaxy S23 Ultra" },
        { brand: "Samsung", model: "Galaxy Z Fold 5" },
        { brand: "Samsung", model: "Galaxy S22" },
        { brand: "Google", model: "Pixel 8 Pro" },
        { brand: "Google", model: "Pixel 7a" },
        { brand: "Sony", model: "Xperia 1 V" },
        { brand: "OnePlus", model: "OnePlus 11" },
        { brand: "OnePlus", model: "OnePlus 10 Pro" },
        { brand: "Xiaomi", model: "Xiaomi 13 Pro" },
        { brand: "Xiaomi", model: "Xiaomi 12T" },
        { brand: "Huawei", model: "Mate 50 Pro" },
        { brand: "Huawei", model: "P40 Pro" }
    ];

    const [searchTerm, setSearchTerm] = useState("");

    // Filter devices based on search term
    const filteredDevices = nfcDevices.filter(
        (device) =>
            device.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            device.model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 h-full max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">รุ่นที่รองรับ NFC</h1>
            <input
                type="text"
                placeholder="ค้นหาโดยแบรนด์หรือรุ่น"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <table className="border-collapse border bg-white p-4 rounded shadow border-gray-400 w-full mt-4">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">แบรนด์</th>
                        <th className="border border-gray-300 p-2">รุ่น</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDevices.map((device, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 p-2">{device.brand}</td>
                            <td className="border border-gray-300 p-2">{device.model}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}