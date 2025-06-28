
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Users, TrendingUp, BookOpen, Award, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';

const Consulting = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuth = () => {
    setShowAuthModal(false);
  };

  const services = [
    {
      icon: Target,
      title: "OKR Implementation",
      description: "Complete OKR rollout strategy and implementation support",
      features: ["Strategy workshops", "Framework customization", "Launch planning", "Success metrics"]
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Comprehensive training programs for all organizational levels",
      features: ["Leadership workshops", "Manager training", "Employee sessions", "Ongoing support"]
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous improvement and optimization of your OKR process",
      features: ["Process analysis", "Best practice recommendations", "Performance reviews", "Quarterly planning"]
    }
  ];

  const packages = [
    {
      name: "OKR Foundation",
      duration: "4-6 weeks",
      description: "Perfect for organizations new to OKRs",
      includes: [
        "OKR methodology training",
        "Goal-setting workshops",
        "Initial OKR creation",
        "Basic tracking setup"
      ]
    },
    {
      name: "OKR Transformation",
      duration: "8-12 weeks",
      description: "Comprehensive transformation for established teams",
      includes: [
        "Everything in Foundation",
        "Advanced tracking systems",
        "Cultural change management",
        "Quarterly review processes",
        "Performance optimization"
      ]
    },
    {
      name: "OKR Excellence",
      duration: "6 months",
      description: "Complete partnership for OKR mastery",
      includes: [
        "Everything in Transformation",
        "Ongoing coaching",
        "Advanced analytics setup",
        "Custom integrations",
        "Executive mentoring"
      ]
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
          <Badge variant="outline" className="mb-6 bg-purple-50 border-purple-200 text-purple-600">
            <Award className="w-4 h-4 mr-1" />
            Certified OKR Experts
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            OKR Consulting Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your organization with expert guidance. Our certified OKR consultants help you 
            implement, optimize, and master the OKR methodology for sustainable success.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
            onClick={() => setShowAuthModal(true)}
          >
            Schedule Consultation
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert guidance tailored to your organization's unique needs and challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Packages */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Consulting Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the right level of support for your OKR journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {pkg.duration}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full border border-gray-300 hover:bg-gray-50"
                    variant="outline"
                    onClick={() => setShowAuthModal(true)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Consulting?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <BookOpen className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Proven Methodology</h3>
                  <p className="text-gray-600 text-sm">Based on industry best practices and successful implementations across 500+ organizations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Certified Experts</h3>
                  <p className="text-gray-600 text-sm">Our consultants are certified OKR practitioners with years of hands-on experience.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <Target className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Tailored Approach</h3>
                  <p className="text-gray-600 text-sm">Every engagement is customized to your organization's culture, size, and objectives.</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Measurable Results</h3>
                  <p className="text-gray-600 text-sm">Track progress and success with clear metrics and regular performance reviews.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation to discuss your OKR implementation strategy
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold"
            onClick={() => setShowAuthModal(true)}
          >
            Schedule Free Consultation
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

export default Consulting;
