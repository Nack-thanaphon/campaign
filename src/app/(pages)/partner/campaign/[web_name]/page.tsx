import React from 'react';
import Header from './components/Header';
import { FaMapPin, FaStar, FaPhone, FaClock, FaUtensils, FaInstagram, FaFacebook, FaLine, FaStore } from 'react-icons/fa';
import Link from 'next/link';
import CopyLinkButton from './components/CopyLinkButton';
import Footer from './components/Footer';
import { notFound, redirect } from 'next/navigation';
import { getProfileBySlug } from '@/shared/services/superbase.service';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type PageParams = {
  params: {
    web_name: string;
  };
};

export async function generateMetadata({ params }: PageParams) {
  const { web_name } = params;
  const { data: profileData, error } = await getProfileBySlug(web_name);

  if (error || !profileData) {
    return {
      title: 'Profile not found',
      description: 'The profile you are looking for does not exist.',
    };
  }

  return {
    title: `${profileData.profile_name}`,
    description: `${profileData.details}`,
    keywords: `campaign.com, 
    nfc-${profileData.profile_name},
    reviews-${profileData.profile_name},
    contact-${profileData.details}`,
    image: profileData.logo ?? '/image/logo.jpg',
  };
}




const Page = async ({ params }: PageParams) => {
  const { web_name } = params;
  const { data: profileData, error } = await getProfileBySlug(web_name);
  if (error || !profileData) {
    return notFound();
  }


  if (profileData.is_review_redirect && profileData.review_url) {
    redirect(profileData.review_url);
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
        {/* Top Action Buttons */}
        <div className="flex justify-between mx-auto gap-3 mb-4 max-w-4xl">
          <Link
            href={profileData.review_url ?? "#"}
            className="bg-white rounded-xl p-3 w-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Image src={"/Google-Review.png"} height={80} width={80} alt={"logo"} />
            {/* <span className="font-medium text-gray-700 ml-5">รีวิวร้านค้า</span> */}
          </Link>
          <CopyLinkButton />
        </div>
        {/* Main Profile Card */}
        <div className="rounded-2xl space-y-6  p-4 lg:p-8 max-w-4xl mx-auto relative bg-white shadow-md">
          {/* Profile Header */}
          {/* <div className="flex justify-center">
            <Image src={"/image/15575663.gif"} height={80} width={80} alt={"logo"} />
          </div> */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{profileData.profile_name}</h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="px-3 py-1 bg-blue-50 rounded-full text-sm">{profileData.business_type.name}</span>
            </div>
          </div>

          {/* Address Section */}
          <div className="rounded-xl mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">เกี่ยวกับ</h2>
            <p className="text-gray-600 leading-relaxed">{profileData.details}</p>
          </div>


          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <FaStore className="text-blue-500 text-xl mr-3" />
              <div>
                <h3 className="font-medium text-gray-700">ประเภทร้าน</h3>
                <p className="text-gray-600">{profileData.business_type.name}</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <FaPhone className="text-blue-500 text-xl mr-3" />
              <div>
                <h3 className="font-medium text-gray-700">เบอร์โทร</h3>
                <p className="text-gray-600">{profileData.phone}</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <FaClock className="text-blue-500 text-xl mr-3" />
              <div>
                <h3 className="font-medium text-gray-700">เวลาเปิด-ปิด</h3>
                <p className="text-gray-600">{profileData.time}</p>
              </div>
            </div>

          </div>


          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">ที่อยู่ร้าน</h2>
            <p className="text-gray-600 leading-relaxed">{profileData.address}</p>
          </div>

          {/* Reviews Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">รีวิวจากลูกค้า</h2>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.round(4.5) ? "text-yellow-500" : "text-gray-300"} />
                ))}
                <span className="ml-2 text-gray-600 font-medium">(4.5/5)</span>
              </div>
            </div>
          </div>
          {/* Navigation Button */}
          <Link
            href={profileData.facebook_url ?? "#"}
            className={cn("text-pink-500 bg-pink-600 transition-colors text-white rounded-xl p-4 py-5 flex justify-center items-center w-full transition-colors duration-300", {
              "hidden": !profileData.facebook_url
            })}
          >
            <FaInstagram className="text-xl mr-5" />
            <span className="font-medium">facebook</span>
          </Link>
          <Link
            href={profileData.instagram_url ?? "#"}
            className={cn("text-blue-500 bg-blue-600 transition-colors text-white rounded-xl p-4 py-5 flex justify-center items-center w-full transition-colors duration-300", {
              "hidden": !profileData.instagram_url
            })}
          >
            <FaFacebook className="text-xl mr-5" />
            <span className="font-medium">instragam</span>
          </Link>
          <Link
            href={profileData.line_url ?? "#"}
            className={cn("text-green-500 bg-green-600 transition-colors text-white rounded-xl p-4 py-5 flex justify-center items-center w-full transition-colors duration-300", {
              "hidden": !profileData.line_url
            })}          >
            <FaLine className="text-xl mr-5" />
            <span className="font-medium">Line</span>
          </Link>
          <Link
            href={profileData.map_url ?? "#"}
            className={cn("text-red-500 bg-red-600 transition-colors text-white rounded-xl p-4 py-5 flex justify-center items-center w-full transition-colors duration-300", {
              "hidden": !profileData.map_url
            })}
          >
            <FaMapPin className="text-xl mr-5" />
            <span className="font-medium">นำทางไปยังร้าน</span>
          </Link>
        </div>

        <Footer name={profileData.slug} />
      </div>
    </>
  );
};

export default Page;