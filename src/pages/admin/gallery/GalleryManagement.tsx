import { useState, useEffect } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface GalleryItem {
  _id: string;
  title: string;
  description: string;
  type: 'photo' | 'video';
  url: string;
  thumbnail: string;
}

const GalleryManagement = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const response = await fetch('https://cbss-frontend.onrender.com/api/gallery', {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch gallery items",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`https://cbss-frontend.onrender.com/api/gallery/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Item deleted successfully",
        });
        fetchGalleryItems();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete item",
        variant: "destructive",
      });
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gallery Management</h1>
          <Button>Add New Item</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item._id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between">
                  <Button variant="outline">Edit</Button>
                  <Button 
                    variant="destructive"
                    onClick={() => handleDelete(item._id)}
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

export default GalleryManagement; 