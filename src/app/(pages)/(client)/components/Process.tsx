import React from 'react'

const Process
  = () => {
    return (

      <section className="py-20 px-6 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">กระบวนการทำงานที่เรียบง่าย</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              เพียงไม่กี่ขั้นตอน คุณก็สามารถสร้างและเริ่มต้นแคมเปญที่มีประสิทธิภาพได้ทันที
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-500/30 hidden md:block"></div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: 1,
                  title: "ออกแบบและวางแผน",
                  desc: "เลือกประเภทแคมเปญ กำหนดเป้าหมาย และปรับแต่งรายละเอียดให้เหมาะกับธุรกิจของคุณ"
                },
                {
                  step: 2,
                  title: "เปิดตัวและส่งเสริม",
                  desc: "เริ่มต้นแคมเปญของคุณและโปรโมทผ่านช่องทางการตลาดต่างๆ ทั้งออนไลน์และออฟไลน์"
                },
                {
                  step: 3,
                  title: "ติดตามและปรับปรุง",
                  desc: "วิเคราะห์ผลการดำเนินงานแบบเรียลไทม์และปรับปรุงแคมเปญเพื่อผลลัพธ์ที่ดีที่สุด"
                }
              ].map((process, index) => (
                <div key={index} className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-8 relative z-10">
                  <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">{process.title}</h3>
                  <p className="text-gray-300 text-center">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

export default Process
