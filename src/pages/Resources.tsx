
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Video, FileText, Download, ExternalLink, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';

const Resources = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuth = () => {
    setShowAuthModal(false);
  };

  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Essential guides for OKR beginners",
      resources: [
        { title: "OKR Fundamentals Guide", type: "PDF", time: "15 min read" },
        { title: "Setting Your First OKRs", type: "Video", time: "20 min watch" },
        { title: "OKR vs KPI: What's the Difference?", type: "Article", time: "8 min read" }
      ]
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video walkthroughs",
      resources: [
        { title: "Platform Overview", type: "Video", time: "12 min watch" },
        { title: "Creating Effective Key Results", type: "Video", time: "18 min watch" },
        { title: "Team Alignment Workshop", type: "Video", time: "45 min watch" }
      ]
    },
    {
      icon: FileText,
      title: "Templates & Tools",
      description: "Ready-to-use OKR templates",
      resources: [
        { title: "OKR Template Library", type: "Download", time: "Instant" },
        { title: "Quarterly Planning Worksheet", type: "PDF", time: "Instant" },
        { title: "OKR Scoring Calculator", type: "Tool", time: "Interactive" }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "The Complete OKR Implementation Playbook",
      description: "A comprehensive 50-page guide covering everything from OKR basics to advanced implementation strategies.",
      type: "eBook",
      duration: "50 pages",
      featured: true
    },
    {
      title: "OKR Maturity Assessment",
      description: "Evaluate your organization's OKR readiness and get personalized recommendations.",
      type: "Assessment",
      duration: "10 minutes",
      featured: false
    },
    {
      title: "Quarterly Business Review Template",
      description: "Professional template for conducting effective quarterly business reviews using OKRs.",
      type: "Template",
      duration: "Ready to use",
      featured: false
    }
  ];

  const webinars = [
    {
      title: "OKR Best Practices for Remote Teams",
      date: "March 15, 2024",
      speaker: "Sarah Chen, CEO",
      registered: 245
    },
    {
      title: "Scaling OKRs: From Startup to Enterprise",
      date: "March 22, 2024",
      speaker: "Michael Rodriguez, CTO",
      registered: 189
    },
    {
      title: "AI-Powered Goal Setting Workshop",
      date: "March 29, 2024",
      speaker: "Dr. Emma Thompson",
      registered: 156
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
          <Badge variant="outline" className="mb-6 bg-green-50 border-green-200 text-green-600">
            <BookOpen className="w-4 h-4 mr-1" />
            Free Resources
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resources & Learning Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to master OKRs. From beginner guides to advanced strategies, 
            we've got resources to help you at every stage of your OKR journey.
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most popular and comprehensive resources to accelerate your OKR success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card 
                key={index} 
                className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm ${
                  resource.featured ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {resource.featured && (
                  <Badge className="absolute -top-3 left-4 bg-blue-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {resource.duration}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    variant={resource.featured ? "default" : "outline"}
                    onClick={() => setShowAuthModal(true)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find exactly what you need with our organized resource library
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <category.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.resources.map((resource, idx) => (
                      <li key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-gray-700">{resource.title}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                          <span className="text-xs text-gray-500">{resource.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-4"
                    variant="outline"
                    onClick={() => setShowAuthModal(true)}
                  >
                    View All
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Upcoming Webinars</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our live sessions with OKR experts and industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{webinar.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {webinar.date} • {webinar.speaker}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">
                      {webinar.registered} registered
                    </span>
                    <Badge variant="outline" className="text-xs bg-green-50 border-green-200 text-green-600">
                      Free
                    </Badge>
                  </div>
                  <Button 
                    className="w-full"
                    onClick={() => setShowAuthModal(true)}
                  >
                    Register Now
                  </Button>
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
            Ready to Put Learning into Action?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start implementing what you've learned with our powerful OKR management platform
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

export default Resources;
