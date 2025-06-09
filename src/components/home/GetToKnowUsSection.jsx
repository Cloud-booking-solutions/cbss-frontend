
import { Users, Target, Award, Zap } from 'lucide-react';

const GetToKnowUsSection = () => {
  const highlights = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience in technology and business solutions.'
    },
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'We prioritize understanding your unique needs to deliver customized solutions.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Every project undergoes rigorous testing to ensure the highest quality standards.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'We use agile methodologies to deliver projects efficiently without compromising quality.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Get to Know Us
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Cloud Booking Software Solutions is a leading IT company dedicated to transforming businesses 
              through innovative technology solutions. We specialize in creating custom software, 
              web applications, and digital marketing strategies that drive growth and efficiency.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over a years of experience, we've helped hundreds of businesses across various industries 
              achieve their digital transformation goals. Our team of experts combines technical expertise 
              with business acumen to deliver solutions that truly make a difference.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
              alt="Team working on technology solutions" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">10+</span>
            </div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">Years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetToKnowUsSection;
