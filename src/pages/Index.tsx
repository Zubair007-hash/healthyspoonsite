
import { Utensils, Calendar, School, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Utensils className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">Healthy Spoon</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-600 hover:text-green-600 transition-colors">Home</a>
              <a href="#menu" className="text-gray-600 hover:text-green-600 transition-colors">Menu</a>
              <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
            </div>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a href="tel:+8801315022084">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Menu Section */}
      <MenuSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Utensils className="h-6 w-6 text-green-400" />
                <h3 className="text-xl font-bold">Healthy Spoon</h3>
              </div>
              <p className="text-gray-300">
                Crafted with Love, Served with Care. Quality food service for schools 
                and events in Bogura, Bangladesh. Fresh, delicious, and affordable meals for every occasion.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#menu" className="hover:text-green-400 transition-colors">Our Menu</a></li>
                <li><a href="#services" className="hover:text-green-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-green-400" />
                  <a 
                    href="https://maps.google.com/?q=Vai+Pagla+Mazar+Lane,+Bogura+City,+Bangladesh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition-colors"
                  >
                    Vai Pagla Mazar Lane, Bogura City
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-400" />
                  <a 
                    href="tel:+8801315022084" 
                    className="hover:text-green-400 transition-colors"
                  >
                    01315022084
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-green-400" />
                  <a 
                    href="mailto:tasmim3550@gmail.com" 
                    className="hover:text-green-400 transition-colors"
                  >
                    tasmim3550@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Healthy Spoon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
