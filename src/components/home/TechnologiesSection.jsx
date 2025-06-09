
import { useState } from 'react';
import { Code2, Palette, Zap, Layout, Component, Database } from 'lucide-react';

const TechnologiesSection = () => {
  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', icon: Layout },
        { name: 'CSS3', icon: Palette },
        { name: 'JavaScript', icon: Zap },
        { name: 'Bootstrap', icon: Component },
        { name: 'React', icon: Code2 },
        { name: 'PHP', icon: Database }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('Frontend');

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Code2 className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Technologies We Use
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and tools to deliver robust, scalable, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies
            .find(tech => tech.category === activeCategory)
            ?.items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
