import Layout from '../../components/Layout';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBlogs } from '@/utils/api';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        // Only show published blogs
        const publishedBlogs = data.filter(blog => blog.status === 'Published');
        setBlogs(publishedBlogs);
      } catch (err) {
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <p>Loading blogs...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blogs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in technology and business
            </p>
          </div>

          {blogs.length === 0 ? (
            <div className="text-center text-gray-600">
              <p>No blogs published yet. Check back soon!</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                  key={blog._id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={blog.image && blog.image.startsWith('/uploads/') ? `https://cbss-backend.onrender.com${blog.image}` : blog.image}
                    alt={blog.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {blog.title}
                  </h2>

                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <Link
                      to={`/career/blogs/${blog._id}`}
                    className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group-hover:translate-x-1"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
