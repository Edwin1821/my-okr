
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Users, Award, Heart, Globe, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';

const About = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuth = () => {
    setShowAuthModal(false);
  };

  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "We believe every organization should have clear, measurable objectives that drive meaningful impact."
    },
    {
      icon: Users,
      title: "People-First",
      description: "Our platform is designed to empower people and teams, not just track numbers and metrics."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate to make OKR management more intuitive, intelligent, and effective."
    },
    {
      icon: Heart,
      title: "Transparency",
      description: "We practice what we preach with complete transparency in our own goals and progress."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      description: "Former Google PM who helped scale OKRs across multiple teams. Stanford MBA with 10+ years in product strategy."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      description: "Ex-Microsoft engineer with expertise in scalable systems. Led engineering teams implementing OKRs at enterprise scale."
    },
    {
      name: "Dr. Emma Thompson",
      role: "Head of Research",
      description: "Organizational psychology PhD specializing in goal-setting theory and team performance optimization."
    },
    {
      name: "David Kim",
      role: "VP of Customer Success",
      description: "Former McKinsey consultant with 8+ years helping Fortune 500 companies implement strategic frameworks."
    }
  ];

  const stats = [
    { number: "1000+", label: "Companies Trust Us" },
    { number: "50K+", label: "Active Users" },
    { number: "95%", label: "Customer Satisfaction" },
    { number: "2019", label: "Founded" }
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
            Our Story
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Building the Future of Goal Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We started OKRMate with a simple belief: every team deserves tools that make strategic 
            alignment effortless and goal achievement inevitable.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're on a mission to democratize strategic alignment. Every organization, 
                regardless of size or industry, should have access to the same goal-setting 
                methodologies that drive success at the world's most innovative companies.
              </p>
              <p className="text-lg text-gray-600">
                Through intelligent automation, AI-powered insights, and intuitive design, 
                we're making OKRs accessible to everyone – from startups to Fortune 500 enterprises.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate experts dedicated to helping organizations achieve their most ambitious goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">
                        {member.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
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
            Join Us on This Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the movement to transform how organizations set, track, and achieve their goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
              onClick={() => setShowAuthModal(true)}
            >
              Start Your Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
              onClick={() => setShowAuthModal(true)}
            >
              Contact Us
            </Button>
          </div>
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

export default About;
