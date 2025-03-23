"use client";

import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import Image from "next/image";
import Link from "next/link";
import { FaFlag, FaUsers, FaChartLine, FaMedal, FaCalendarAlt, FaHandshake, FaGift, FaBullhorn, FaRocket, FaStar } from "react-icons/fa";

export default function CampaignLandingPage() {
  const featuredCampaigns = [
    {
      id: 1,
      title: "Summer Promotion 2025",
      slug: "Summer-Promotion-2025",
      image: "/image/001.webp",
      type: "Seasonal",
      participants: 1250,
      progress: 75,
      daysLeft: 14
    },
    {
      id: 2,
      title: "Loyalty Rewards Program",
      slug: "Loyalty-Rewards-Program",
      image: "/image/001.webp",
      type: "Ongoing",
      participants: 3420,
      progress: 90,
      daysLeft: 30
    },
    {
      id: 3,
      title: "New Product Launch",
      slug: "New-Product-Launch",
      image: "/image/001.webp",
      type: "Special Event",
      participants: 850,
      progress: 45,
      daysLeft: 21
    }
  ];

  return (
    <>
      <main className="bg-gradient-to-b from-black to-blue-950 text-white min-h-screen">
        {/* HERO SECTION */}
        {/* <section className="relative flex items-center min-h-[90vh] px-6">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/image/001.webppg"
              alt="Campaign background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto">
            <div className="lg:flex justify-between items-center gap-12">
              <div className="text-start mb-12 lg:mb-0 lg:w-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-6">
                  สร้างแคมเปญใหม่
                </span>
                <h1 className="text-5xl md:text-6xl font-extrabold space-y-4 mb-8">
                  <span className="text-blue-400 block">เปลี่ยนการตลาดของคุณ</span>
                  <span className="block">ด้วยแคมเปญที่</span>
                  <span className="text-blue-300 block">ทรงพลังและน่าจดจำ</span>
                </h1>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl">
                  สร้าง ติดตาม และวัดผลแคมเปญการตลาดที่มีประสิทธิภาพสูงสุด ด้วยเครื่องมือที่ใช้งานง่ายและมีประสิทธิภาพของเรา
                </p>
                <div className="flex gap-6 flex-wrap">
                  <Link href="/campaigns/new" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition">
                    สร้างแคมเปญใหม่
                  </Link>
                  <Link href="/campaigns" className="px-8 py-4 border-2 border-blue-400 hover:bg-blue-400/10 font-semibold rounded-full transition">
                    ดูแคมเปญทั้งหมด
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30">
                <Image
                  src="/image/Showcase1.gif"
                  alt="Campaign showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* CAMPAIGN TYPES SECTION */}
        {/* <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">แคมเปญหลากหลายประเภทที่ตอบโจทย์ธุรกิจคุณ</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                เลือกจากหลากหลายรูปแบบแคมเปญที่เหมาะกับเป้าหมายทางธุรกิจของคุณ ปรับแต่งได้ตามต้องการ
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaGift />,
                  title: "แคมเปญส่วนลดและของรางวัล",
                  desc: "สร้างโค้ดส่วนลด คูปอง หรือของรางวัลพิเศษเพื่อดึงดูดลูกค้าใหม่และรักษาลูกค้าเก่า"
                },
                {
                  icon: <FaUsers />,
                  title: "แคมเปญสร้างการมีส่วนร่วม",
                  desc: "กระตุ้นให้ลูกค้ามีส่วนร่วมกับแบรนด์ของคุณผ่านกิจกรรมโซเชียลมีเดีย การแข่งขัน หรือกิจกรรมพิเศษ"
                },
                {
                  icon: <FaRocket />,
                  title: "แคมเปญเปิดตัวสินค้าใหม่",
                  desc: "วางแผนและดำเนินการเปิดตัวผลิตภัณฑ์หรือบริการใหม่ให้น่าตื่นเต้นและดึงดูดความสนใจ"
                },
                {
                  icon: <FaHandshake />,
                  title: "แคมเปญสร้างความภักดี",
                  desc: "สร้างโปรแกรมรางวัลและกิจกรรมที่ช่วยรักษาลูกค้าปัจจุบันและส่งเสริมการซื้อซ้ำ"
                },
                {
                  icon: <FaCalendarAlt />,
                  title: "แคมเปญตามเทศกาล",
                  desc: "ใช้ประโยชน์จากเทศกาลและวันสำคัญต่างๆ เพื่อสร้างแคมเปญที่มีความเกี่ยวข้องและน่าสนใจ"
                },
                {
                  icon: <FaBullhorn />,
                  title: "แคมเปญสร้างการรับรู้แบรนด์",
                  desc: "เพิ่มการรับรู้และความตระหนักถึงแบรนด์ของคุณด้วยกลยุทธ์การตลาดที่ครอบคลุม"
                }
              ].map((type, index) => (
                <div key={index} className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  <div className="p-8">
                    <div className="text-4xl text-blue-400 mb-6">{type.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                    <p className="text-gray-300">{type.desc}</p>
                  </div>
                  <div className="px-8 pb-6">
                    <Link href={`/campaign-types/${index + 1}`} className="text-blue-400 font-medium hover:text-blue-300 flex items-center">
                      เรียนรู้เพิ่มเติม
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* FEATURED CAMPAIGNS */}
        <section className="py-20 px-6 bg-gradient-to-b from-blue-950 to-black">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">แคมเปญยอดนิยม</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ชมแคมเปญที่ประสบความสำเร็จและได้รับความนิยมสูงสุดจากลูกค้าของเรา
              </p>
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
                        <FaUsers className="mr-2" /> {campaign.participants.toLocaleString()} ผู้เข้าร่วม
                      </span>
                      <span className="text-gray-300 flex items-center">
                        <FaCalendarAlt className="mr-2" /> {campaign.daysLeft} วันที่เหลือ
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${campaign.progress}%` }}></div>
                      </div>
                      <div className="flex justify-between mt-2 text-sm text-gray-400">
                        <span>ความคืบหน้า</span>
                        <span>{campaign.progress}%</span>
                      </div>
                    </div>
                    <Link href={`/campaigns/${campaign.slug}.html`} className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition">
                      ดูรายละเอียด
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/campaigns" className="inline-block px-8 py-4 border-2 border-blue-400 hover:bg-blue-400/10 font-semibold rounded-full transition">
                ดูแคมเปญทั้งหมด
              </Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "250+", label: "แคมเปญที่ประสบความสำเร็จ" },
                { number: "50,000+", label: "ผู้เข้าร่วมแคมเปญ" },
                { number: "98%", label: "ความพึงพอใจของลูกค้า" },
                { number: "45%", label: "เพิ่มยอดขายโดยเฉลี่ย" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-8 bg-blue-900/20 border border-blue-500/20 rounded-2xl backdrop-blur-sm">
                  <div className="text-5xl font-bold text-blue-400 mb-4">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">เสียงจากลูกค้าของเรา</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ฟังเสียงจากธุรกิจที่ประสบความสำเร็จด้วยแคมเปญการตลาดของเรา
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "คุณสมชาย วงศ์สุวรรณ",
                  position: "เจ้าของร้าน Cafe de Bangkok",
                  quote: "แคมเปญการตลาดนี้ช่วยให้ร้านกาแฟของเราเพิ่มยอดขายได้ถึง 40% ในเดือนแรก ลูกค้าชื่นชอบการแสกนรับส่วนลดและสะสมแต้มผ่าน NFC"
                },
                {
                  name: "คุณนภา จันทร์เพ็ญ",
                  position: "ผู้จัดการฝ่ายการตลาด บริษัท Beauty Perfect",
                  quote: "ระบบจัดการแคมเปญใช้งานง่ายมาก เราสามารถติดตามผลได้แบบเรียลไทม์และปรับเปลี่ยนกลยุทธ์ได้ทันที ทำให้การเปิดตัวผลิตภัณฑ์ใหม่ของเราประสบความสำเร็จอย่างมาก"
                },
                {
                  name: "คุณวิชัย ธนบดี",
                  position: "เจ้าของโรงแรม Sea Breeze Resort",
                  quote: "แคมเปญส่วนลดและโปรโมชันช่วงเทศกาลช่วยให้อัตราการจองห้องพักของเราเพิ่มขึ้นอย่างมีนัยสำคัญ ระบบการจัดการก็ใช้งานง่ายและมีประสิทธิภาพมาก"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-900/30 to-gray-900/80 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
                  <div className="mt-6 text-yellow-400 flex">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-blue-900/50 to-black">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">พร้อมที่จะเริ่มต้นแคมเปญของคุณ?</h2>
            <p className="text-xl text-gray-300 mb-10">
              เริ่มต้นวันนี้และดูธุรกิจของคุณเติบโตด้วยแคมเปญการตลาดที่มีประสิทธิภาพ
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/campaigns/new" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition">
                สร้างแคมเปญแรกของคุณ
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-blue-400 hover:bg-blue-400/10 font-semibold rounded-full transition">
                ปรึกษาผู้เชี่ยวชาญ
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}