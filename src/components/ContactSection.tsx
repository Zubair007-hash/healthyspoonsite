
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
                  <Input placeholder="+880 XXX XXX XXX" />
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
                      Bogura, Rajshahi Division<br />
                      Bangladesh
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
                      +880 XXX XXX XXX<br />
                      Available for calls and WhatsApp
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
                      info@bogurafoodsupply.com<br />
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

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                <Phone className="mr-2 h-5 w-5" />
                Call Now for Immediate Service
              </Button>
              <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 text-lg py-6">
                <Mail className="mr-2 h-5 w-5" />
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
