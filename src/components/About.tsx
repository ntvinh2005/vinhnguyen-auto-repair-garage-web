
import { Award, Users, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Owner Story */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-8">
              Meet Vinh Nguyen
            </h2>
            <div className="space-y-6 text-lg text-red-700">
              <p>
                "I've been passionate about automobiles since I was a teenager. What started as a hobby 
                working on my father's old pickup truck has grown into a thriving business serving our 
                local community for over 15 years."
              </p>
              <p>
                "At Vinh Nguyen Auto Repair, we treat every vehicle like it's our own. My team and I 
                believe in honest diagnostics, fair pricing, and quality workmanship that stands the test of time."
              </p>
              <p>
                "Whether you're dealing with a simple oil change or a complex engine rebuild, we're here 
                to get you back on the road safely and affordably."
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-red-900 mb-4">Our Promise to You</h3>
              <ul className="space-y-3 text-red-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  Honest, upfront pricing with no hidden fees
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  Quality parts and guaranteed workmanship
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  Friendly, professional service every time
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  Fast turnaround without compromising quality
                </li>
              </ul>
            </div>
          </div>

          {/* Stats and Credentials */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">Why Choose Us?</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-900">15+ Years</h4>
                    <p className="text-red-700">Of trusted automotive service</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-900">2,500+</h4>
                    <p className="text-red-700">Satisfied customers served</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-900">ASE Certified</h4>
                    <p className="text-red-700">Licensed automotive technicians</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-800 text-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Certifications & Memberships</h3>
              <ul className="space-y-3">
                <li>• ASE (Automotive Service Excellence) Certified</li>
                <li>• Better Business Bureau Member</li>
                <li>• State Licensed Auto Repair Facility</li>
                <li>• Environmental Compliance Certified</li>
                <li>• Continuous Training & Education</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
