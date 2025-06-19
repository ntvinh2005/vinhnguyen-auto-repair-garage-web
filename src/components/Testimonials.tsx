
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      vehicle: "2018 Honda Civic",
      rating: 5,
      text: "Vinh and his team saved me hundreds of dollars! They diagnosed my engine problem correctly on the first try, unlike the dealership who wanted to replace everything. Honest, skilled, and affordable.",
      service: "Engine Diagnostics"
    },
    {
      name: "Mike Rodriguez",
      vehicle: "2015 Ford F-150",
      rating: 5,
      text: "I've been bringing all my vehicles here for 5 years. Vinh always explains what needs to be done and why. No pressure, no upselling - just honest service. Highly recommend!",
      service: "Regular Maintenance"
    },
    {
      name: "Linda Chen",
      vehicle: "2020 Toyota Camry",
      rating: 5,
      text: "Fast, professional service with a smile. They got me back on the road the same day when my brakes failed. The peace of mind knowing my family is safe is priceless.",
      service: "Brake Repair"
    },
    {
      name: "David Thompson",
      vehicle: "2017 Nissan Altima",
      rating: 5,
      text: "Best auto shop in town! Fair prices, quality work, and they stand behind their repairs. Vinh's team treats you like family, not just another customer.",
      service: "Transmission Service"
    },
    {
      name: "Maria Garcia",
      vehicle: "2019 Subaru Outback",
      rating: 5,
      text: "I was nervous about finding a trustworthy mechanic after moving here. Vinh Nguyen Auto exceeded all my expectations. Professional, knowledgeable, and genuinely caring.",
      service: "AC Repair"
    },
    {
      name: "James Wilson",
      vehicle: "2016 Chevrolet Silverado",
      rating: 5,
      text: "They fixed my truck's electrical issues that three other shops couldn't solve. Vinh's expertise and attention to detail is unmatched. Will never go anywhere else!",
      service: "Electrical Repair"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the hundreds of satisfied customers who trust us with their vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-red-100 hover:border-yellow-400">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-red-700 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="border-t border-red-100 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-red-900">{testimonial.name}</h4>
                      <p className="text-sm text-red-600">{testimonial.vehicle}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-red-800 text-white text-xs px-2 py-1 rounded">
                        {testimonial.service}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-800 to-red-900 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Happy Customers</h3>
            <p className="text-lg mb-6">
              Experience the difference that honest, professional automotive service makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-sm">Average Rating</div>
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
