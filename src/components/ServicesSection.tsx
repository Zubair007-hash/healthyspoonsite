
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Calendar, Users, Clock, CheckCircle, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: School,
      title: "In-School Canteen Service",
      description: "Complete canteen management for educational institutions with daily fresh meals, snacks, and beverages.",
      features: [
        "Daily fresh preparation",
        "Student-friendly pricing",
        "Nutritious meal options",
        "Hygienic food handling",
        "Flexible menu planning"
      ],
      color: "text-blue-600"
    },
    {
      icon: Calendar,
      title: "Event Food Supply",
      description: "Professional catering services for weddings, corporate events, seminars, and special occasions.",
      features: [
        "Custom menu planning",
        "Large quantity preparation",
        "Timely delivery service",
        "Professional presentation",
        "Competitive bulk pricing"
      ],
      color: "text-green-600"
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: "Fresh ingredients sourced daily" },
    { icon: CheckCircle, text: "Affordable pricing with quality assurance" },
    { icon: CheckCircle, text: "Experienced team with local expertise" },
    { icon: CheckCircle, text: "Flexible service options" },
    { icon: CheckCircle, text: "Reliable delivery and timing" },
    { icon: CheckCircle, text: "Traditional Bengali flavors" }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional food service solutions tailored for schools and events in Bogura, 
            combining traditional flavors with modern food safety standards.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 hover:border-green-200">
              <CardHeader className="bg-gradient-to-br from-gray-50 to-gray-100">
                <CardTitle className="flex items-center space-x-3">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                  <span className="text-2xl text-gray-800">{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Bogura Food Supply?</h3>
            <p className="text-lg text-gray-600">
              Your trusted partner for quality food service in Bogura
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <benefit.icon className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pt-10 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Menu Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Fresh Daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5★</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
