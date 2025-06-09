import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import {
  Images,
  GraduationCap,
  Settings,
  FileText,
  Users,
  LogOut
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    // Clear authentication state
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('user');

    // Show success message
    toast({
      title: "Success",
      description: "Logged out successfully",
    });

    // Redirect to login page
    navigate('/admin/login');
  };

  const sections = [
    {
      title: "Gallery Management",
      icon: Images,
      description: "Manage photos and videos in the gallery",
      path: "/admin/gallery"
    },
    {
      title: "Career Management",
      icon: GraduationCap,
      description: "Manage job postings and applications",
      path: "/admin/career"
    },
    {
      title: "Services Management",
      icon: Settings,
      description: "Manage service offerings and pricing",
      path: "/admin/services"
    },
    {
      title: "Blog Management",
      icon: FileText,
      description: "Manage blog posts and categories",
      path: "/admin/blog"
    },
    {
      title: "Team Management",
      icon: Users,
      description: "Manage team members and roles",
      path: "/admin/team"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Button 
          variant="destructive" 
          onClick={handleLogout}
          className="flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Card 
            key={section.title} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(section.path)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <section.icon className="w-5 h-5" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{section.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard; 