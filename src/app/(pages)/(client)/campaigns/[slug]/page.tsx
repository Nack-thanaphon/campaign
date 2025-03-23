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
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function CampaignDetailPage({ params }:{
  params: { slug: string }
}) {
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [page, setPage] = useState(1);
  const participantsPerPage = 5;

  // Fetch campaign data
  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        // Simulate API call (replace with real endpoint)
        const response = await new Promise(resolve => 
          setTimeout(() => resolve({
            json: () => ({
              id: 1,
              title: "Summer Promotion 2025",
              description: "ฉลองฤดูร้อนกับส่วนลดสุดพิเศษสำหรับสินค้าใหม่ของเรา พร้อมโอกาสลุ้นรับรางวัลท่องเที่ยวสุดหรู",
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
              targetAudience: "อายุ 18-35 ปี, สนใจสินค้าไลฟ์สไตล์และการท่องเที่ยว",
              locations: ["กรุงเทพมหานคร", "เชียงใหม่", "ภูเก็ต", "พัทยา"],
              nfcTags: 25,
              actions: [
                { name: "รับส่วนลด 15%", completions: 387 },
                { name: "ลงทะเบียนรับของแถม", completions: 254 },
                { name: "แชร์บนโซเชียลมีเดีย", completions: 142 }
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
            })
          }), 500)
        );
        const data = await response.json();
        setCampaign(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaign();
  }, [params.slug]);

  // Helper functions
  const daysLeft = () => {
    if (!campaign) return 0;
    const end = new Date(campaign.endDate);
    const today = new Date();
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('th-TH', options);
  };

  // Chart data for daily stats
  const chartData = {
    labels: campaign?.dailyStats.map(stat => stat.date) || [],
    datasets: [{
      label: 'การสแกนรายวัน',
      data: campaign?.dailyStats.map(stat => stat.scans) || [],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
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
      <>
       
        <main className="bg-gradient-to-b from-black to-blue-950 text-white min-h-screen px-6 py-20">
          <div className="container mx-auto flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        </main>
       
      </>
    );
  }

  if (error) {
    return (
      <>
        
        <main className="bg-gradient-to-b from-black to-blue-950 text-white min-h-screen px-6 py-20">
          <div className="container mx-auto text-center">
            <p className="text-red-500">เกิดข้อผิดพลาด: {error.message}</p>
          </div>
        </main>
       
      </>
    );
  }

  return (
    <>
    
      <main className="bg-gradient-to-b from-black to-blue-950 text-white min-h-screen">
        {/* CAMPAIGN HEADER */}
        <section className="relative pt-20 pb-10 px-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center mb-6">
              <Link href="/campaigns" className="text-blue-400 hover:text-blue-300 flex items-center mb-4 lg:mb-0">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                กลับไปยังแคมเปญทั้งหมด
              </Link>
              <div className="ml-auto flex space-x-2">
                <button className="flex items-center px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-sm transition">
                  <FaShareAlt className="mr-2" /> แชร์
                </button>
                <button className="flex items-center px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-sm transition">
                  <FaRegCopy className="mr-2" /> คัดลอกลิงก์
                </button>
              </div>
            </div>

            <div className="lg:flex">
              <div className="lg:w-2/3 lg:pr-12">
                <div className="flex items-center mb-4">
                  <span className={`${
                    campaign.status === 'active' ? 'bg-green-500' : 
                    campaign.status === 'paused' ? 'bg-yellow-500' : 
                    campaign.status === 'ended' ? 'bg-red-500' : 'bg-gray-500'
                  } px-3 py-1 rounded-full text-xs font-medium mr-3`}>
                    {campaign.status === 'active' ? 'กำลังดำเนินการ' : 
                     campaign.status === 'paused' ? 'หยุดชั่วคราว' : 
                     campaign.status === 'ended' ? 'สิ้นสุดแล้ว' : 'ร่าง'}
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
                      <span className="text-sm text-gray-300">ระยะเวลา</span>
                    </div>
                    <p className="font-medium">{formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}</p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FaClock className="text-blue-400 mr-2" />
                      <span className="text-sm text-gray-300">วันที่เหลือ</span>
                    </div>
                    <p className="font-medium">{daysLeft()} วัน</p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FaUsers className="text-blue-400 mr-2" />
                      <span className="text-sm text-gray-300">ผู้เข้าร่วม</span>
                    </div>
                    <p className="font-medium">{campaign.participants.toLocaleString()} / {campaign.participantsGoal.toLocaleString()}</p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FaQrcode className="text-blue-400 mr-2" />
                      <span className="text-sm text-gray-300">การสแกน</span>
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
                    <span>ความคืบหน้า</span>
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
                    <FaEdit className="mr-2" /> แก้ไขแคมเปญ
                  </button>
                  {campaign.status === 'active' ? (
                    <button className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg flex items-center justify-center">
                      <FaPauseCircle className="mr-2" /> หยุดแคมเปญชั่วคราว
                    </button>
                  ) : campaign.status === 'paused' ? (
                    <button className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg flex items-center justify-center">
                      <FaPlayCircle className="mr-2" /> เริ่มแคมเปญ
                    </button>
                  ) : null}
                  <button className="w-full py-3 bg-red-500/20 hover:bg-red-500/30 text-red-500 font-medium rounded-lg flex items-center justify-center">
                    <FaTrash className="mr-2" /> ลบแคมเปญ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAMPAIGN TABS */}
        <section className="px-6 pb-20">
          <div className="container mx-auto">
            <div className="border-b border-gray-700 mb-8">
              <nav className="flex overflow-x-auto pb-1">
                {["overview", "statistics", "participants", "locations", "settings"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                      activeTab === tab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab === "overview" && "ภาพรวม"}
                    {tab === "statistics" && "สถิติ"}
                    {tab === "participants" && "ผู้เข้าร่วม"}
                    {tab === "locations" && "ตำแหน่งที่ตั้ง"}
                    {tab === "settings" && "การตั้งค่า"}
                  </button>
                ))}
              </nav>
            </div>

            {/* OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-6">ประสิทธิภาพการแคมเปญ</h2>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-400 mb-1">อัตราการมีส่วนร่วม</p>
                        <p className="text-3xl font-bold text-blue-400">{campaign.engagementRate}%</p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-1">อัตราการแปลง</p>
                        <p className="text-3xl font-bold text-blue-400">{(campaign.conversions / campaign.uniqueScans * 100).toFixed(1)}%</p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-1">ผู้ใช้ที่ไม่ซ้ำกัน</p>
                        <p className="text-3xl font-bold">{campaign.uniqueScans.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-1">การแปลง</p>
                        <p className="text-3xl font-bold">{campaign.conversions.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <h3 className="font-medium mb-4">การสแกนรายวัน</h3>
                      <div className="relative h-36">
                        <Line data={chartData} options={chartOptions} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-6">การดำเนินการของผู้ใช้</h2>
                    <div className="space-y-4">
                      {campaign.actions.map((action, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span>{action.name}</span>
                            <span className="text-gray-400">{action.completions} ครั้ง</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ width: `${(action.completions / campaign.uniqueScans * 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-6">รายละเอียดแคมเปญ</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <FaInfoCircle className="text-blue-400 mt-1 mr-3" />
                        <div>
                          <p className="text-gray-400 text-sm">กลุ่มเป้าหมาย</p>
                          <p>{campaign.targetAudience}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" />
                        <div>
                          <p className="text-gray-400 text-sm">พื้นที่ที่ครอบคลุม</p>
                          <p>{campaign.locations.join(", ")}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaQrcode className="text-blue-400 mt-1 mr-3" />
                        <div>
                          <p className="text-gray-400 text-sm">จำนวนป้าย NFC</p>
                          <p>{campaign.nfcTags} ป้าย</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-6">ลิงก์ด่วน</h2>
                    <ul className="space-y-3">
                      <li><Link href="#" className="flex items-center text-blue-400 hover:text-blue-300"><FaLink className="mr-3" /> ลิงก์แลนดิ้งเพจ</Link></li>
                      <li><Link href="#" className="flex items-center text-blue-400 hover:text-blue-300"><FaUsers className="mr-3" /> รายชื่อผู้เข้าร่วม</Link></li>
                      <li><Link href="#" className="flex items-center text-blue-400 hover:text-blue-300"><FaQrcode className="mr-3" /> จัดการป้าย NFC</Link></li>
                      <li><Link href="#" className="flex items-center text-blue-400 hover:text-blue-300"><FaChartLine className="mr-3" /> รายงานฉบับเต็ม</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* STATISTICS TAB */}
            {activeTab === "statistics" && (
              <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-6">สถิติแคมเปญโดยละเอียด</h2>
                <p className="text-gray-300">ข้อมูลสถิติโดยละเอียดของแคมเปญจะแสดงที่นี่</p>
                <div className="mt-8 h-80">
                  <Line data={chartData} options={chartOptions} />
                </div>
              </div>
            )}

            {/* PARTICIPANTS TAB */}
            {activeTab === "participants" && (
              <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-6">ผู้เข้าร่วมแคมเปญ</h2>
                <p className="text-gray-300 mb-6">รายชื่อผู้เข้าร่วมแคมเปญทั้งหมด {campaign.participants.toLocaleString()} คน</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">ชื่อ</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">อีเมล</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">วันที่เข้าร่วม</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">การดำเนินการ</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">สถานะ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {Array.from({ length: Math.min(participantsPerPage, campaign.participants - (page - 1) * participantsPerPage) }).map((_, index) => {
                        const participantIndex = (page - 1) * participantsPerPage + index;
                        return (
                          <tr key={index} className="hover:bg-blue-900/10">
                            <td className="px-4 py-3 text-sm">ผู้เข้าร่วม {participantIndex + 1}</td>
                            <td className="px-4 py-3 text-sm">user{participantIndex + 1}@example.com</td>
                            <td className="px-4 py-3 text-sm">2025-04-0{Math.min(index + 1, 7)}</td>
                            <td className="px-4 py-3 text-sm">{Math.floor(Math.random() * 5) + 1}</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">ทำรายการแล้ว</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <p className="text-sm text-gray-400">
                    แสดง {(page - 1) * participantsPerPage + 1}-
                    {Math.min(page * participantsPerPage, campaign.participants)} จาก {campaign.participants} รายการ
                  </p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                      disabled={page === 1}
                      className="px-3 py-1 bg-blue-900/30 rounded disabled:opacity-50"
                    >
                      ก่อนหน้า
                    </button>
                    <button
                      onClick={() => setPage(prev => Math.min(prev + 1, Math.ceil(campaign.participants / participantsPerPage)))}
                      disabled={page === Math.ceil(campaign.participants / participantsPerPage)}
                      className="px-3 py-1 bg-blue-900/30 rounded disabled:opacity-50"
                    >
                      ถัดไป
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* LOCATIONS TAB */}
            {activeTab === "locations" && (
              <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-6">ตำแหน่งที่ตั้งของแคมเปญ</h2>
                <p className="text-gray-300 mb-6">ตำแหน่งที่ตั้งของป้าย NFC และการกระจายตัวของการสแกน</p>
                <div className="mb-8 h-80 bg-blue-900/20 rounded-xl border border-blue-500/10 flex items-center justify-center">
                  <p className="text-gray-400">แผนที่แสดงตำแหน่งที่ตั้ง</p>
                </div>
                <h3 className="font-medium mb-4">พื้นที่ที่มีการสแกนสูงสุด</h3>
                <div className="space-y-4">
                  {campaign.locations.map((location, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span>{location}</span>
                        <span className="text-gray-400">{Math.floor(Math.random() * 1000) + 500} ครั้ง</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${90 - (index * 15)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SETTINGS TAB */}
            {activeTab === "settings" && (
              <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-6">การตั้งค่าแคมเปญ</h2>
                <p className="text-gray-300 mb-6">ปรับแต่งการตั้งค่าแคมเปญตามความต้องการ</p>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">ชื่อแคมเปญ</label>
                    <input
                      type="text"
                      className="w-full bg-blue-900/30 border border-blue-500/30 rounded-lg p-3 text-white"
                      defaultValue={campaign.title}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">คำอธิบายแคมเปญ</label>
                    <textarea
                      className="w-full bg-blue-900/30 border border-blue-500/30 rounded-lg p-3 text-white h-32"
                      defaultValue={campaign.description}
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">วันที่เริ่มต้น</label>
                      <input
                        type="date"
                        className="w-full bg-blue-900/30 border border-blue-500/30 rounded-lg p-3 text-white"
                        defaultValue={campaign.startDate}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">วันที่สิ้นสุด</label>
                      <input
                        type="date"
                        className="w-full bg-blue-900/30 border border-blue-500/30 rounded-lg p-3 text-white"
                        defaultValue={campaign.endDate}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">ประเภทแคมเปญ</label>
                    <select className="w-full bg-blue-900/30 border border-blue-500/30 rounded-lg p-3 text-white">
                      <option>Seasonal</option>
                      <option>Ongoing</option>
                      <option>Special Event</option>
                      <option>Flash Sale</option>
                      <option>Product Launch</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
     
    </>
  );
}