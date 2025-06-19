
import { Wrench, Car, Shield, Star, Phone, Mail, MapPin, Award, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      {/* Navigation */}
      <nav className="bg-red-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Wrench className="w-6 h-6 text-red-800" />
              </div>
              <span className="text-white font-bold text-xl">Vinh Nguyen Auto</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-yellow-400 transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-yellow-400 transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors">About</a>
              <a href="#testimonials" className="text-white hover:text-yellow-400 transition-colors">Reviews</a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
            </div>
            <Button className="bg-yellow-400 text-red-800 hover:bg-yellow-500 font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
