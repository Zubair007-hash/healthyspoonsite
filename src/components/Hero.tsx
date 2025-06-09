
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-green-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">Trusted by Schools & Events</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Quality Food Service for 
              <span className="text-green-600"> Schools & Events</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From traditional Bengali snacks to full meals, we provide fresh, delicious, and 
              affordable food solutions for in-school canteens and special events in Bogura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                View Our Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Book Event Catering
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="/lovable-uploads/e7ea64dd-8590-49ab-a86e-d6e9d54549be.png" 
                alt="Our Menu Card" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              50+ Items Available!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
