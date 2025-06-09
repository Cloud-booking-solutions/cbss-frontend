import { useState, useEffect } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface Service {
  _id: string;
  title: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  image: string;
}

const ServicesManagement = () => {
  const [services, setServices] = useState<Service[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('https://cbss-frontend.onrender.com/api/services', {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch services",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`https://cbss-frontend.onrender.com/api/services/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Service deleted successfully",
        });
        fetchServices();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete service",
        variant: "destructive",
      });
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Services Management</h1>
          <Button>Add New Service</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service._id}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <p className="text-gray-600 mb-2">{service.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <ul className="list-disc list-inside">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature.title}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline">Edit</Button>
                  <Button 
                    variant="destructive"
                    onClick={() => handleDelete(service._id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ServicesManagement; 