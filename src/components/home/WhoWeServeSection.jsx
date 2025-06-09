
import { GraduationCap, Stethoscope, Building, Home, Wheat, Factory, Truck, ShoppingCart, Palette, UtensilsCrossed, Bug, Building2 } from 'lucide-react';

const WhoWeServeSection = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Comprehensive learning management systems and educational platforms for institutions.',
      
    },
    {
      icon: Stethoscope,
      title: 'Health Care & Pharma',
      description: 'HIPAA-compliant healthcare management systems and pharmaceutical solutions.',
      
    },
    {
      icon: Building,
      title: 'Banking & Financial',
      description: 'Secure financial solutions for banks, fintech companies, and financial service providers.',
     
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Property management and real estate CRM solutions for agencies and developers.',
     
    },
    {
      icon: Wheat,
      title: 'Agriculture Industry',
      description: 'Digital solutions for farm management, crop monitoring, and agricultural optimization.',
     
    },
    {
      icon: Factory,
      title: 'Manufacturing & Industrial',
      description: 'Industrial automation and manufacturing process optimization solutions.',
      
    },
    {
      icon: Truck,
      title: 'Transportation & Logistics',
      description: 'Fleet management and logistics optimization for transportation companies.',
     
    },
    {
      icon: ShoppingCart,
      title: 'FMCG & Retail',
      description: 'Retail management systems and e-commerce solutions for FMCG companies.',
    
    },
    {
      icon: Palette,
      title: 'Interior',
      description: 'Design management and project tracking solutions for interior design firms.',
     
    },
    {
      icon: UtensilsCrossed,
      title: 'Hotel & Restaurant',
      description: 'Hospitality management systems for hotels and restaurant operations.',
 
    },
    {
      icon: Bug,
      title: 'Pest Control',
      description: 'Management systems for pest control services and scheduling solutions.',
   
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Building2 className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Industries We Serve
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide specialized solutions across various industries, understanding unique challenges and delivering targeted results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{industry.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 font-semibold text-sm">{industry.stats}</span>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Dont see your industry listed? We work with businesses of all types and sizes.
          </p>
          <button className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105">
            Discuss Your Project
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default WhoWeServeSection;
