import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Founder',
      dropdown: [
        { name: 'CEO', path: '/founder/ceo' },
        { name: 'MD', path: '/founder/md' }
      ]
    },
    {
      name: 'Projects and Industries',
      dropdown: [
        { name: 'Projects', path: '/projects' },
        { name: 'Industries', path: '/industries' }
      ]
    },
    {
      name: 'Services',
      dropdown: [
        { name: 'Website Development', path: '/services/website-development' },
        { name: 'Google My Business', path: '/services/google-business' },
        { name: 'SEO', path: '/services/seo' },
        { name: 'Software Development', path: '/services/software-development' },
        { name: 'Ecommerce Services', path: '/services/ecommerce' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'Telecalling Services', path: '/services/telecalling' },
        { name: 'Other Marketing', path: '/services/other-marketing' }
      ]
    },
    {
      name: 'Life@Cloud',
      dropdown: [
        { name: 'Photo Gallery', path: '/life/photos' },
        { name: 'Video Gallery', path: '/life/videos' },
        { name: 'Events & Celebrations', path: '/life/events' }
      ]
    },
    {
      name: 'Career Solutions',
      dropdown: [
        { name: 'Cloud Learning', path: '/career/learning' },
        { name: 'Blogs', path: '/career/blogs' },
        { name: 'Career Options', path: '/career/options' }
      ]
    },
    { name: 'Contact Us', path: '/contact' }
  ];

  const handleDropdownHover = (itemName) => {
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity" onClick={scrollToTop}>
              <div className="flex items-center space-x-3">
                <img
                  src="https://cloudbookingsolutions.com/img/cloudlogo-removebg-preview.png"
                  alt="Cloud Booking Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleDropdownHover(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.dropdown ? (
                    <div>
                      <button 
                        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50 animate-fade-in">
                          <div className="py-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 border-l-2 border-transparent hover:border-primary-500"
                                onClick={() => {
                                  handleDropdownLeave();
                                  scrollToTop();
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
                      onClick={scrollToTop}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-96 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                              scrollToTop();
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => {
                      setIsOpen(false);
                      scrollToTop();
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
