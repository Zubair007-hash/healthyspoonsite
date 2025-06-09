
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-green-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
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
          <p className="text-xl text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
            <strong>Crafted with Love, Served with Care</strong>
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            From traditional Bengali snacks to full meals, we provide fresh, delicious, and 
            affordable food solutions for in-school canteens and special events in Bogura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              View Our Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Book Event Catering
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
