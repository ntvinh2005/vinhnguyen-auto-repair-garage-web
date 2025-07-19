import { BadgeCheck, DollarSign, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FuturisticCarousel } from "./hero-components";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen py-12 flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-red-800 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-4 border-yellow-600 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border-4 border-red-600 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-4 border-yellow-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center w-full">
        {/* Carousel */}
        <div className="w-full flex flex-col items-center justify-center mb-10">
          <FuturisticCarousel />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-red-900 mb-6 leading-tight">
          Trung tâm dịch vụ ô tô
          <span className="block text-yellow-600">Vinh Nguyên</span>
        </h1>
        <p className="text-xl md:text-2xl text-red-700 mb-8 max-w-3xl mx-auto font-medium">
          Dịch vụ sửa chữa ô tô chuyên nghiệp mà bạn có thể tin tưởng
          <span className="block mt-2 text-lg">
            Chất lượng hãng, giá bình dân
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
          >
            Liên hệ với chúng tôi
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white px-8 py-4 text-lg font-semibold"
          >
            Xem các dịch vụ
          </Button>
        </div>
        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Chất lượng như hãng */}
          <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-lg backdrop-blur-sm">
            <BadgeCheck className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold text-red-900 mb-2">
              Chất lượng như hãng
            </h3>
            <ul className="text-red-700 text-left list-disc list-inside space-y-1">
              <li>Thiết bị chẩn đoán hiện đại</li>
              <li>Kỹ thuật viên tay nghề cao</li>
              <li>Phụ tùng chính hãng, rõ nguồn gốc</li>
            </ul>
          </div>
          {/* Giá cả hợp lý – công khai */}
          <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-lg backdrop-blur-sm">
            <DollarSign className="w-12 h-12 text-red-800 mb-4" />
            <h3 className="text-xl font-bold text-red-900 mb-2">
              Giá cả hợp lý, công khai
            </h3>
            <ul className="text-red-700 text-left list-disc list-inside space-y-1">
              <li>Không “vẽ bệnh”, không báo sai giá</li>
              <li>Tối ưu chi phí, minh bạch từng hạng mục</li>
              <li>Tư vấn trung thực, sửa đúng bệnh</li>
            </ul>
          </div>
          {/* Dịch vụ chuyên nghiệp */}
          <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-lg backdrop-blur-sm">
            <Wrench className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold text-red-900 mb-2">
              Dịch vụ chuyên nghiệp
            </h3>
            <ul className="text-red-700 text-left list-disc list-inside space-y-1">
              <li>Bảo dưỡng, thay nhớt, vệ sinh khoang máy</li>
              <li>Sơn dặm, gò hàn, làm đồng, sơn</li>
              <li>Sửa chữa máy, gầm, điện, lạnh</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
