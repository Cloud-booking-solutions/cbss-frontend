import { ReactNode } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      const response = await fetch('https://cbss-frontend.onrender.com/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Logged out successfully",
        });
        navigate('/admin/login');
      } else {
        toast({
          title: "Error",
          description: "Failed to logout",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while logging out",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/admin/dashboard" className="flex items-center">
                <span className="text-xl font-bold">Admin Panel</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout; 