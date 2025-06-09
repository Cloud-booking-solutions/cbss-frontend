import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import api from '@/utils/api';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('adminAuth');
      
      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        toast({
          title: "Authentication Required",
          description: "Please log in to access this page",
          variant: "destructive",
        });
        return;
      }

      try {
        // Verify token with backend
        const response = await api.get('/auth/verify');
        console.log('Auth verification response:', response.data);
        setIsAuthenticated(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Auth verification failed:', error);
        setIsAuthenticated(false);
        setIsLoading(false);
        localStorage.removeItem('adminAuth');
        
        // Only show toast if there's an actual error, not just missing token
        if (error.response?.status !== 401) {
          toast({
            title: "Authentication Error",
            description: "Your session has expired. Please log in again.",
            variant: "destructive",
          });
        }
      }
    };

    checkAuth();
  }, [location.pathname, toast]); // Re-run when path changes

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/admin/login" state={{ from: location }} replace />;
};

export default ProtectedRoute; 