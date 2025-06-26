import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('https://cbss-backend.onrender.com/api/service');
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      console.error('Failed to fetch services:', error);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:pl-32">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-black">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of IT solutions tailored to meet your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <Card 
              key={service._id} 
              className="group hover:shadow-lg transition-shadow duration-300 p-5 md:p-6 lg:p-7 w-full mx-auto"
            >
              {service.image && (
                <div className="aspect-video relative overflow-hidden rounded-md">
                  <img
                    src={service.image && service.image.startsWith('/uploads/') ? `https://cbss-backend.onrender.com${service.image}` : service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-md"
                  />
                </div>
              )}
              <CardHeader>
              <CardTitle className="text-xl font-bold text-black">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.features && service.features.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-900">Key Features:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature.title}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Link to="/services/website-development">
  <Button 
    variant="link" 
    className="mt-4 p-0 h-auto font-semibold text-primary hover:text-primary/80 flex items-center gap-2"
  >
    
    
  </Button>
</Link>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 