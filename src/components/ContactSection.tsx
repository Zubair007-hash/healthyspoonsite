
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your food service journey with us? Contact us today for 
            customized quotes and menu planning for your school or event.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input placeholder="+880 1315 022 084" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Service Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-md bg-white">
                  <option>Select service type</option>
                  <option>In-School Canteen Service</option>
                  <option>Event Catering</option>
                  <option>Both Services</option>
                  <option>Custom Requirements</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  placeholder="Tell us about your requirements, event details, or any questions..."
                  rows={4}
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">Our Location</h4>
                    <p className="text-gray-600">
                      <a 
                        href="https://maps.google.com/?q=Vai+Pagla+Mazar+Lane,+Bogura+City,+Bangladesh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-green-600 transition-colors"
                      >
                        Vai Pagla Mazar Lane<br />
                        Bogura City, Bangladesh
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">Phone & WhatsApp</h4>
                    <p className="text-gray-600">
                      <a 
                        href="tel:+8801315022084" 
                        className="hover:text-green-600 transition-colors"
                      >
                        01315022084
                      </a><br />
                      <a 
                        href="https://wa.me/8801315022084" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-green-600 transition-colors text-sm"
                      >
                        Available for calls and WhatsApp
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">Email</h4>
                    <p className="text-gray-600">
                      <a 
                        href="mailto:tasmim3550@gmail.com" 
                        className="hover:text-green-600 transition-colors"
                      >
                        tasmim3550@gmail.com
                      </a><br />
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">Business Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                      <p>Saturday: 7:00 AM - 8:00 PM</p>
                      <p>Sunday: 8:00 AM - 6:00 PM</p>
                      <p className="text-sm text-green-600 mt-2">
                        * Event catering available 24/7 with advance booking
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Embed */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg text-gray-800 mb-4">Find Us on Map</h4>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d325.59368178695166!2d89.37966717060536!3d24.832302285934613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1749564921291!5m2!1sen!2sbd" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                <a href="tel:+8801315022084">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now for Immediate Service
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 text-lg py-6">
                <a href="mailto:tasmim3550@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get a Free Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
