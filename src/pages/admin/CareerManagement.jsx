import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Plus, Edit, Trash2, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Modal from "@/components/ui/modal";

const CareerManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [courses, setCourses] = useState([
    { id: 1, title: 'Full Stack Development', description: 'Complete web development course', duration: '6 months', price: '$999', category: 'Programming' },
    { id: 2, title: 'Digital Marketing', description: 'Master digital marketing strategies', duration: '3 months', price: '$599', category: 'Marketing' },
  ]);

  const [learningPaths, setLearningPaths] = useState([
    { id: 1, name: 'Frontend Developer Path', description: 'Become a frontend expert', courses: 3 },
    { id: 2, name: 'Backend Developer Path', description: 'Master backend technologies', courses: 4 },
  ]);

  const [certifications, setCertifications] = useState([
    { id: 1, name: 'Cloud Developer Certification', description: 'Industry recognized cloud certification', provider: 'Cloud Institute' },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState({});
  const [activeTab, setActiveTab] = useState('courses');
  const [currentType, setCurrentType] = useState('');

  const handleAdd = () => {
    console.log('Adding item:', currentType, newItem);
    
    if (currentType === 'courses' && (!newItem.title || !newItem.description)) {
      toast({ title: 'Error', description: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }
    if (currentType === 'paths' && (!newItem.name || !newItem.description)) {
      toast({ title: 'Error', description: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }
    if (currentType === 'certifications' && (!newItem.name || !newItem.description)) {
      toast({ title: 'Error', description: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }

    const item = { ...newItem, id: Date.now() };
    if (currentType === 'courses') {
      setCourses([...courses, item]);
    } else if (currentType === 'paths') {
      setLearningPaths([...learningPaths, item]);
    } else if (currentType === 'certifications') {
      setCertifications([...certifications, item]);
    }
    setIsAddModalOpen(false);
    setNewItem({});
    setCurrentType('');
    toast({ title: 'Success', description: `${currentType.slice(0, -1)} added successfully!` });
  };

  const handleEdit = () => {
    console.log('Editing item:', currentType, editingItem);
    
    if (currentType === 'courses' && (!editingItem.title || !editingItem.description)) {
      toast({ title: 'Error', description: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }
    if (currentType === 'paths' && (!editingItem.name || !editingItem.description)) {
      toast({ title: 'Error', description: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }
    if (currentType === 'certifications' && (!editingItem.name || !editingItem.description)) {
      toast({ title: 'Error', description: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }

    if (currentType === 'courses') {
      setCourses(courses.map(item => item.id === editingItem.id ? editingItem : item));
    } else if (currentType === 'paths') {
      setLearningPaths(learningPaths.map(item => item.id === editingItem.id ? editingItem : item));
    } else if (currentType === 'certifications') {
      setCertifications(certifications.map(item => item.id === editingItem.id ? editingItem : item));
    }
    setIsEditModalOpen(false);
    setEditingItem(null);
    setCurrentType('');
    toast({ title: 'Success', description: `${currentType.slice(0, -1)} updated successfully!` });
  };

  const handleDelete = (type, id) => {
    if (type === 'courses') {
      setCourses(courses.filter(item => item.id !== id));
    } else if (type === 'paths') {
      setLearningPaths(learningPaths.filter(item => item.id !== id));
    } else if (type === 'certifications') {
      setCertifications(certifications.filter(item => item.id !== id));
    }
    toast({ title: 'Success', description: `${type.slice(0, -1)} deleted successfully!` });
  };

  const openEditModal = (type, item) => {
    console.log('Opening edit modal for:', type, item);
    setEditingItem({ ...item });
    setCurrentType(type);
    setIsEditModalOpen(true);
  };

  const openAddModal = (type) => {
    console.log('Opening add modal for:', type);
    setNewItem({});
    setCurrentType(type);
    setIsAddModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Button onClick={() => navigate('/admin/dashboard')} variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <Settings className="w-6 h-6 text-green-600" />
              <h1 className="text-xl font-bold text-gray-900">Career Management</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="paths">Learning Paths</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Manage Courses</CardTitle>
                  <Button onClick={() => openAddModal('courses')}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Course
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell className="font-medium">{course.title}</TableCell>
                        <TableCell>{course.description}</TableCell>
                        <TableCell>{course.duration}</TableCell>
                        <TableCell>{course.price}</TableCell>
                        <TableCell>{course.category}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" onClick={() => openEditModal('courses', course)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => handleDelete('courses', course.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="paths">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Manage Learning Paths</CardTitle>
                  <Button onClick={() => openAddModal('paths')}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Learning Path
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Courses</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {learningPaths.map((path) => (
                      <TableRow key={path.id}>
                        <TableCell className="font-medium">{path.name}</TableCell>
                        <TableCell>{path.description}</TableCell>
                        <TableCell>{path.courses}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" onClick={() => openEditModal('paths', path)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => handleDelete('paths', path.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certifications">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Manage Certifications</CardTitle>
                  <Button onClick={() => openAddModal('certifications')}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Certification
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {certifications.map((cert) => (
                      <TableRow key={cert.id}>
                        <TableCell className="font-medium">{cert.name}</TableCell>
                        <TableCell>{cert.description}</TableCell>
                        <TableCell>{cert.provider}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" onClick={() => openEditModal('certifications', cert)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => handleDelete('certifications', cert.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Add Modal */}
        <Modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title={`Add New ${currentType === 'courses' ? 'Course' : currentType === 'paths' ? 'Learning Path' : 'Certification'}`}
        >
          <form onSubmit={handleAdd} className="space-y-4">
        {/* Add Dialog */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New {currentType === 'courses' ? 'Course' : currentType === 'paths' ? 'Learning Path' : 'Certification'}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {currentType === 'courses' && (
                <>
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={newItem.title || ''}
                      onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                      placeholder="Enter course title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={newItem.description || ''}
                      onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                      placeholder="Enter course description"
                    />
                  </div>
                  <div>
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      value={newItem.duration || ''}
                      onChange={(e) => setNewItem({...newItem, duration: e.target.value})}
                      placeholder="e.g., 6 months"
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      value={newItem.price || ''}
                      onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                      placeholder="e.g., $999"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={newItem.category || ''}
                      onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                      placeholder="e.g., Programming"
                    />
                  </div>
                </>
              )}
              {currentType === 'paths' && (
                <>
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={newItem.name || ''}
                      onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                      placeholder="Enter path name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={newItem.description || ''}
                      onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                      placeholder="Enter path description"
                    />
                  </div>
                  <div>
                    <Label htmlFor="courses">Number of Courses</Label>
                    <Input
                      id="courses"
                      type="number"
                      value={newItem.courses || ''}
                      onChange={(e) => setNewItem({...newItem, courses: parseInt(e.target.value) || 0})}
                      placeholder="e.g., 5"
                    />
                  </div>
                </>
              )}
              {currentType === 'certifications' && (
                <>
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={newItem.name || ''}
                      onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                      placeholder="Enter certification name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={newItem.description || ''}
                      onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                      placeholder="Enter certification description"
                    />
                  </div>
                  <div>
                    <Label htmlFor="provider">Provider</Label>
                    <Input
                      id="provider"
                      value={newItem.provider || ''}
                      onChange={(e) => setNewItem({...newItem, provider: e.target.value})}
                      placeholder="e.g., AWS, Google"
                    />
                  </div>
                </>
              )}
              <Button onClick={handleAdd} className="w-full">
                Add {currentType === 'courses' ? 'Course' : currentType === 'paths' ? 'Learning Path' : 'Certification'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit {currentType === 'courses' ? 'Course' : currentType === 'paths' ? 'Learning Path' : 'Certification'}</DialogTitle>
            </DialogHeader>
            {editingItem && (
              <div className="space-y-4">
                {currentType === 'courses' && (
                  <>
                    <div>
                      <Label htmlFor="edit-title">Title *</Label>
                      <Input
                        id="edit-title"
                        value={editingItem.title || ''}
                        onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-description">Description *</Label>
                      <Textarea
                        id="edit-description"
                        value={editingItem.description || ''}
                        onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-duration">Duration</Label>
                      <Input
                        id="edit-duration"
                        value={editingItem.duration || ''}
                        onChange={(e) => setEditingItem({...editingItem, duration: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-price">Price</Label>
                      <Input
                        id="edit-price"
                        value={editingItem.price || ''}
                        onChange={(e) => setEditingItem({...editingItem, price: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-category">Category</Label>
                      <Input
                        id="edit-category"
                        value={editingItem.category || ''}
                        onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                      />
                    </div>
                  </>
                )}
                {currentType === 'paths' && (
                  <>
                    <div>
                      <Label htmlFor="edit-name">Name *</Label>
                      <Input
                        id="edit-name"
                        value={editingItem.name || ''}
                        onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-description">Description *</Label>
                      <Textarea
                        id="edit-description"
                        value={editingItem.description || ''}
                        onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-courses">Number of Courses</Label>
                      <Input
                        id="edit-courses"
                        type="number"
                        value={editingItem.courses || ''}
                        onChange={(e) => setEditingItem({...editingItem, courses: parseInt(e.target.value) || 0})}
                      />
                    </div>
                  </>
                )}
                {currentType === 'certifications' && (
                  <>
                    <div>
                      <Label htmlFor="edit-name">Name *</Label>
                      <Input
                        id="edit-name"
                        value={editingItem.name || ''}
                        onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-description">Description *</Label>
                      <Textarea
                        id="edit-description"
                        value={editingItem.description || ''}
                        onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-provider">Provider</Label>
                      <Input
                        id="edit-provider"
                        value={editingItem.provider || ''}
                        onChange={(e) => setEditingItem({...editingItem, provider: e.target.value})}
                      />
                    </div>
                  </>
                )}
                <Button onClick={handleEdit} className="w-full">
                  Update {currentType === 'courses' ? 'Course' : currentType === 'paths' ? 'Learning Path' : 'Certification'}
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CareerManagement;
