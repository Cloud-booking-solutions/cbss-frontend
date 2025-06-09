import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
           <div className="flex items-center space-x-3">
                <img
                  src="https://cloudbookingsolutions.com/img/cloudlogo-removebg-preview.png"
                  alt="Cloud Booking Logo"
                  className="w-28 h-28 object-contain"
                />
              </div>
            <p className="text-gray-300 text-sm">
              Leading IT solutions provider specializing in software development, digital marketing, and business optimization services.
            </p>
            <div className="flex space-x-4">
  {[
    { icon: Facebook, url: "https://www.facebook.com/people/Cloud-Booking-Software-Solutions-Pune/100075879862225/" },
    { icon: Instagram, url: "https://www.instagram.com/cloudbookingsolutions/" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/cloud-booking-software-solutions-25422a234/" },
    { icon: Twitter, url: "https://twitter.com/software166852" },
    { icon: Youtube, url: "https://www.youtube.com/@cloudbookingsolutions5853/featured" },
  ].map(({ icon: Icon, url }, index) => (
    <a
      key={index}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
    >
      <Icon className="w-4 h-4 text-white" />
    </a>
  ))}
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact', 'Log In'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Log In' ? '/admin/login' : `/${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Website Development',
                'Software Development',
                'Digital Marketing',
                'SEO Services',
                'Ecommerce Solutions'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
         <div>
  <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
  <div className="space-y-3">
    <div className="flex items-center space-x-3">
      {/* <Mail className="w-100 h-100 text-primary-400" /> */}
      <span className="text-gray-300">cloudbookingsolutions@gmail.com</span>
    </div>
    <div className="flex items-center space-x-3">
      {/* <Phone className="w-6 h-6 text-primary-400" /> */}
      <span className="text-gray-300">
        Phone 1: +91 8692805267<br />Phone 2: +91 9860302372
      </span>
    </div>
    <div className="flex items-center space-x-3">
      {/* <MapPin className="w-6 h-6 text-primary-400" /> */}
      <span className="text-gray-300">Gate No:02, D4 Building, Sakal Nagar, Aundh, Pune-411007</span>
    </div>
  </div>
</div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
          © Cloud Booking Software Solutions. All Rights Reserved<br></br>
          Designed by Cloud Booking Software Solutions & Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
