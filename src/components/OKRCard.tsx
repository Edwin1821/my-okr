
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MoreHorizontal, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface KeyResult {
  id: number;
  title: string;
  progress: number;
  target: number;
  current: number;
}

interface OKR {
  id: number;
  title: string;
  description: string;
  progress: number;
  status: string;
  owner: string;
  department: string;
  keyResults: KeyResult[];
}

interface OKRCardProps {
  okr: OKR;
}

const OKRCard = ({ okr }: OKRCardProps) => {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ahead': return <CheckCircle className="w-4 h-4" />;
      case 'on-track': return <TrendingUp className="w-4 h-4" />;
      case 'at-risk': return <Clock className="w-4 h-4" />;
      case 'behind': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return 'bg-green-500';
    if (progress >= 70) return 'bg-blue-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <CardTitle className="text-lg">{okr.title}</CardTitle>
              <Badge className={getStatusColor(okr.status)}>
                {getStatusIcon(okr.status)}
                <span className="ml-1">{getStatusText(okr.status)}</span>
              </Badge>
            </div>
            <CardDescription>{okr.description}</CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Avatar className="w-6 h-6">
                <AvatarFallback className="text-xs">
                  {okr.owner.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-gray-600">{okr.owner}</span>
            </div>
            <Badge variant="outline">{okr.department}</Badge>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">{okr.progress}%</div>
            <div className="text-xs text-gray-500">Overall Progress</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Overall Progress</span>
            <span className="font-medium">{okr.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(okr.progress)}`}
              style={{ width: `${okr.progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Key Results</h4>
          {okr.keyResults.map((kr) => (
            <div key={kr.id} className="space-y-2 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{kr.title}</span>
                <span className="text-sm text-gray-500">{kr.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full transition-all duration-300 ${getProgressColor(kr.progress)}`}
                  style={{ width: `${kr.progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Current: {kr.current}</span>
                <span>Target: {kr.target}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OKRCard;
