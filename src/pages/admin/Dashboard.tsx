import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AdminLayout from "@/components/layouts/AdminLayout";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Gallery Management',
      description: 'Manage photos and videos in the Life@Cloud section',
      path: '/admin/gallery'
    },
    {
      title: 'Career Management',
      description: 'Manage courses in the Career Solution section',
      path: '/admin/career'
    },
    {
      title: 'Services Management',
      description: 'Manage services offered by Cloud Booking',
      path: '/admin/services'
    },
    {
      title: 'Blog Management',
      description: 'Manage blog posts and content',
      path: '/admin/blog'
    },
    {
      title: 'Team Management',
      description: 'Manage Expert Team and Interns',
      path: '/admin/team'
    }
  ];

  return (
    <AdminLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Card key={section.path} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full"
                  onClick={() => navigate(section.path)}
                >
                  Manage
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard; 