import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('https://cbss-backend.onrender.com/api/auth/check', {
          credentials: 'include'
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          toast({
            title: "Authentication Required",
            description: "Please log in to access this page",
            variant: "destructive",
          });
          navigate('/admin/login');
        }
      } catch (error) {
        setIsAuthenticated(false);
        toast({
          title: "Error",
          description: "Failed to check authentication status",
          variant: "destructive",
        });
        navigate('/admin/login');
      }
    };

    checkAuth();
  }, [navigate, toast]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute; 