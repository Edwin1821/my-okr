
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, MessageSquare, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';

const Contact = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuth = () => {
    setShowAuthModal(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@okrmate.com",
      response: "Within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      response: "Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with us instantly",
      contact: "Available in-app",
      response: "Mon-Fri, 9AM-6PM PST"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Mission Street, Suite 400\nSan Francisco, CA 94105",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "New York",
      address: "456 Broadway, 12th Floor\nNew York, NY 10013",
      phone: "+1 (555) 987-6543"
    },
    {
      city: "London",
      address: "789 King's Road\nLondon, SW3 4NX, UK",
      phone: "+44 20 7123 4567"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar 
        onLogin={() => setShowAuthModal(true)}
        onGetDemo={() => setShowAuthModal(true)}
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="outline" className="mb-6 bg-blue-50 border-blue-200 text-blue-600">
            <Users className="w-4 h-4 mr-1" />
            We're Here to Help
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Have questions about OKRMate? Need help with implementation? Our team is ready to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input placeholder="Your Company Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your needs..." 
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Methods</h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <method.icon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{method.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                            <p className="font-medium text-blue-600">{method.contact}</p>
                            <p className="text-xs text-gray-500 mt-1">{method.response}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                        <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us in person at one of our global locations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 whitespace-pre-line">
                      {office.address}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium">{office.phone}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">How quickly can we get started?</h3>
                <p className="text-gray-600 text-sm">Most teams are up and running within 24 hours. Our onboarding process is designed to be quick and seamless.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer training and support?</h3>
                <p className="text-gray-600 text-sm">Yes! We provide comprehensive training, documentation, and ongoing support to ensure your success.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can we migrate from other OKR tools?</h3>
                <p className="text-gray-600 text-sm">Absolutely. We offer migration assistance and tools to help you transition smoothly from other platforms.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Is there a minimum contract period?</h3>
                <p className="text-gray-600 text-sm">No long-term contracts required. You can cancel anytime, though we're confident you'll love the platform.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What integrations do you support?</h3>
                <p className="text-gray-600 text-sm">We integrate with popular tools like Slack, Microsoft Teams, Jira, Salesforce, and many more.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How secure is our data?</h3>
                <p className="text-gray-600 text-sm">We employ bank-level security with SOC 2 compliance, end-to-end encryption, and regular security audits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Goals?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait – start your OKR journey today with a free trial
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
            onClick={() => setShowAuthModal(true)}
          >
            Start Free Trial
          </Button>
        </div>
      </section>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuth={handleAuth}
      />
    </div>
  );
};

export default Contact;
