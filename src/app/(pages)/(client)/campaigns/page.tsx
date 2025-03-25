"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";

export default function Page() {

    const featuredCampaigns = [
        {
            id: 1,
            title: "Call Of Duty 2002",
            slug: "Summer-Promotion-2025",
            image: "/image/001.jpg",
            type: "Seasonal",
            participants: 1250,
            progress: 75,
            daysLeft: 14
        },
        {
            id: 2,
            title: "Milo Limited Edition",
            slug: "Loyalty-Rewards-Program",
            image: "/image/002.jpg",
            type: "Ongoing",
            participants: 3420,
            progress: 90,
            daysLeft: 30
        },
        {
            id: 3,
            title: "PlayStation 2 Launch",
            slug: "New-Product-Launch",
            image: "/image/003.jpg",
            type: "Special Event",
            participants: 850,
            progress: 45,
            daysLeft: 21
        }
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-blue-950 to-black text-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">ALL Campaigns</h2>
                    {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        View the most successful and popular campaigns from our customers
                    </p> */}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {featuredCampaigns.map((campaign) => (
                        <div key={campaign.id} className="bg-gradient-to-br from-gray-900 to-blue-900/50 rounded-2xl overflow-hidden shadow-xl border border-blue-500/20">
                            <div className="relative h-52">
                                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full z-10 text-sm">
                                    {campaign.type}
                                </div>
                                <Image
                                    src={campaign.image || "/image/444.gif"} // Fallback image if campaign image not found
                                    alt={campaign.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-4">{campaign.title}</h3>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-gray-300 flex items-center">
                                        <FaUsers className="mr-2" /> {campaign.participants.toLocaleString()} participants
                                    </span>
                                    <span className="text-gray-300 flex items-center">
                                        <FaCalendarAlt className="mr-2" /> {campaign.daysLeft} days left
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${campaign.progress}%` }}></div>
                                    </div>
                                    <div className="flex justify-between mt-2 text-sm text-gray-400">
                                        <span>Progress</span>
                                        <span>{campaign.progress}%</span>
                                    </div>
                                </div>
                                <Link href={`/campaigns/${campaign.slug}.html`} className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}