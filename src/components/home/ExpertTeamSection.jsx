import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ExpertTeamSection = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetchExperts();
  }, []);

  const fetchExperts = async () => {
    try {
      const response = await fetch('https://cbss-backend.onrender.com/api/team');
      if (response.ok) {
        const data = await response.json();
        // Filter only expert team members
        const expertMembers = data.filter(member => member.type === 'expert');
        setExperts(expertMembers);
      }
    } catch (error) {
      console.error('Failed to fetch expert team members:', error);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-black">Our Expert Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our experienced professionals who make innovation possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-transform duration-300 hover:scale-105 bg-white shadow-md"
            >
              <div className="aspect-square relative">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">{expert.name}</h3>
                <p className="text-blue-600">{expert.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTeamSection;
