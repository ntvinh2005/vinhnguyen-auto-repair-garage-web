import {
  Wrench,
  Droplet,
  Car,
  ThermometerSnowflake,
  Settings,
  Shield,
  SprayCan,
  Sparkle,
} from "lucide-react";
import { ServiceCardWithImage, ServiceModal } from "./service-components";
import { useState } from "react";

const garageServices = [
  {
    image: "/assets/service/chinh-lop.jpg",
    icon: <Car className="w-8 h-8 text-yellow-500" />,
    title: "Lốp & Đảo lốp",
    description:
      "Dịch vụ lốp chuyên nghiệp: vá, thay, ra vào và đảo lốp cho mọi dòng xe.",
    features: [
      {
        label: "Vá lốp không săm",
        tooltip:
          "Vá lốp bằng kỹ thuật hiện đại, không làm hỏng lốp, đảm bảo an toàn tuyệt đối.",
      },
      {
        label: "Đảo lốp, cân bằng động",
        tooltip:
          "Di chuyển vị trí lốp, cân bằng bánh xe để giảm mòn không đều và tăng tuổi thọ lốp.",
      },
      {
        label: "Sửa van, sửa mâm lốp",
        tooltip:
          "Khắc phục sự cố van hơi, làm mới, sửa chữa hoặc thay thế mâm lốp.",
      },
      {
        label: "Bơm Nitơ, kiểm tra áp suất",
        tooltip:
          "Bơm khí Nitơ giúp duy trì áp suất ổn định, lốp ít bị oxi hóa hơn không khí thường.",
      },
    ],
  },
  {
    image: "/assets/service/dau.jpg",
    icon: <Droplet className="w-8 h-8 text-yellow-500" />,
    title: "Thay dầu & bảo dưỡng động cơ",
    description:
      "Thay dầu, lọc dầu, bảo dưỡng định kỳ cho động cơ vận hành bền bỉ.",
    features: [
      {
        label: "Thay dầu động cơ",
        tooltip:
          "Sử dụng dầu nhớt chính hãng phù hợp từng dòng xe, giúp động cơ hoạt động êm ái.",
      },
      {
        label: "Thay lọc dầu/lọc gió",
        tooltip:
          "Đảm bảo lọc sạch tạp chất, kéo dài tuổi thọ động cơ và tiết kiệm nhiên liệu.",
      },
      {
        label: "Súc rửa động cơ",
        tooltip:
          "Làm sạch cặn bẩn bên trong động cơ, bảo vệ động cơ khỏi mài mòn và nóng máy.",
      },
      {
        label: "Kiểm tra nước làm mát",
        tooltip:
          "Đảm bảo hệ thống làm mát luôn đủ nước và đúng loại để tránh quá nhiệt động cơ.",
      },
    ],
  },
  {
    image: "/assets/hero/sua-chua-xe-hero.jpg",
    icon: <Settings className="w-8 h-8 text-yellow-500" />,
    title: "Gầm – hệ thống treo",
    description: "Kiểm tra, sửa chữa hệ thống gầm, giảm xóc và treo xe.",
    features: [
      {
        label: "Kiểm tra bảo dưỡng gầm",
        tooltip:
          "Phát hiện kịp thời các hư hỏng, ăn mòn gầm xe, đảm bảo an toàn khi vận hành.",
      },
      {
        label: "Thay giảm xóc",
        tooltip:
          "Thay thế hoặc sửa chữa giảm xóc giúp xe vận hành êm ái, ổn định.",
      },
      {
        label: "Sửa chữa hệ thống lái",
        tooltip:
          "Khắc phục tiếng kêu, rung lắc, trả lại cảm giác lái chính xác, an toàn.",
      },
      {
        label: "Căn chỉnh thước lái",
        tooltip:
          "Điều chỉnh chính xác độ chụm bánh xe giúp xe đi thẳng và bền lốp.",
      },
    ],
  },
  {
    image: "/assets/service/dong-co.jpg",
    icon: <Sparkle className="w-8 h-8 text-yellow-500" />,
    title: "Chăm sóc & Bảo dưỡng Nội Thất",
    description:
      "Dịch vụ vệ sinh khoang nội thất, khoang động cơ... giúp xe của bạn luôn sạch đẹp, bền lâu.",
    features: [
      {
        label: "Vệ sinh khoang động cơ",
        tooltip:
          "Tẩy dầu, làm sạch khoang động cơ bằng hóa chất chuyên dụng, giúp máy sạch, tăng tuổi thọ xe. Giá: 500,000đ | Thời gian: 1.5h",
      },
      {
        label: "Vệ sinh nội thất chuyên sâu",
        tooltip:
          "Tháo ghế, giặt thảm, vệ sinh trần xe, táp-lô, khử khuẩn diệt mùi cho nội thất. Giá: 1,880,000đ | Thời gian: 24h",
      },
      {
        label: "Nội soi vệ sinh giàn lạnh",
        tooltip:
          "Làm sạch dàn lạnh bằng nội soi, loại bỏ nấm mốc, tăng hiệu quả làm mát, bảo vệ sức khỏe. Giá: 1,500,000đ | Thời gian: 1h",
      },
      {
        label: "Phủ Ceramic 3 bước",
        tooltip:
          "Phủ Ceramic bảo vệ sơn, tăng bóng, chống trầy xước, bảo hành 6 tháng.",
      },
    ],
  },
  {
    image: "/assets/service/dien-dien-tu.png",
    icon: <Shield className="w-8 h-8 text-yellow-500" />,
    title: "Điện & điện tử",
    description: "Kiểm tra, sửa chữa hệ thống điện, cảm biến, máy phát, đề.",
    features: [
      {
        label: "Kiểm tra, sửa máy phát",
        tooltip:
          "Đảm bảo máy phát điện hoạt động ổn định, cung cấp đủ điện cho xe.",
      },
      {
        label: "Sửa đề, cảm biến",
        tooltip:
          "Khắc phục sự cố đề không nổ, lỗi cảm biến để xe vận hành trơn tru.",
      },
      {
        label: "Khắc phục lỗi điện xe",
        tooltip:
          "Xử lý nhanh các lỗi đèn, điện, hệ thống chiếu sáng và tín hiệu xe.",
      },
      {
        label: "Lắp đặt phụ kiện điện tử",
        tooltip:
          "Lắp thêm các thiết bị điện tử như camera, cảm biến, GPS chuyên nghiệp.",
      },
    ],
  },
  {
    image: "/assets/service/phun-son.png",
    icon: <SprayCan className="w-8 h-8 text-yellow-500" />,
    title: "Sơn & thân vỏ",
    description:
      "Sơn sửa, làm đồng, phục hồi thân vỏ, chống rỉ sét, trầy xước.",
    features: [
      {
        label: "Sơn dặm, làm đồng",
        tooltip:
          "Sơn dặm nhanh, phục hồi các vết xước, móp, giữ xe luôn như mới.",
      },
      {
        label: "Đánh bóng thân xe",
        tooltip:
          "Đánh bóng chuyên nghiệp, làm sáng bóng bề mặt sơn, bảo vệ sơn xe.",
      },
      {
        label: "Chống rỉ, chống ồn",
        tooltip:
          "Phun phủ chống rỉ sét, giảm tiếng ồn giúp xe bền đẹp, vận hành êm.",
      },
      {
        label: "Phục hồi xe tai nạn",
        tooltip:
          "Khôi phục lại hình dáng, chức năng xe sau tai nạn, đảm bảo an toàn.",
      },
    ],
  },
];

export default function Services() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Các dịch vụ của chúng tôi
          </h2>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Sửa chữa & bảo dưỡng ô tô chuyên nghiệp – trang thiết bị hiện đại,
            kỹ thuật viên giàu kinh nghiệm
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {garageServices.map((service, idx) => (
            <ServiceCardWithImage
              key={idx}
              {...service}
              onClick={() => setSelected(idx)}
            />
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="bg-red-800 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Bạn cần dịch vụ khác?</h3>
            <p className="text-lg mb-6">
              Chúng tôi còn nhiều dịch vụ chuyên sâu khác, từ bảo dưỡng tổng
              thể, kiểm tra định kỳ đến nâng cấp phụ kiện. Hãy liên hệ với chúng
              tôi để được tư vấn giải pháp tối ưu nhất cho xe của bạn!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Sparkle className="w-4 h-4 text-yellow-400" /> Rửa xe
              </div>
              <div className="flex items-center gap-2">
                <Sparkle className="w-4 h-4 text-yellow-400" /> Chăm sóc nội
                thất
              </div>
              <div className="flex items-center gap-2">
                <Sparkle className="w-4 h-4 text-yellow-400" /> Độ đèn, camera
              </div>
              <div className="flex items-center gap-2">
                <Sparkle className="w-4 h-4 text-yellow-400" /> Dán film cách
                nhiệt
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceModal
        open={selected !== null}
        service={selected !== null ? garageServices[selected] : undefined}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
