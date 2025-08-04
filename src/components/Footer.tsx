import { Phone, MapPin, Facebook, Banknote } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-red-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                className="w-12 h-12"
                alt="Vinh Nguyen Auto logo"
              />
              <span className="text-white font-bold text-xl">
                Gara Ô tô Vinh Nguyên
              </span>
            </div>
            <div className="text-yellow-200 font-semibold mb-2 leading-snug">
              CÔNG TY TNHH ĐẦU TƯ PHÁT TRIỂN DỊCH VỤ Ô TÔ VINH NGUYÊN
            </div>
            <p className="text-red-200 mb-4 max-w-md">
              Gara uy tín tại Đông Anh, Hà Nội – sửa chữa, bảo dưỡng ô tô tất cả
              các dòng xe. Chất lượng như hãng, giá hợp lý, tư vấn tận tâm.
            </p>
            <div className="space-y-2 text-sm text-red-200 font-medium">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Hotline:{" "}
                <span className="ml-1 font-semibold text-yellow-400">
                  0911 980 131
                </span>{" "}
                /{" "}
                <span className="font-semibold text-yellow-400">
                  0916 683 219
                </span>
              </div>
              <a
                className="flex items-center hover:underline"
                href="https://www.facebook.com/share/19kUSyruH1/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-4 h-4 mr-2" />
                facebook.com/otovinhnguyen
              </a>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                QL23B, Số 335 Phố Vân Trì, Xã Phúc Thịnh, Thành Phố Hà Nội
                <a
                  href="https://g.co/kgs/EDsRjW9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 text-yellow-400 underline hover:text-yellow-500 text-sm"
                >
                  Xem bản đồ
                </a>
              </div>
              <div className="flex items-center">
                <Banknote className="w-4 h-4 mr-2" />
                <span className="font-semibold">Số tài khoản:</span>{" "}
                <span className="ml-1 font-bold text-yellow-300">
                  33333555888
                </span>
                <span className="ml-2">
                  Tại: Ngân hàng TP Bank, Chi nhánh Đông Anh
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Dịch vụ</h4>
            <ul className="space-y-2 text-red-200 text-sm">
              <li>Lốp & Đảo lốp</li>
              <li>Thay dầu & Bảo dưỡng</li>
              <li>Gầm - hệ thống treo</li>
              <li>Điện & Điều hòa</li>
              <li>Sơn & Thân vỏ</li>
              <li>Sửa chữa động cơ</li>
              <li>Tư vấn & kiểm tra tổng quát</li>
              <li>Dịch vụ bảo hiểm thân vỏ</li>
              <li>Bảo hiểm trách nhiệm dân sự</li>
              <li>Rửa xe & chăm sóc nội thất</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Giờ làm việc</h4>
            <div className="space-y-2 text-red-200 text-sm">
              <div>Thứ 2 - Thứ 6: 7:00 - 18:00</div>
              <div>Thứ 7: 7:00 - 18:00</div>
              <div>Chủ nhật: 7:00 - 18:00</div>
            </div>
            <div className="mt-4 p-3 bg-yellow-400/20 rounded">
              <div className="text-yellow-400 text-sm font-semibold">
                Hỗ trợ cứu hộ 24/7
              </div>
              <div className="text-red-200 text-xs">
                Gọi hotline để được tư vấn và hỗ trợ khẩn cấp
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-red-200 text-sm">
              © 2025 Gara Ô tô Vinh Nguyên. Đã đăng ký bản quyền.
            </div>
            <div className="text-red-200 text-sm mt-4 md:mt-0">
              An tâm pháp lý • Bảo hiểm trách nhiệm
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
