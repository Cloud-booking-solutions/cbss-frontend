import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import CEO from "./pages/founder/CEO";
import MD from "./pages/founder/MD";
import Projects from "./pages/Projects";
import Industries from "./pages/Industries";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import GoogleBusiness from "./pages/services/GoogleBusiness";
import SEO from "./pages/services/SEO";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import Ecommerce from "./pages/services/Ecommerce";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import Telecalling from "./pages/services/Telecalling";
import OtherMarketing from "./pages/services/OtherMarketing";
import PhotoGallery from "./pages/life/PhotoGallery";
import VideoGallery from "./pages/life/VideoGallery";
import EventGallery from "./pages/life/EventGallery";
import CloudLearning from "./pages/career/CloudLearning";
import Blogs from "./pages/career/Blogs";
import BlogDetail from "./pages/career/BlogDetail";
import CareerOptions from "./pages/career/CareerOptions";
import Contact from "./pages/Contact";
import Login from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import GalleryManagement from "./pages/admin/gallery/GalleryManagement";
import CareerManagement from "./pages/admin/career/CareerManagement";
import ServicesManagement from "./pages/admin/services/ServicesManagement";
import TeamManagement from "./pages/admin/team/TeamManagement";
import BlogManagement from "./pages/admin/BlogManagement";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "@/components/layouts/AdminLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder/ceo" element={<CEO />} />
          <Route path="/founder/md" element={<MD />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/google-business" element={<GoogleBusiness />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/telecalling" element={<Telecalling />} />
          <Route path="/services/other-marketing" element={<OtherMarketing />} />
          <Route path="/life/photos" element={<PhotoGallery />} />
          <Route path="/life/videos" element={<VideoGallery />} />
          <Route path="/life/events" element={<EventGallery />} />
          <Route path="/career/learning" element={<CloudLearning />} />
          <Route path="/career/blogs" element={<Blogs />} />
          <Route path="/career/blogs/:id" element={<BlogDetail />} />
          <Route path="/career/options" element={<CareerOptions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/gallery" element={
            <ProtectedRoute>
              <AdminLayout>
                <GalleryManagement />
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/blog" element={
            <ProtectedRoute>
              <AdminLayout>
                <BlogManagement />
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/career" element={
            <ProtectedRoute>
              <AdminLayout>
                <CareerManagement />
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/services" element={
            <ProtectedRoute>
              <AdminLayout>
                <ServicesManagement />
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/team" element={
            <ProtectedRoute>
              <AdminLayout>
                <TeamManagement />
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
