import { BadgeCheck, PiggyBank, HeartHandshake } from "lucide-react";

const commitments = [
  {
    icon: <BadgeCheck className="w-6 h-6 text-yellow-600" />,
    title: "Chất lượng chuẩn hãng",
    desc: "Thiết bị chẩn đoán hiện đại, linh kiện rõ nguồn gốc, kỹ thuật viên đào tạo bài bản – xe bạn được chăm sóc đúng cách, an toàn tuyệt đối.",
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-yellow-600" />,
    title: "Giá cả minh bạch – hợp lý",
    desc: "Mọi báo giá đều rõ ràng, tối ưu chi phí nhất có thể. Cam kết không phát sinh bất ngờ.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-yellow-600" />,
    title: "Dịch vụ tận tâm – tư vấn trung thực",
    desc: "Chỉ đề xuất những gì xe bạn thực sự cần. Không “vẽ bệnh”, không ép buộc. Luôn đặt sự an tâm của khách hàng lên trên hết.",
  },
];

export default function About() {
  return (
    <section className="bg-[#fff9f3] py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Photo - left side */}
        <div className="flex-shrink-0 flex justify-center items-center w-full md:w-[350px]">
          <img
            src="/assets/meet-leader/Quan.png"
            alt="Anh Quân - Chủ Xưởng"
            className="rounded-3xl shadow-xl border-4 border-white max-w-[330px] object-cover object-center"
            style={{ height: "420px" }}
          />
        </div>

        {/* Text Content - right side */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
            Anh Quân
          </h2>
          <div className="text-yellow-800 font-medium text-lg mb-6">
            Chủ xưởng Gara Vinh Nguyen
          </div>

          {/* Mission Statement */}
          <blockquote className="text-xl md:text-2xl text-red-800 font-semibold italic mb-4">
            SỨ MỆNH NGƯỜI LÃNH ĐẠO XƯỞNG GARA Ô TÔ – CHẤT LƯỢNG HÃNG, GIÁ BÌNH
            DÂN
          </blockquote>
          <p className="text-red-700 mb-7">
            Là người đứng đầu xưởng gara, tôi hiểu rằng mỗi chiếc xe khách hàng
            mang đến không chỉ là phương tiện đi lại – đó là tài sản, là niềm
            tin và sự an tâm trong từng hành trình. Sứ mệnh của tôi – và cũng là
            tôn chỉ của cả xưởng – là mang đến dịch vụ sửa chữa, bảo dưỡng chất
            lượng như chính hãng, nhưng với mức giá hợp lý, dễ tiếp cận cho mọi
            khách hàng.
          </p>

          <div className="space-y-5 mb-8">
            {commitments.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <div className="font-semibold text-red-900">{item.title}</div>
                  <div className="text-red-700 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-100/80 p-4 rounded-xl shadow border-l-4 border-yellow-400 max-w-xl">
            <div className="text-yellow-800 font-bold mb-1">
              Vì sao chúng tôi chọn con đường “Chất lượng hãng – Giá bình dân”?
            </div>
            <div className="text-red-700 text-sm">
              Bởi tôi tin rằng ai cũng xứng đáng được trải nghiệm dịch vụ an
              toàn, chuyên nghiệp, không nhất thiết phải trả mức giá “trên trời”
              tại các trung tâm chính hãng. Chúng tôi muốn khách hàng quay lại
              không chỉ vì xe gặp trục trặc, mà vì niềm tin và sự hài lòng.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
