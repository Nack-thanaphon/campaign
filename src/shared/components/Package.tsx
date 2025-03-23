import { ReactNode } from "react";
import { CheckCircle, Package, Layers, Star } from "lucide-react";

interface PackageCardProps {
    title: string;
    size: string;
    type: string;
    features: string[]; // รายการคุณสมบัติของแพ็กเกจ
    icon: ReactNode; // รับไอคอนคอมโพเนนต์
    price: string; // ราคาของแพ็กเกจ
    className?: string; // การจัดแต่งเพิ่มเติม
}

export const PackageCard = ({ title, features, icon, price, size, type }: PackageCardProps) => {
    return (
        <div
            className={`lg:w-[460px] lg:p-6  space-y-4 `}
        >
            <h3 className="font-bold text-white mb-2 text-3xl">รายละเอียดสินค้า</h3>
            <ul className=" text-white mb-4 space-y-4 text-2xl">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 text-nowrap" />
                        {feature}
                    </li>
                ))}
            </ul>
            <div className="mt-10">
                <div className="flex gap-5">
                    <div className="text-start">
                        <div className="text-sm font-semibold text-white mb-2 text-start">ประเภท</div>
                        <div className="text-2xl font-semibold text-white mb-4 text-start"> {type}</div>
                    </div>
                    <div className="text-start">
                        <div className="text-sm font-semibold text-white mb-2 text-start">ขนาด</div>
                        <div className="text-2xl font-semibold text-white mb-4 text-start"> {size}</div>
                    </div>
                </div>
                <div className="text-start">
                    <div className="text-sm font-semibold text-white mb-2 text-start">ราคา</div>
                    <div className="text-4xl font-semibold text-white mb-4 text-start"> {price}</div>
                </div>
            </div>

        </div>
    );
};

// export default function PackageComponent() {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
//             <PackageCard
//                 title="แผนพื้นฐาน"
//                 features={["1 แท็ก NFC", "ลิงก์โปรไฟล์ที่กำหนดเอง", "จัดส่งฟรี"]}
//                 icon={<Package className="w-8 h-8 text-blue-600" />}
//                 price="599 บาท"
//             />
//             <PackageCard
//                 title="แผนมาตรฐาน"
//                 features={["3 แท็ก NFC", "การเพิ่มประสิทธิภาพ SEO", "การสนับสนุน Google Ads", "รายงานการวิเคราะห์รายเดือน"]}
//                 icon={<Layers className="w-8 h-8 text-purple-600" />}
//                 price="฿1,499 บาท"
//             />
//             <PackageCard
//                 title="แผนพรีเมียม"
//                 features={["แท็ก NFC 6", "การสนับสนุน SEO เต็มรูปแบบ", "การจัดการ Google Ads", "การวิเคราะห์และการพยากรณ์ขั้นสูง", "การสนับสนุนลำดับความสำคัญ"]}
//                 icon={<Star className="w-8 h-8 text-yellow-500" />}
//                 price="฿2,999 บาท"
//             />
//         </div>
//     );
// }