
import Layout from '../../components/Layout';
import { Calendar } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Annual Company Retreat",
      date: "March 2024",
      description: "Team building activities and strategic planning",
      image: "Event Image 1"
    },
    {
      id: 2,
      title: "Holiday Celebration",
      date: "December 2023",
      description: "Year-end party and awards ceremony",
      image: "Event Image 2"
    },
    {
      id: 3,
      title: "Tech Conference 2023",
      date: "November 2023",
      description: "Latest technology trends and innovations",
      image: "Event Image 3"
    },
    {
      id: 4,
      title: "Birthday Celebrations",
      date: "October 2023",
      description: "Monthly birthday celebration for team members",
      image: "Event Image 4"
    },
    {
      id: 5,
      title: "Product Launch Event",
      date: "September 2023",
      description: "Launch of our new software solution",
      image: "Event Image 5"
    },
    {
      id: 6,
      title: "Team Outing",
      date: "August 2023",
      description: "Fun day out with the entire team",
      image: "Event Image 6"
    }
  ];

  return (
    <Layout>
      <div className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Events & Celebrations</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating milestones and creating memories together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">{event.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-primary-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
