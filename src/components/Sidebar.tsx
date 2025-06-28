
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Home, 
  Users, 
  TrendingUp, 
  Settings, 
  Bell, 
  FileText, 
  BarChart3, 
  Calendar,
  Sparkles 
} from 'lucide-react';

const Sidebar = () => {
  const navigation = [
    { name: 'Dashboard', icon: Home, current: true },
    { name: 'My OKRs', icon: Target, current: false },
    { name: 'Team OKRs', icon: Users, current: false },
    { name: 'Company OKRs', icon: TrendingUp, current: false },
    { name: 'Reports', icon: BarChart3, current: false },
    { name: 'Calendar', icon: Calendar, current: false },
  ];

  const quickActions = [
    { name: 'AI Insights', icon: Sparkles, badge: 'New' },
    { name: 'Templates', icon: FileText },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="flex items-center px-6 py-4 border-b border-gray-200">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <Target className="w-5 h-5 text-white" />
        </div>
        <span className="ml-2 text-xl font-bold text-gray-900">OKRMate</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-8">
        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Navigation
          </h3>
          <div className="mt-2 space-y-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant={item.current ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.name}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Quick Actions
          </h3>
          <div className="mt-2 space-y-1">
            {quickActions.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start"
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.name}
                {item.badge && (
                  <Badge className="ml-auto bg-purple-100 text-purple-700 text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* User Profile */}
      <div className="px-4 py-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-white">JD</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">John Doe</p>
            <p className="text-xs text-gray-500">john@company.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
