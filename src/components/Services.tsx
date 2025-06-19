
import { Wrench, Car, Settings, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Engine Repair & Maintenance",
      description: "Complete engine diagnostics, repairs, and regular maintenance to keep your vehicle running smoothly.",
      features: ["Engine diagnostics", "Oil changes", "Tune-ups", "Belt replacements"]
    },
    {
      icon: Car,
      title: "Brake Service",
      description: "Professional brake inspection, repair, and replacement services for your safety on the road.",
      features: ["Brake pad replacement", "Rotor resurfacing", "Brake fluid service", "Safety inspections"]
    },
    {
      icon: Settings,
      title: "Transmission Service",
      description: "Expert transmission repair and maintenance for both manual and automatic transmissions.",
      features: ["Transmission fluid change", "Clutch repair", "Transmission rebuild", "Diagnostic testing"]
    },
    {
      icon: Shield,
      title: "Electrical Systems",
      description: "Complete electrical system diagnostics and repair including batteries, alternators, and starters.",
      features: ["Battery testing", "Alternator repair", "Starter replacement", "Wiring diagnostics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Our Expert Services
          </h2>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Professional automotive repair and maintenance services with over 15 years of experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-red-100 hover:border-red-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-red-900 mb-4">{service.title}</h3>
                  <p className="text-red-700 mb-6">{service.description}</p>
                  <ul className="space-y-2 text-sm text-red-600">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-red-800 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Something Else?</h3>
            <p className="text-lg mb-6">
              We provide comprehensive automotive services beyond what's listed. Contact us for specialized repairs and maintenance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>AC Repair</div>
              <div>Tire Service</div>
              <div>Suspension</div>
              <div>Exhaust Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
