"use client";

import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaUsers, FaCalendarAlt, FaChartLine, FaClock, FaTags, FaLink,
  FaQrcode, FaMobile, FaShareAlt, FaRegCopy, FaEdit, FaPauseCircle,
  FaPlayCircle, FaTrash, FaInfoCircle, FaMapMarkerAlt
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function CampaignDetailPage({ params }: { params: { slug: string } }) {
  const [campaign, setCampaign] = useState<any>(null); // Using `any` temporarily for simplicity; ideally, define an interface
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "statistics" | "participants" | "locations" | "settings">("overview");
  const [page, setPage] = useState(1);
  const participantsPerPage = 5;



  const data = {
    id: 1,
    title: "Summer Promotion 2025",
    description: "Celebrate summer with special discounts on our new products with a chance to win luxurious travel prizes",
    image: "/image/campaign1.jpg",
    status: "active",
    type: "Seasonal",
    startDate: "2025-04-01",
    endDate: "2025-07-31",
    participants: 1250,
    participantsGoal: 2000,
    totalScans: 3745,
    uniqueScans: 1852,
    conversions: 425,
    progress: 75,
    engagementRate: 22.8,
    targetAudience: "Ages 18-35, interested in lifestyle products and travel",
    locations: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"],
    nfcTags: 25,
    actions: [
      { name: "Get 15% discount", completions: 387 },
      { name: "Register for free gifts", completions: 254 },
      { name: "Share on social media", completions: 142 }
    ],
    dailyStats: [
      { date: "2025-04-01", scans: 120, participants: 85 },
      { date: "2025-04-02", scans: 145, participants: 92 },
      { date: "2025-04-03", scans: 132, participants: 88 },
      { date: "2025-04-04", scans: 156, participants: 103 },
      { date: "2025-04-05", scans: 178, participants: 112 },
      { date: "2025-04-06", scans: 165, participants: 98 },
      { date: "2025-04-07", scans: 189, participants: 120 }
    ]
  }

  // Fetch campaign data
  useEffect(() => {
    // const fetchCampaign = async () => {
    //   try {
    //     // Simulate API call (replace with real endpoint)
    //     const response = await new Promise((resolve) =>
    //       setTimeout(() => resolve({
    //         json: () => (
    //           const data ={
    //           id: 1,
    //           title: "Summer Promotion 2025",
    //           description: "Celebrate summer with special discounts on our new products with a chance to win luxurious travel prizes",
    //           image: "/image/campaign1.jpg",
    //           status: "active",
    //           type: "Seasonal",
    //           startDate: "2025-04-01",
    //           endDate: "2025-07-31",
    //           participants: 1250,
    //           participantsGoal: 2000,
    //           totalScans: 3745,
    //           uniqueScans: 1852,
    //           conversions: 425,
    //           progress: 75,
    //           engagementRate: 22.8,
    //           targetAudience: "Ages 18-35, interested in lifestyle products and travel",
    //           locations: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"],
    //           nfcTags: 25,
    //           actions: [
    //             { name: "Get 15% discount", completions: 387 },
    //             { name: "Register for free gifts", completions: 254 },
    //             { name: "Share on social media", completions: 142 }
    //           ],
    //           dailyStats: [
    //             { date: "2025-04-01", scans: 120, participants: 85 },
    //             { date: "2025-04-02", scans: 145, participants: 92 },
    //             { date: "2025-04-03", scans: 132, participants: 88 },
    //             { date: "2025-04-04", scans: 156, participants: 103 },
    //             { date: "2025-04-05", scans: 178, participants: 112 },
    //             { date: "2025-04-06", scans: 165, participants: 98 },
    //             { date: "2025-04-07", scans: 189, participants: 120 }
    //           ]
    //         })
    //       }), 500)
    //     );
    //     // const data = await response.json();
    //     setCampaign(data);
    //   } catch (err) {
    //     setError(err as Error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchCampaign();
    setCampaign(data);
    setLoading(false);

  }, []);

  // Helper functions
  const daysLeft = () => {
    if (!campaign) return 0;
    const end = new Date(campaign.endDate);
    const today = new Date();
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Chart data for daily stats
  const chartData = {
    labels: campaign?.dailyStats?.map((stat: any) => stat.date) || [],
    datasets: [{
      label: "Daily Scans",
      data: campaign?.dailyStats?.map((stat: any) => stat.scans) || [],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      fill: false,
    }],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { y: { beginAtZero: true } },
  };

  // Render states
  if (loading) {
    return (
      <div className="bg-gradient-to-b from-black to-blue-950 text-white min-h-screen">

        <main className="px-6 py-20">
          <div className="container mx-auto flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        </main>

      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-b from-black to-blue-950 text-white min-h-screen">

        <main className="px-6 py-20">
          <div className="container mx-auto text-center">
            <p className="text-red-500">Error: {error.message}</p>
          </div>
        </main>

      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-black to-blue-950 text-white ">

      <main>
        {/* CAMPAIGN HEADER */}
        <section className="relative pt-20 pb-10 px-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center mb-6">
              <Link href="/campaigns" className="text-blue-400 hover:text-blue-300 flex items-center mb-4 lg:mb-0">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to all campaigns
              </Link>
              <div className="ml-auto flex space-x-2">
                <button className="flex items-center px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-sm transition">
                  <FaShareAlt className="mr-2" /> Share
                </button>
                <button className="flex items-center px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-sm transition">
                  <FaRegCopy className="mr-2" /> Copy link
                </button>
              </div>
            </div>

            <div className="lg:flex">
              <div className="lg:w-2/3 lg:pr-12">
                <div className="flex items-center mb-4">
                  <span className={`${campaign.status === "active" ? "bg-green-500" :
                    campaign.status === "paused" ? "bg-yellow-500" :
                      campaign.status === "ended" ? "bg-red-500" : "bg-gray-500"
                    } px-3 py-1 rounded-full text-xs font-medium mr-3`}>
                    {campaign.status === "active" ? "Active" :
                      campaign.status === "paused" ? "Paused" :
                        campaign.status === "ended" ? "Ended" : "Draft"}
                  </span>
                  <span className="bg-blue-500 px-3 py-1 rounded-full text-xs font-medium">
                    {campaign.type}
                  </span>
                </div>

                <h1 className="text-4xl font-bold mb-4">{campaign.title}</h1>
                <p className="text-gray-300 mb-6">{campaign.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FaCalendarAlt className="text-blue-400 mr-2" />
                      <span className="text-sm text-gray-300">Duration</span>
                    </div>
                    <p className="font-medium">{formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}</p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FaClock className="text-blue-400 mr-2" />
                      <span className="text-sm text-gray-300">Days left</span>
                    </div>
                    <p className="font-medium">{daysLeft()} days</p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FaUsers className="text-blue-400 mr-2" />
                      <span className="text-sm text-gray-300">Participants</span>
                    </div>
                    <p className="font-medium">{campaign.participants.toLocaleString()} / {campaign.participantsGoal.toLocaleString()}</p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FaQrcode className="text-blue-400 mr-2" />
                      <span className="text-sm text-gray-300">Scans</span>
                    </div>
                    <p className="font-medium">{campaign.totalScans.toLocaleString()}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div
                      className="bg-blue-500 h-4 rounded-full"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Progress</span>
                    <span>{campaign.progress}%</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="rounded-2xl overflow-hidden border border-blue-500/20 h-64 relative">
                  <Image
                    src={campaign.image || "/image/campaign1.jpg"}
                    alt={campaign.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center">
                    <FaEdit className="mr-2" /> Join Campaign
                  </button>
                  {/* {campaign.status === "active" ? (
                    <button className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg flex items-center justify-center">
                      <FaPauseCircle className="mr-2" /> Pause Campaign
                    </button>
                  ) : campaign.status === "paused" ? (
                    <button className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg flex items-center justify-center">
                      <FaPlayCircle className="mr-2" /> Start Campaign
                    </button>
                  ) : null}
                  <button className="w-full py-3 bg-red-500/20 hover:bg-red-500/30 text-red-500 font-medium rounded-lg flex items-center justify-center">
                    <FaTrash className="mr-2" /> Delete Campaign
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAMPAIGN TABS */}
       
      </main>

    </div>
  );
}