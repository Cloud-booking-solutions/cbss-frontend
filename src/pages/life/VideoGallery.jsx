import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

const API_URL = 'https://cbss-backend.onrender.com';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${API_URL}/api/gallery/videos`);
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setVideos(data);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <Layout>
      <div className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Video Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our latest videos and stay updated with Cloud Booking Software Solutions
            </p>
          </div>

          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
              <p className="mt-4 text-gray-600">Loading videos...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600">Error: {error}</p>
            </div>
          )}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div
                  key={video._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-video">
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default VideoGallery;
