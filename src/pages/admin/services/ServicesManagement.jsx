import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle, Pencil, Trash } from 'lucide-react';
import Modal from "@/components/ui/modal";

const SERVICE_CATEGORIES = [
  { value: 'web-development', label: 'Web Development' },
  { value: 'app-development', label: 'App Development' },
  { value: 'cloud-services', label: 'Cloud Services' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'ui-ux-design', label: 'UI/UX Design' },
  { value: 'consulting', label: 'IT Consulting' },
  { value: 'security', label: 'Cybersecurity' },
  { value: 'data-analytics', label: 'Data Analytics' },
  { value: 'automation', label: 'Process Automation' },
  { value: 'maintenance', label: 'Maintenance & Support' }
];

const ServicesManagement = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    features: [],
    image: '',
    category: ''
  });
  const { toast } = useToast();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('adminAuth');
    return {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    };
  };

  const fetchServices = async () => {
    try {
      console.log('Fetching services...');
      const response = await fetch('https://cbss-frontend.onrender.com/api/service', {
        headers: getAuthHeaders(),
        credentials: 'include'
      });
      console.log('Fetch response status:', response.status);
      
      if (!response.ok) {
        if (response.status === 401) {
          navigate('/admin/login');
          return;
        }
        throw new Error('Failed to fetch services');
      }
      
      const data = await response.json();
      console.log('Fetched services:', data);
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast({
        title: "Error",
        description: "Failed to fetch services",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'features') {
      // Split features by new line and convert to array of objects
      const featuresArray = value.split('\n')
        .filter(feature => feature.trim() !== '')
        .map(feature => ({
          title: feature.trim(),
          description: ''
        }));
      setNewService(prev => ({
        ...prev,
        [name]: featuresArray
      }));
    } else {
      setNewService(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCategoryChange = (value) => {
    setNewService(prev => ({
      ...prev,
      category: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clean and validate the data
    const cleanService = {
      title: newService.title.trim(),
      description: newService.description.trim(),
      features: newService.features.map(feature => 
        typeof feature === 'string' 
          ? { title: feature.trim(), description: '' }
          : { ...feature, title: feature.title.trim() }
      ).filter(feature => feature.title), // Remove empty features
      image: newService.image.trim()
    };

    // Validate required fields
    if (!cleanService.title || !cleanService.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields (title and description)",
        variant: "destructive",
      });
      return;
    }

    // Validate URL
    const isValidUrl = (url) => {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    };

    if (cleanService.image && !isValidUrl(cleanService.image)) {
      toast({
        title: "Error",
        description: "Please enter a valid image URL",
        variant: "destructive",
      });
      return;
    }

    // Debug logging
    console.log('Submitting service with data:', cleanService);
    console.log('Auth headers:', getAuthHeaders());
    
    try {
      const response = await fetch('https://cbss-frontend.onrender.com/api/service', {
        method: 'POST',
        headers: {
          ...getAuthHeaders(),
          'Accept': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(cleanService)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        if (response.status === 401) {
          navigate('/admin/login');
          return;
        }
        
        // Try to get error message from response
        const errorText = await response.text();
        console.log('Error response text:', errorText);
        
        let errorMessage = 'Failed to add service';
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          console.log('Failed to parse error response as JSON');
          // If we got a text error, use it
          if (errorText && errorText !== 'Server Error') {
            errorMessage = errorText;
          }
        }
        
        throw new Error(errorMessage);
      }

      const addedService = await response.json();
      console.log('Successfully added service:', addedService);
      
      // Refresh the services list instead of manually updating state
      await fetchServices();
      
      toast({
        title: "Success",
        description: "Service added successfully",
      });
      
      setNewService({
        title: '',
        description: '',
        features: [],
        image: ''
      });
      setIsAddModalOpen(false);
    } catch (error) {
      console.error('Error adding service:', error);
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
      toast({
        title: "Error",
        description: error.message || "Failed to add service",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://cbss-frontend.onrender.com/api/service/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
        credentials: 'include'
      });

      if (!response.ok) {
        if (response.status === 401) {
          navigate('/admin/login');
          return;
        }
        throw new Error('Failed to delete service');
      }

      // Refresh the services list instead of manually updating state
      await fetchServices();
      
      toast({
        title: "Success",
        description: "Service deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting service:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to delete service",
        variant: "destructive",
      });
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`https://cbss-frontend.onrender.com/api/service/${editingService._id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify(newService)
      });

      if (!response.ok) {
        if (response.status === 401) {
          navigate('/admin/login');
          return;
        }
        throw new Error('Failed to update service');
      }

      const updatedService = await response.json();
      setServices(prev => prev.map(service =>
        service._id === editingService._id ? updatedService : service
      ));
      
      toast({
        title: "Success",
        description: "Service updated successfully",
      });
      
      setEditingService(null);
      setIsEditModalOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to update service",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Services Management</h1>
        <Button className="flex items-center gap-2" onClick={() => setIsAddModalOpen(true)}>
          <PlusCircle className="w-4 h-4" />
          Add New Service
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.length === 0 ? (
          <div className="col-span-2 text-center py-8">
            <p className="text-gray-500">No services found. Add your first service!</p>
          </div>
        ) : (
          services.map(service => (
            <Card key={service._id}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {service.title}
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleDelete(service._id)}>
                      <Trash className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => {
                      setEditingService(service);
                      setNewService({
                        title: service.title,
                        description: service.description,
                        features: service.features,
                        image: service.image
                      });
                      setIsEditModalOpen(true);
                    }}>
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.image && (
                  <div className="aspect-video relative mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-md"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold">Description</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Features</h3>
                  <ul className="list-disc list-inside">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600">{feature.title}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Add Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Service"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Service Title</Label>
            <Input
              id="title"
              name="title"
              value={newService.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={newService.description}
              onChange={handleInputChange}
              required
              className="min-h-[100px]"
            />
          </div>
          <div>
            <Label htmlFor="features">Features (one per line)</Label>
            <Textarea
              id="features"
              name="features"
              value={newService.features.map(f => f.title).join('\n')}
              onChange={handleInputChange}
              required
              className="min-h-[100px]"
              placeholder="Enter each feature on a new line"
            />
          </div>
          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              name="image"
              value={newService.image}
              onChange={handleInputChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">Add Service</Button>
        </form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Service"
      >
        {editingService && (
          <form onSubmit={handleEdit} className="space-y-4">
            <div>
              <Label htmlFor="title">Service Title</Label>
              <Input
                id="title"
                name="title"
                value={newService.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={newService.description}
                onChange={handleInputChange}
                required
                className="min-h-[100px]"
              />
            </div>
            <div>
              <Label htmlFor="features">Features (one per line)</Label>
              <Textarea
                id="features"
                name="features"
                value={newService.features.map(f => f.title).join('\n')}
                onChange={handleInputChange}
                required
                className="min-h-[100px]"
                placeholder="Enter each feature on a new line"
              />
            </div>
            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="image"
                value={newService.image}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">Update Service</Button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default ServicesManagement; 