
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-red-900 to-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Ready to get your vehicle serviced? Contact us today for a free estimate or to schedule an appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-red-800" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Phone</h4>
                      <p className="text-red-100">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-red-800" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-red-100">info@vinhnguyenauto.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-red-800" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Address</h4>
                      <p className="text-red-100">123 Auto Repair Lane<br />Your City, State 12345</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                <div className="space-y-3 text-red-100">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-400/20 rounded-lg">
                  <p className="text-white text-sm">
                    <strong>Emergency Service Available</strong><br />
                    Call us for after-hours emergency roadside assistance
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <Card className="bg-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-900 mb-6">Schedule Your Service</h3>
                <p className="text-red-700 mb-6">
                  Get your vehicle serviced by experienced professionals. We offer free estimates 
                  and same-day service for most repairs.
                </p>
                
                <div className="space-y-4">
                  <Button className="w-full bg-red-800 hover:bg-red-900 text-white py-4 text-lg font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (555) 123-4567
                  </Button>
                  
                  <Button variant="outline" className="w-full border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white py-4 text-lg font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Online
                  </Button>
                  
                  <Button variant="outline" className="w-full border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white py-4 text-lg font-semibold">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-400 border-0 shadow-2xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Free Estimate</h3>
                <p className="text-red-800 mb-6">
                  Not sure what's wrong with your vehicle? Bring it in for a FREE diagnostic check!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-800 rounded-full mr-3"></div>
                    <span className="text-red-800">No obligation diagnosis</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-800 rounded-full mr-3"></div>
                    <span className="text-red-800">Written estimate provided</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-800 rounded-full mr-3"></div>
                    <span className="text-red-800">No hidden fees</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">24/7 Emergency Roadside Assistance</h3>
            <p className="text-red-100 mb-6">
              Stranded on the road? We provide emergency towing and roadside assistance 24 hours a day.
            </p>
            <Button size="lg" className="bg-yellow-400 text-red-800 hover:bg-yellow-500 font-bold px-8 py-4">
              Emergency Hotline: (555) 911-AUTO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
