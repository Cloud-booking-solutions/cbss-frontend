
import { Code, Globe, Smartphone, ShoppingCart, Phone, Settings, Star } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites that deliver exceptional user experiences across all devices.'
    },
    {
      icon: Settings,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that increase visibility and drive conversions.'
    },
    {
      icon: Code,
      title: 'Web Application',
      description: 'Custom web applications designed to meet your specific business requirements and drive growth.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solution',
      description: 'Complete e-commerce platforms that help you sell more online with enhanced user experience.'
    },
    {
      icon: Phone,
      title: 'Telecalling Support',
      description: 'Professional telecalling services to boost your sales and customer engagement.'
    },
    {
      icon: Smartphone,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed specifically for your business needs and processes.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Excellent Features We Provide
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of IT services designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
