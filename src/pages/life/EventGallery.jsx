import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Modal from '../../components/ui/modal';

const API_URL = 'https://cbss-backend.onrender.com';

const EventGallery = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_URL}/api/gallery/events`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading events...</div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-500">Error: {error}</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Events & Celebrations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              onClick={() => handleEventClick(event)}
            >
              <div className="relative h-48">
                <img
                  src={event.imageUrl.startsWith('http') ? event.imageUrl : `${API_URL}${event.imageUrl}`}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-black">{event.title}</h3>
                <p className="text-black">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        {events.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No events available at the moment.
          </div>
        )}
      </div>

      {selectedEvent && (
        <Modal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
          <div className="p-4">
            <img
              src={selectedEvent.imageUrl.startsWith('http') ? selectedEvent.imageUrl : `${API_URL}${selectedEvent.imageUrl}`}
              alt={selectedEvent.title}
              className="w-full h-auto"
            />
            <h3 className="text-xl font-semibold mt-4">{selectedEvent.title}</h3>
            <p className="text-gray-600 mt-2">{selectedEvent.description}</p>
          </div>
        </Modal>
      )}
    </Layout>
  );
};

export default EventGallery; 