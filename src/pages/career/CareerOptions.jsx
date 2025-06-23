import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from '../../components/Layout';

const CareerOptions = () => {
  const [careerOptions, setCareerOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCareerOptions();
  }, []);

  const fetchCareerOptions = async () => {
    try {
      const response = await fetch('https://cbss-backend.onrender.com/api/career');
      if (!response.ok) {
        throw new Error('Failed to fetch career options');
      }
      const data = await response.json();
      setCareerOptions(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="section-padding bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            Loading career options...
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="section-padding bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center text-red-600">
            Error: {error}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="section-padding bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Career Opportunities
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our job roles and see where you fit best.
            </p>
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-10">
            {careerOptions.map((job) => (
              <div
                key={job._id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-l-4 border-primary-500"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h2>
                <p className="text-gray-700 mb-4">{job.description}</p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Requirements:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  {job.requirements?.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 mb-4">
                  {job.duration && (
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                      Duration: {job.duration}
                    </span>
                  )}
                  {job.price && (
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                      Price: ₹{job.price}
                    </span>
                  )}
                </div>

                <Link
                  to="/career/apply"
                  className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-md transition duration-300"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CareerOptions;
