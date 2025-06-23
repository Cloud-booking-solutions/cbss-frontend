import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const API_URL = 'https://cbss-backend.onrender.com';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('adminAuth');
      
      if (!token) {
        setIsAuthenticated(false);
        toast({
          title: "Authentication Error",
          description: "Please log in to access this page",
          variant: "destructive",
        });
        return;
      }

      try {
        const response = await fetch(`${API_URL}/api/auth/verify`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem('adminAuth');
          toast({
            title: "Authentication Error",
            description: "Your session has expired. Please log in again.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Auth verification error:', error);
        setIsAuthenticated(false);
        localStorage.removeItem('adminAuth');
        toast({
          title: "Error",
          description: "Failed to verify authentication",
          variant: "destructive",
        });
      }
    };

    checkAuth();
  }, [toast]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/admin/login" state={{ from: location }} replace />;
};

export default ProtectedRoute; 