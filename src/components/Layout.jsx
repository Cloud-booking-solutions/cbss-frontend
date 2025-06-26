import { useState } from 'react';
import Navbar from './Navbar';
import SocialSidebar from './SocialSidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <Navbar />
      <SocialSidebar />
      <main className="pt-16 ml-8 sm:ml-0">
        {children}
      </main>
      <div className="-ml-8 sm:ml-0">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
