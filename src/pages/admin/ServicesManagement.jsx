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
import { Pencil, Trash } from 'lucide-react';

const ServicesManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [services, setServices] = useState([
    { 
      id: 1, 
      name: 'Website Development', 
      description: 'Professional website development services', 
      price: '$2000 - $10000',
      features: 'Responsive Design, SEO Optimized, Fast Loading',
      category: 'Development'
    },
    { 
      id: 2, 
      name: 'Digital Marketing', 
      description: 'Complete digital marketing solutions', 
      price: '$500 - $3000',
      features: 'Social Media, PPC, Content Marketing',
      category: 'Marketing'
    },
    { 
      id: 3, 
      name: 'Software Development', 
      description: 'Custom software development', 
      price: '$5000 - $50000',
      features: 'Custom Solutions, API Integration, Cloud Ready',
      category: 'Development'
    },
  ]);

  const [newService, setNewService] = useState({
    name: '',
    description: '',
    price: '',
    features: '',
    category: ''
  });

  const [editingService, setEditingService] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleAddService = (e) => {
    e.preventDefault();
    if (!newService.name || !newService.description) {
      toast({ title: 'Error', description: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }
    
    const service = { ...newService, id: Date.now() };
    setServices([...services, service]);
    setIsAddModalOpen(false);
    setNewService({ name: '', description: '', price: '', features: '', category: '' });
    toast({ title: 'Success', description: 'Service added successfully!' });
  };

  const handleEditService = (e) => {
    e.preventDefault();
    if (!editingService.name || !editingService.description) {
      toast({ title: 'Error', description: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }

    setServices(services.map(service => 
      service.id === editingService.id ? editingService : service
    ));
    setIsEditModalOpen(false);
    setEditingService(null);
    toast({ title: 'Success', description: 'Service updated successfully!' });
  };

  const handleDeleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
    toast({ title: 'Success', description: 'Service deleted successfully!' });
  };

  const openEditModal = (service) => {
    setEditingService({ ...service });
    setIsEditModalOpen(true);
  };

  const openAddModal = () => {
    setNewService({ name: '', description: '', price: '', features: '', category: '' });
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
              <Settings className="w-6 h-6 text-purple-600" />
              <h1 className="text-xl font-bold text-gray-900">Services Management</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Manage Services</CardTitle>
              <Button onClick={() => setIsAddModalOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Service
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price Range</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell>{service.description}</TableCell>
                    <TableCell>{service.price}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {service.category}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" onClick={() => openEditModal(service)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDeleteService(service.id)}>
                          <Trash className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add Modal */}
        <Modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title="Add New Service"
        >
          <form onSubmit={handleAddService} className="space-y-4">
            <div>
              <Label htmlFor="name">Service Name *</Label>
              <Input
                id="name"
                value={newService.name}
                onChange={(e) => setNewService({...newService, name: e.target.value})}
                placeholder="Enter service name"
                required
                aria-required="true"
              />
            </div>
            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={newService.description}
                onChange={(e) => setNewService({...newService, description: e.target.value})}
                placeholder="Enter service description"
                required
                aria-required="true"
              />
            </div>
            <div>
              <Label htmlFor="price">Price Range</Label>
              <Input
                id="price"
                value={newService.price}
                onChange={(e) => setNewService({...newService, price: e.target.value})}
                placeholder="e.g., $500 - $2000"
              />
            </div>
            <div>
              <Label htmlFor="features">Key Features</Label>
              <Textarea
                id="features"
                value={newService.features}
                onChange={(e) => setNewService({...newService, features: e.target.value})}
                placeholder="List key features separated by commas"
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={newService.category}
                onChange={(e) => setNewService({...newService, category: e.target.value})}
                placeholder="e.g., Development, Marketing"
              />
            </div>
            <Button type="submit" className="w-full">
              Add Service
            </Button>
          </form>
        </Modal>

        {/* Edit Modal */}
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          title="Edit Service"
        >
          {editingService && (
            <form onSubmit={(e) => { e.preventDefault(); handleEditService(e); }} className="space-y-4">
              <div>
                <Label htmlFor="edit-name">Service Name *</Label>
                <Input
                  id="edit-name"
                  value={editingService.name}
                  onChange={(e) => setEditingService({...editingService, name: e.target.value})}
                  aria-required="true"
                />
              </div>
              <div>
                <Label htmlFor="edit-description">Description *</Label>
                <Textarea
                  id="edit-description"
                  value={editingService.description}
                  onChange={(e) => setEditingService({...editingService, description: e.target.value})}
                  aria-required="true"
                />
              </div>
              <div>
                <Label htmlFor="edit-price">Price Range</Label>
                <Input
                  id="edit-price"
                  value={editingService.price}
                  onChange={(e) => setEditingService({...editingService, price: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-features">Key Features</Label>
                <Textarea
                  id="edit-features"
                  value={editingService.features}
                  onChange={(e) => setEditingService({...editingService, features: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-category">Category</Label>
                <Input
                  id="edit-category"
                  value={editingService.category}
                  onChange={(e) => setEditingService({...editingService, category: e.target.value})}
                />
              </div>
              <Button type="submit" className="w-full">
                Update Service
              </Button>
            </form>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default ServicesManagement;
