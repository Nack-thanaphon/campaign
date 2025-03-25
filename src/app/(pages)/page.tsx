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
                  Create New Campaign
                </span>
                <h1 className="text-5xl md:text-6xl font-extrabold space-y-4 mb-8">
                  <span className="text-blue-400 block">Transform Your Marketing</span>
                  <span className="block">With Campaigns That Are</span>
                  <span className="text-blue-300 block">Powerful and Memorable</span>
                </h1>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl">
                  Create, track, and measure highly effective marketing campaigns with our easy-to-use and efficient tools.
                </p>
                <div className="flex gap-6 flex-wrap">
                  <Link href="/campaigns/new" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition">
                    Create New Campaign
                  </Link>
                  <Link href="/campaigns" className="px-8 py-4 border-2 border-blue-400 hover:bg-blue-400/10 font-semibold rounded-full transition">
                    View All Campaigns
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
              <h2 className="text-4xl font-bold mb-6">Various Campaign Types to Meet Your Business Needs</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from a variety of campaign formats suitable for your business goals. Fully customizable to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaGift />,
                  title: "Discount and Reward Campaigns",
                  desc: "Create discount codes, coupons, or special rewards to attract new customers and retain existing ones"
                },
                {
                  icon: <FaUsers />,
                  title: "Engagement Campaigns",
                  desc: "Encourage customers to engage with your brand through social media activities, competitions, or special events"
                },
                {
                  icon: <FaRocket />,
                  title: "New Product Launch Campaigns",
                  desc: "Plan and execute exciting and attention-grabbing launches for new products or services"
                },
                {
                  icon: <FaHandshake />,
                  title: "Loyalty Campaigns",
                  desc: "Create reward programs and activities that help retain current customers and encourage repeat purchases"
                },
                {
                  icon: <FaCalendarAlt />,
                  title: "Seasonal Campaigns",
                  desc: "Take advantage of festivals and important dates to create relevant and interesting campaigns"
                },
                {
                  icon: <FaBullhorn />,
                  title: "Brand Awareness Campaigns",
                  desc: "Increase awareness and recognition of your brand with comprehensive marketing strategies"
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
                      Learn More
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
              <h2 className="text-4xl font-bold mb-6">Popular Campaigns</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                View the most successful and popular campaigns from our customers
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
            <div className="text-center mt-12">
              <Link href="/campaigns" className="inline-block px-8 py-4 border-2 border-blue-400 hover:bg-blue-400/10 font-semibold rounded-full transition">
                View All Campaigns
              </Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "250+", label: "Successful Campaigns" },
                { number: "50,000+", label: "Campaign Participants" },
                { number: "98%", label: "Customer Satisfaction" },
                { number: "45%", label: "Average Sales Increase" },
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
              <h2 className="text-4xl font-bold mb-6">From Our Customers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear from businesses that have succeeded with our marketing campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Somchai Wongsuwan",
                  position: "Owner, Cafe de Bangkok",
                  quote: "This marketing campaign helped our coffee shop increase sales by 40% in the first month. Customers love scanning for discounts and collecting points through NFC."
                },
                {
                  name: "Napa Chanpen",
                  position: "Marketing Manager, Beauty Perfect Co.",
                  quote: "The campaign management system is very easy to use. We can track results in real-time and adjust strategies immediately, making our new product launch tremendously successful."
                },
                {
                  name: "Vichai Thanabodee",
                  position: "Owner, Sea Breeze Resort",
                  quote: "The seasonal discount campaigns and promotions significantly increased our room booking rates. The management system is easy to use and very efficient."
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
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Campaign?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Start today and watch your business grow with effective marketing campaigns
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/campaigns/new" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition">
                Create Your First Campaign
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-blue-400 hover:bg-blue-400/10 font-semibold rounded-full transition">
                Consult an Expert
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}