import { Car, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen my-5 flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-red-800 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-4 border-yellow-600 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border-4 border-red-600 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-4 border-yellow-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-red-800 rounded-full mb-6 shadow-2xl">
            <Car className="w-16 h-16 text-yellow-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-red-900 mb-6 leading-tight">
          VINH NGUYEN
          <span className="block text-yellow-600">AUTO REPAIR</span>
        </h1>

        <p className="text-xl md:text-2xl text-red-700 mb-8 max-w-3xl mx-auto font-medium">
          Professional Automotive Service You Can Trust
          <span className="block mt-2 text-lg">
            Expert repairs, honest prices, guaranteed satisfaction
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
          >
            Get Free Estimate
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white px-8 py-4 text-lg font-semibold"
          >
            View Services
          </Button>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-lg backdrop-blur-sm">
            <Shield className="w-12 h-12 text-red-800 mb-4" />
            <h3 className="text-xl font-bold text-red-900 mb-2">
              Licensed & Insured
            </h3>
            <p className="text-red-700">
              Fully certified automotive technicians
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-lg backdrop-blur-sm">
            <Star className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold text-red-900 mb-2">
              5-Star Service
            </h3>
            <p className="text-red-700">Highly rated by satisfied customers</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-lg backdrop-blur-sm">
            <Car className="w-12 h-12 text-red-800 mb-4" />
            <h3 className="text-xl font-bold text-red-900 mb-2">
              All Makes & Models
            </h3>
            <p className="text-red-700">Expert service for every vehicle</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
