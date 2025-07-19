import { Star, Quote } from "lucide-react";
import { DefaultAvatar } from "./testimony-components";

const reviews = [
  {
    stars: 5,
    quote:
      "Tôi là một trong những khách hàng đầu tiên của Vinh Nguyen Auto. Các bạn giải thích từng bước rất rõ ràng và tận tình cho tôi xem xe cần sửa gì. Cảm giác rất yên tâm, không bị làm giá hay ép buộc gì cả.",
    name: "Ngọc Mai",
    car: "Kia Morning 2020",
    tag: "Chăm sóc tổng quát",
  },
  {
    stars: 5,
    quote:
      "Nhân viên cực kỳ thân thiện, làm việc nhanh chóng! Tôi được nhận xe dù không đặt lịch trước. Bảng giá minh bạch, hợp lý – chắc chắn sẽ quay lại lần sau.",
    name: "Hữu Phước",
    car: "Mazda 3 2017",
    tag: "Bảo dưỡng nhanh",
  },
  {
    stars: 5,
    quote:
      "Mình là tài mới nên rất nhiều câu hỏi. Anh Quân và các bạn ở đây trả lời chu đáo, không làm mình thấy ngại. Dịch vụ tốt cho những ai lần đầu sở hữu ô tô.",
    name: "Trần Linh",
    car: "Honda City 2022",
    tag: "Tư vấn & Kiểm tra",
  },
  {
    stars: 5,
    quote:
      "Ban đầu hơi lo vì gara mới, nhưng Quân và nhân viên rất trung thực, nhiệt tình và cập nhật tiến độ liên tục cho tôi. Hoàn toàn hài lòng, sẽ giới thiệu bạn bè.",
    name: "Hải Nam",
    car: "Toyota Vios 2015",
    tag: "Sửa chữa động cơ",
  },
  {
    stars: 5,
    quote:
      "Gara sạch sẽ, hiện đại. Cảm nhận được sự tận tâm với từng khách. Giá tốt, dịch vụ chu đáo. Sẽ giới thiệu cho bạn bè và người thân.",
    name: "Thảo Vy",
    car: "Hyundai Accent 2019",
    tag: "Thay dầu & bảo dưỡng",
  },
  {
    stars: 5,
    quote:
      "Kiểm tra xe rất chi tiết, giải thích dễ hiểu. Giúp tôi sửa một lỗi nhỏ mà chỗ khác bỏ qua. Rất vui vì ủng hộ được một xưởng mới của địa phương.",
    name: "Lê Minh",
    car: "Ford Ranger 2016",
    tag: "Chẩn đoán & sửa chữa",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-red-900 text-center mb-4">
          Khách hàng nói gì về chúng tôi
        </h2>
        <p className="text-lg text-red-700 text-center mb-12">
          Đọc cảm nhận từ những khách hàng đầu tiên đã trải nghiệm dịch vụ tại
          gara mới khai trương!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl border border-yellow-100 p-8 flex flex-col justify-between hover:shadow-2xl transition relative overflow-visible"
            >
              {/* Large Quotation Icon */}
              <Quote className="absolute -top-7 left-6 w-16 h-16 text-yellow-100 opacity-60 z-0" />
              {/* Star rating */}
              <div className="flex mb-4 z-10 relative">
                {[...Array(review.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-400 mr-1"
                  />
                ))}
              </div>
              {/* Quote */}
              <div className="text-red-900 italic mb-6 flex-1 z-10 relative leading-relaxed text-lg">
                “{review.quote}”
              </div>
              {/* Footer info */}
              <div className="flex items-center justify-between pt-4 border-t border-yellow-100 mt-auto z-10 relative">
                <div className="flex items-center gap-3">
                  {/* Reviewer Avatar, fallback to icon if needed */}
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center border-2 border-yellow-200 overflow-hidden shadow">
                    <DefaultAvatar name={review.name} index={idx} />
                  </div>
                  <div>
                    <div className="font-semibold text-red-900">
                      {review.name}
                    </div>
                    <div className="text-sm text-yellow-700">{review.car}</div>
                  </div>
                </div>
                <span className="bg-red-800 text-white px-3 py-1 rounded-full text-xs font-medium ml-4 shadow">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
