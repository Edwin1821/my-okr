
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, TrendingUp, AlertTriangle, Lightbulb, Target } from 'lucide-react';

const AIInsights = () => {
  const insights = [
    {
      id: 1,
      type: 'recommendation',
      title: 'Revenue Goal At Risk',
      description: 'Your Q4 revenue goal is trending 15% below target. Consider accelerating enterprise deals or adjusting timeline.',
      priority: 'high',
      action: 'Review pipeline',
      icon: AlertTriangle,
      color: 'text-red-600 bg-red-50'
    },
    {
      id: 2,
      type: 'insight',
      title: 'Team Performance Strong',
      description: 'Engineering team is 20% ahead of their hiring goals. Great time to tackle stretch objectives.',
      priority: 'medium',
      action: 'Add stretch goals',
      icon: TrendingUp,
      color: 'text-green-600 bg-green-50'
    },
    {
      id: 3,
      type: 'suggestion',
      title: 'Optimize Key Results',
      description: 'Product team has 3 similar metrics. Consider consolidating for better focus and clarity.',
      priority: 'low',
      action: 'Simplify metrics',
      icon: Lightbulb,
      color: 'text-blue-600 bg-blue-50'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-blue-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <CardTitle className="text-lg">AI Insights</CardTitle>
            <Badge className="bg-purple-100 text-purple-700">Beta</Badge>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        <CardDescription>
          Intelligent recommendations based on your OKR performance and trends
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {insights.map((insight) => (
          <div key={insight.id} className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg ${insight.color}`}>
                <insight.icon className="w-4 h-4" />
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{insight.title}</h4>
                  <Badge className={getPriorityColor(insight.priority)}>
                    {insight.priority}
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-600">{insight.description}</p>
                
                <Button variant="outline" size="sm" className="mt-2">
                  {insight.action}
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        <div className="text-center pt-2">
          <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
            <Target className="w-4 h-4 mr-1" />
            Generate New Insights
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsights;
