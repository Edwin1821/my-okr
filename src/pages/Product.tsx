
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Users, TrendingUp, Sparkles, CheckCircle, Zap, Shield, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';

const Product = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuth = () => {
    setShowAuthModal(false);
    // Handle authentication success
  };

  const features = [
    {
      icon: Target,
      title: "Strategic Alignment",
      description: "Connect individual goals to company objectives with clear hierarchical structure",
      features: ["Organization-wide visibility", "Department & team structure", "Cascading objectives"]
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Real-time progress monitoring with intelligent insights and recommendations",
      features: ["Visual progress indicators", "Automated check-ins", "Performance analytics"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enhanced team coordination with AI-powered suggestions and insights",
      features: ["AI-powered insights", "Smart recommendations", "Team alignment tools"]
    },
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to optimize your OKR strategy",
      features: ["Smart goal suggestions", "Performance predictions", "Automated reporting"]
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Stay informed with instant notifications and live progress updates",
      features: ["Live dashboards", "Push notifications", "Mobile synchronization"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with comprehensive data protection",
      features: ["End-to-end encryption", "SOC 2 compliance", "Role-based access"]
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
            <Globe className="w-4 h-4 mr-1" />
            Trusted by 1000+ companies worldwide
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transform Your Team's Performance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            OKRMate is the complete OKR management platform that aligns your entire organization 
            around strategic objectives and drives measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              onClick={() => setShowAuthModal(true)}
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowAuthModal(true)}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need for OKR success</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and features designed to make OKR implementation seamless and effective
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using OKRMate to achieve their strategic goals
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
            onClick={() => setShowAuthModal(true)}
          >
            Start Your Free Trial
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

export default Product;
