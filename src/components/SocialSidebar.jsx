import { Facebook, Instagram, Linkedin, Twitter, Youtube, Phone } from 'lucide-react';

const SocialSidebar = () => {
  const socialLinks = [
    { icon: Phone, href: 'tel:8692805267', label: 'Call Us' },
    { icon: Facebook, href: 'https://www.facebook.com/people/Cloud-Booking-Software-Solutions-Pune/100075879862225/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/cloudbookingsolutions/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/cloud-booking-software-solutions-25422a234/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/software166852', label: 'Twitter' },
    { icon: Youtube, href: 'https://www.youtube.com/@cloudbookingsolutions5853/featured', label: 'YouTube' }
  ];

  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.925 3.688"/>
    </svg>
  );

  return (
    <div className="fixed left-1 top-1/2 transform -translate-y-1/2 z-40 flex sm:block" style={{maxWidth: 'fit-content'}}>
      <div className="flex flex-col space-y-2">
        <a
          href="https://wa.me/8692805267"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
          <span className="absolute left-8 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            WhatsApp
          </span>
        </a>
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110 group"
            aria-label={label}
          >
            <Icon className="w-3 h-3" />
            <span className="absolute left-8 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar;
