
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Users, TrendingUp, Plus, Settings, Bell, Search, Filter, MoreHorizontal, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Sidebar from '@/components/Sidebar';
import OKRCard from '@/components/OKRCard';
import CreateOKRModal from '@/components/CreateOKRModal';
import AIInsights from '@/components/AIInsights';

const Dashboard = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');

  const mockOKRs = [
    {
      id: 1,
      title: "Increase Annual Recurring Revenue",
      description: "Drive sustainable growth through new customer acquisition and expansion",
      progress: 85,
      status: "on-track",
      owner: "Sarah Chen",
      department: "Sales",
      keyResults: [
        { id: 1, title: "Acquire 500 new customers", progress: 82, target: 500, current: 410 },
        { id: 2, title: "Increase average deal size by 25%", progress: 90, target: 125, current: 112 },
        { id: 3, title: "Achieve 95% customer retention", progress: 88, target: 95, current: 84 }
      ]
    },
    {
      id: 2,
      title: "Launch Next-Gen Product Platform",
      description: "Deliver innovative platform features that exceed customer expectations",
      progress: 67,
      status: "at-risk",
      owner: "Mike Rodriguez",
      department: "Product",
      keyResults: [
        { id: 1, title: "Complete MVP development", progress: 75, target: 100, current: 75 },
        { id: 2, title: "Conduct 50 user testing sessions", progress: 60, target: 50, current: 30 },
        { id: 3, title: "Achieve 4.5/5 user satisfaction", progress: 65, target: 4.5, current: 3.8 }
      ]
    },
    {
      id: 3,
      title: "Build World-Class Engineering Team",
      description: "Scale our engineering capabilities with top-tier talent",
      progress: 92,
      status: "ahead",
      owner: "David Kim",
      department: "Engineering",
      keyResults: [
        { id: 1, title: "Hire 15 senior engineers", progress: 95, target: 15, current: 14 },
        { id: 2, title: "Reduce time-to-hire to 30 days", progress: 88, target: 30, current: 32 },
        { id: 3, title: "Achieve 90% employee satisfaction", progress: 93, target: 90, current: 88 }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ahead': return 'bg-green-100 text-green-800';
      case 'on-track': return 'bg-blue-100 text-blue-800';
      case 'at-risk': return 'bg-yellow-100 text-yellow-800';
      case 'behind': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ahead': return 'Ahead';
      case 'on-track': return 'On Track';
      case 'at-risk': return 'At Risk';
      case 'behind': return 'Behind';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">OKR Dashboard</h1>
              <p className="text-gray-600">Q4 2024 • Last updated 2 hours ago</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search OKRs..." 
                  className="pl-10 w-80"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={() => setShowCreateModal(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Create OKR
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-fit">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="my-okrs">My OKRs</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total OKRs</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">
                      +2 from last quarter
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">On Track</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">18</div>
                    <p className="text-xs text-muted-foreground">
                      75% completion rate
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42</div>
                    <p className="text-xs text-muted-foreground">
                      +5 this quarter
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">81%</div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* AI Insights */}
              <AIInsights />

              {/* OKRs List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Active OKRs</h2>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="grid gap-6">
                  {mockOKRs.map((okr) => (
                    <OKRCard key={okr.id} okr={okr} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="my-okrs" className="space-y-6">
              <div className="text-center py-12">
                <Target className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No personal OKRs</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by creating your first OKR.</p>
                <div className="mt-6">
                  <Button onClick={() => setShowCreateModal(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create OKR
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="team" className="space-y-6">
              <div className="grid gap-6">
                {mockOKRs.filter(okr => okr.department !== 'Personal').map((okr) => (
                  <OKRCard key={okr.id} okr={okr} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="company" className="space-y-6">
              <div className="grid gap-6">
                {mockOKRs.map((okr) => (
                  <OKRCard key={okr.id} okr={okr} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>

      <CreateOKRModal 
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
};

export default Dashboard;
