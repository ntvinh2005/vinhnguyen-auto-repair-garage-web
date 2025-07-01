import { Wrench, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-red-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="../../../public/logo.png" className="w-12 h-12" />
              <span className="text-white font-bold text-xl">
                Vinh Nguyen Auto
              </span>
            </div>
            <p className="text-red-200 mb-6 max-w-md">
              Your trusted automotive service provider for over 15 years.
              Professional repairs, honest pricing, and guaranteed satisfaction
              for all makes and models.
            </p>
            <div className="space-y-2 text-sm text-red-200">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (555) 123-4567
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@vinhnguyenauto.com
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                123 Auto Repair Lane, Your City, State 12345
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-red-200 text-sm">
              <li>Engine Repair</li>
              <li>Brake Service</li>
              <li>Transmission</li>
              <li>Electrical Systems</li>
              <li>AC Repair</li>
              <li>Oil Changes</li>
              <li>Tire Service</li>
              <li>Diagnostics</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Business Hours</h4>
            <div className="space-y-2 text-red-200 text-sm">
              <div>Mon-Fri: 7:00 AM - 6:00 PM</div>
              <div>Saturday: 8:00 AM - 4:00 PM</div>
              <div>Sunday: Closed</div>
            </div>
            <div className="mt-4 p-3 bg-yellow-400/20 rounded">
              <div className="text-yellow-400 text-sm font-semibold">
                Emergency Service Available
              </div>
              <div className="text-red-200 text-xs">
                24/7 Roadside Assistance
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-red-200 text-sm">
              © 2024 Vinh Nguyen Auto Repair. All rights reserved.
            </div>
            <div className="text-red-200 text-sm mt-4 md:mt-0">
              Licensed • Insured • ASE Certified
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
