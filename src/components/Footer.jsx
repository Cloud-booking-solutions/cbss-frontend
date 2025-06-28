import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="ml-16 sm:ml-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-8 mx-auto" style={{maxWidth: '1200px'}}>
            {/* Company Info */}
            <div className="space-y-4">
             <div className="flex items-center space-x-3">
                  <img
                    src="https://cloudbookingsolutions.com/img/logo1.png"
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
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Services', path: '/services/website-development' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Contact', path: '/contact' },
                  { name: 'Log In', path: '/admin/login' }
                ].map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      to={path}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {name}
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
                  { name: 'Website Development', path: '/services/website-development' },
                  { name: 'Software Development', path: '/services/software-development' },
                  { name: 'Digital Marketing', path: '/services/digital-marketing' },
                  { name: 'Telecalling Services', path: '/services/telecalling' },
                  { name: 'Google Business', path: '/services/google-business' }
                ].map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      to={path}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  {/* <Mail className="w-5 h-5 text-primary-400" /> */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=cloudbookingsolutions@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    cloudbookingsolutions@gmail.com
                  </a>

                </div>
                <div className="flex items-center space-x-3">
                  {/* <Phone className="w-5 h-5 text-primary-400" /> */}
                  <div className="text-gray-300">
                    <a 
                      href="tel:+918692805267" 
                      className="hover:text-primary-400 transition-colors duration-200"
                    >
                      Phone 1: +91 8692805267
                    </a>
                    <br />
                    <a 
                      href="tel:+919860302372" 
                      className="hover:text-primary-400 transition-colors duration-200"
                    >
                      Phone 2: +91 9860302372
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {/* <MapPin className="w-5 h-5 text-primary-400" /> */}
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Gate+No:02,+D4+Building,+Sakal+Nagar,+Aundh,+Pune-411007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    Gate No:02, D4 Building, Sakal Nagar, Aundh, Pune-411007
                  </a>
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
      </div>
    </footer>
  );
};

export default Footer;
