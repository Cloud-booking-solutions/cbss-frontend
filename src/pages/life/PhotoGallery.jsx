import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Modal from '../../components/ui/modal';

const API_URL = 'https://cbss-backend.onrender.com';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(`${API_URL}/api/gallery/images`);
        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }
        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        console.error('Error fetching photos:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <Layout>
      <div className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Glimpses of life at Cloud Booking Software Solutions
            </p>
          </div>

          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
              <p className="mt-4 text-gray-600">Loading photos...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600">Error: {error}</p>
            </div>
          )}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {photos.map((photo) => (
                <div
                  key={photo._id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                  onClick={() => handleImageClick(photo)}
                >
                  <div className="aspect-square relative">
                    <img
                      src={photo.imageUrl.startsWith('http') ? photo.imageUrl : `${API_URL}${photo.imageUrl}`}
                      alt={photo.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{photo.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
          <div className="p-4">
            <img
              src={selectedImage.imageUrl.startsWith('http') ? selectedImage.imageUrl : `${API_URL}${selectedImage.imageUrl}`}
              alt={selectedImage.title}
              className="w-full h-auto"
            />
            <h3 className="text-xl font-semibold mt-4">{selectedImage.title}</h3>
            <p className="text-gray-600 mt-2">{selectedImage.description}</p>
          </div>
        </Modal>
      )}
    </Layout>
  );
};

export default PhotoGallery;
