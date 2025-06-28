import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Target, Plus, Search, LogOut, Edit, Trash2, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import CreateOKRDialog from '@/components/CreateOKRDialog';
import EditOKRDialog from '@/components/EditOKRDialog';
interface OKR {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: string;
  created_at: string;
  due_date?: string;
}
const OKRDashboard = () => {
  const [okrs, setOkrs] = useState<OKR[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [editingOKR, setEditingOKR] = useState<OKR | null>(null);
  const {
    user,
    signOut
  } = useAuth();
  const {
    toast
  } = useToast();
  useEffect(() => {
    fetchOKRs();
  }, []);
  const fetchOKRs = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from('okrs').select('*').order('created_at', {
        ascending: false
      });
      if (error) {
        console.error('Error fetching OKRs:', error);
        toast({
          title: "Error",
          description: "Failed to fetch OKRs",
          variant: "destructive"
        });
      } else {
        setOkrs(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  const deleteOKR = async (id: string) => {
    try {
      const {
        error
      } = await supabase.from('okrs').delete().eq('id', id);
      if (error) {
        toast({
          title: "Error",
          description: "Failed to delete OKR",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Success",
          description: "OKR deleted successfully"
        });
        fetchOKRs();
      }
    } catch (error) {
      console.error('Error deleting OKR:', error);
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'active':
        return 'bg-blue-100 text-blue-800';
      case 'at-risk':
        return 'bg-yellow-100 text-yellow-800';
      case 'paused':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };
  const filteredOKRs = okrs.filter(okr => okr.title.toLowerCase().includes(searchTerm.toLowerCase()) || okr.description?.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleSignOut = async () => {
    await signOut();
  };
  if (loading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Target className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading your OKRs...</p>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">MyOKR Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.email}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search OKRs..." className="pl-10 w-80" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" onClick={() => setShowCreateDialog(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create OKR
            </Button>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total OKRs</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{okrs.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {okrs.filter(okr => okr.status === 'active').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {okrs.filter(okr => okr.status === 'completed').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {okrs.length > 0 ? Math.round(okrs.reduce((sum, okr) => sum + okr.progress, 0) / okrs.length) : 0}%
              </div>
            </CardContent>
          </Card>
        </div>

        {/* OKRs List */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Your OKRs</h2>
          
          {filteredOKRs.length === 0 ? <Card className="text-center py-12">
              <CardContent>
                <Target className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {searchTerm ? 'No OKRs found' : 'No OKRs yet'}
                </h3>
                <p className="text-gray-500 mb-6">
                  {searchTerm ? 'Try adjusting your search terms' : 'Get started by creating your first OKR'}
                </p>
                {!searchTerm && <Button onClick={() => setShowCreateDialog(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Your First OKR
                  </Button>}
              </CardContent>
            </Card> : <div className="grid gap-6">
              {filteredOKRs.map(okr => <Card key={okr.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{okr.title}</CardTitle>
                        <CardDescription className="text-base">
                          {okr.description}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Badge className={getStatusColor(okr.status)}>
                          {okr.status}
                        </Badge>
                        <Button variant="ghost" size="sm" onClick={() => setEditingOKR(okr)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => deleteOKR(okr.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{okr.progress}%</span>
                      </div>
                      <Progress value={okr.progress} className="h-2" />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Created: {new Date(okr.created_at).toLocaleDateString()}</span>
                        {okr.due_date && <span>Due: {new Date(okr.due_date).toLocaleDateString()}</span>}
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>}
        </div>
      </main>

      <CreateOKRDialog open={showCreateDialog} onOpenChange={setShowCreateDialog} onSuccess={fetchOKRs} />

      {editingOKR && <EditOKRDialog okr={editingOKR} open={!!editingOKR} onOpenChange={open => !open && setEditingOKR(null)} onSuccess={fetchOKRs} />}
    </div>;
};
export default OKRDashboard;