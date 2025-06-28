
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, X, Target, Sparkles } from 'lucide-react';

interface CreateOKRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface KeyResult {
  id: string;
  title: string;
  target: string;
  unit: string;
}

const CreateOKRModal = ({ isOpen, onClose }: CreateOKRModalProps) => {
  const [objective, setObjective] = useState('');
  const [description, setDescription] = useState('');
  const [department, setDepartment] = useState('');
  const [assignee, setAssignee] = useState('');
  const [keyResults, setKeyResults] = useState<KeyResult[]>([
    { id: '1', title: '', target: '', unit: 'number' }
  ]);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);

  const addKeyResult = () => {
    const newKeyResult: KeyResult = {
      id: Date.now().toString(),
      title: '',
      target: '',
      unit: 'number'
    };
    setKeyResults([...keyResults, newKeyResult]);
  };

  const removeKeyResult = (id: string) => {
    if (keyResults.length > 1) {
      setKeyResults(keyResults.filter(kr => kr.id !== id));
    }
  };

  const updateKeyResult = (id: string, field: keyof KeyResult, value: string) => {
    setKeyResults(keyResults.map(kr => 
      kr.id === id ? { ...kr, [field]: value } : kr
    ));
  };

  const generateAISuggestions = async () => {
    setIsGeneratingAI(true);
    
    // Simulate AI generation
    setTimeout(() => {
      if (objective.toLowerCase().includes('revenue')) {
        setKeyResults([
          { id: '1', title: 'Increase monthly recurring revenue', target: '500000', unit: 'currency' },
          { id: '2', title: 'Acquire new customers', target: '100', unit: 'number' },
          { id: '3', title: 'Improve customer retention rate', target: '95', unit: 'percentage' }
        ]);
      } else if (objective.toLowerCase().includes('product')) {
        setKeyResults([
          { id: '1', title: 'Complete feature development', target: '100', unit: 'percentage' },
          { id: '2', title: 'User adoption rate', target: '80', unit: 'percentage' },
          { id: '3', title: 'Customer satisfaction score', target: '4.5', unit: 'rating' }
        ]);
      } else {
        setKeyResults([
          { id: '1', title: 'Achieve target completion', target: '100', unit: 'percentage' },
          { id: '2', title: 'Improve efficiency metrics', target: '85', unit: 'percentage' },
          { id: '3', title: 'Stakeholder satisfaction', target: '4.0', unit: 'rating' }
        ]);
      }
      setIsGeneratingAI(false);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OKR creation
    console.log('Creating OKR:', { objective, description, department, assignee, keyResults });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center">
            <Target className="w-6 h-6 mr-2 text-blue-600" />
            Create New OKR
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Objective Details */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="objective">Objective *</Label>
                <Input
                  id="objective"
                  placeholder="e.g., Increase annual recurring revenue"
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what you want to achieve and why it matters..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select value={department} onValueChange={setDepartment}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="customer-success">Customer Success</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assignee">Assignee</Label>
                  <Select value={assignee} onValueChange={setAssignee}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select assignee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sarah-chen">Sarah Chen</SelectItem>
                      <SelectItem value="mike-rodriguez">Mike Rodriguez</SelectItem>
                      <SelectItem value="david-kim">David Kim</SelectItem>
                      <SelectItem value="lisa-wang">Lisa Wang</SelectItem>
                      <SelectItem value="alex-johnson">Alex Johnson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Right Column - Key Results */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Key Results *</Label>
                <div className="flex space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={generateAISuggestions}
                    disabled={!objective || isGeneratingAI}
                  >
                    <Sparkles className="w-4 h-4 mr-1" />
                    {isGeneratingAI ? 'Generating...' : 'AI Suggest'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addKeyResult}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add KR
                  </Button>
                </div>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {keyResults.map((kr, index) => (
                  <Card key={kr.id} className="border border-gray-200">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm">Key Result {index + 1}</CardTitle>
                        {keyResults.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeKeyResult(kr.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Input
                        placeholder="e.g., Increase customer acquisition"
                        value={kr.title}
                        onChange={(e) => updateKeyResult(kr.id, 'title', e.target.value)}
                        required
                      />
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Target value"
                          value={kr.target}
                          onChange={(e) => updateKeyResult(kr.id, 'target', e.target.value)}
                          required
                        />
                        <Select
                          value={kr.unit}
                          onValueChange={(value) => updateKeyResult(kr.id, 'unit', value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="number">Number</SelectItem>
                            <SelectItem value="percentage">%</SelectItem>
                            <SelectItem value="currency">$</SelectItem>
                            <SelectItem value="rating">Rating</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Create OKR
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOKRModal;
