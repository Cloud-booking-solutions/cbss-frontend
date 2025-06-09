import { useState, useEffect } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface Course {
  _id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
}

const CareerManagement = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('https://cbss-backend.onrender.com/api/career', {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch courses",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`https://cbss-backend.onrender.com/api/career/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Course deleted successfully",
        });
        fetchCourses();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete course",
        variant: "destructive",
      });
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Career Management</h1>
          <Button>Add New Course</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course._id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <p className="text-gray-600 mb-2">{course.description}</p>
                <p className="text-gray-600 mb-2">Duration: {course.duration}</p>
                <p className="text-gray-600 mb-4">Price: ₹{course.price}</p>
                <div className="flex justify-between">
                  <Button variant="outline">Edit</Button>
                  <Button 
                    variant="destructive"
                    onClick={() => handleDelete(course._id)}
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

export default CareerManagement; 