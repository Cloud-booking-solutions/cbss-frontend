import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const InternsSection = () => {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    fetchInterns();
  }, []);

  const fetchInterns = async () => {
    try {
      const response = await fetch('https://cbss-backend.onrender.com/api/team');
      if (response.ok) {
        const data = await response.json();
        // Filter only intern team members
        const internMembers = data.filter(member => member.type === 'intern');
        setInterns(internMembers);
      }
    } catch (error) {
      console.error('Failed to fetch interns:', error);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-black">Our Interns</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our talented interns who bring fresh perspectives and enthusiasm to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interns.map((intern, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-transform duration-300 hover:scale-105 bg-white shadow-md"
            >
              <div className="aspect-square relative">
                <img
                  src={intern.image}
                  alt={intern.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">{intern.name}</h3>
                <p className="text-blue-600">{intern.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternsSection;
