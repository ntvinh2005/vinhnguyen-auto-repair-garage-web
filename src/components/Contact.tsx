import { Phone, MapPin, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-[#8d2323] to-[#b72e2e]"
      id="contact"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-3">
          Liên hệ với chúng tôi
        </h2>
        <p className="text-lg text-yellow-100 text-center mb-10">
          Đặt lịch sửa chữa, tư vấn dịch vụ hoặc nhận báo giá miễn phí. Chúng
          tôi luôn sẵn sàng hỗ trợ bạn!
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Thông tin liên hệ */}
          <div className="bg-red-900 rounded-2xl shadow-lg p-8 flex flex-col gap-6 text-white">
            <h3 className="text-xl font-bold mb-2">Thông tin liên hệ</h3>
            <div className="flex items-center gap-3">
              <Phone className="w-7 h-7 text-yellow-400" />
              <div>
                <div className="font-semibold">Hotline:</div>
                <div>0911 980 131</div>
                <div>0916 638 219</div>
              </div>
            </div>
            <a
              className="flex items-center gap-3 hover:underline"
              href="https://www.facebook.com/profile.php?id=61577571418349"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-7 h-7 text-yellow-400" />
              <div>
                <div className="font-semibold">Facebook:</div>
                <div>facebook.com/otovinhnnguyen</div>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="w-7 h-7 text-yellow-400" />
              <div>
                <div className="font-semibold">Địa chỉ:</div>
                <div>
                  Gara ô tô Vân trì
                  <br />
                  335 đường 23B, Vân Trì, Đông Anh, Hà Nội
                </div>
              </div>
            </div>
          </div>

          {/* Đặt lịch dịch vụ */}
          <div className="bg-yellow-100/100 rounded-2xl shadow-lg p-8 flex flex-col gap-4">
            <h3 className="text-lg font-bold mb-2 text-red-900">
              Đặt lịch dịch vụ
            </h3>
            <div className="mb-3 text-red-800">
              Đội ngũ kỹ thuật viên luôn sẵn sàng phục vụ và tư vấn miễn phí cho
              bạn.
            </div>
            <a
              href="tel:0911980131"
              className="block w-full bg-yellow-500 hover:bg-yellow-400 text-red-900 text-lg font-semibold py-3 rounded-lg shadow flex items-center justify-center gap-3 transition"
            >
              <Phone className="w-6 h-6" />
              Gọi ngay: 0911 980 131
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577571418349"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg shadow flex items-center justify-center gap-3 transition"
            >
              <Facebook className="w-6 h-6" />
              Nhắn tin Facebook
            </a>
          </div>
        </div>

        {/* Giờ làm việc */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-red-900 rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-lg font-bold mb-2">Giờ làm việc</h3>
            <div className="flex justify-between border-b border-yellow-100 pb-1 mb-1">
              <span>Thứ 2 - Thứ 6</span>
              <span>7:00 - 18:00</span>
            </div>
            <div className="flex justify-between border-b border-yellow-100 pb-1 mb-1">
              <span>Thứ 7</span>
              <span>7:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span>Chủ nhật</span>
              <span>7:00 - 18:00</span>
            </div>
            <div className="mt-5 bg-yellow-200/80 text-yellow-900 rounded-lg px-4 py-2 font-semibold shadow-inner text-sm">
              Hỗ trợ sự cố khẩn cấp ngoài giờ, vui lòng gọi hotline!
            </div>
          </div>

          {/* Ưu đãi miễn phí kiểm tra */}
          <div className="bg-yellow-400 rounded-2xl shadow-lg p-8 text-red-900 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3">Kiểm tra miễn phí</h3>
            <p className="mb-3">
              Mang xe đến kiểm tra miễn phí tại gara! Tư vấn tận tình, không
              phát sinh chi phí nếu không sửa chữa.
            </p>
            <ul className="mb-1 pl-4 list-disc text-base">
              <li>Chẩn đoán lỗi miễn phí</li>
              <li>Báo giá rõ ràng, minh bạch</li>
              <li>Không phụ thu ẩn</li>
            </ul>
          </div>
        </div>

        {/* Hỗ trợ cứu hộ */}
        <div className="bg-red-900 rounded-2xl shadow-lg p-8 text-white text-center max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-3">
            Cứu hộ & hỗ trợ khẩn cấp 24/7
          </h3>
          <p>
            Cần cứu hộ hoặc gặp sự cố giữa đường? Liên hệ hotline bất cứ lúc nào
            để được hỗ trợ nhanh nhất!
          </p>
          <div className="mt-4">
            <span className="bg-yellow-500 text-red-900 font-semibold py-2 px-4 rounded-lg shadow inline-block text-lg">
              Hotline cứu hộ: 0911 980 131
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
