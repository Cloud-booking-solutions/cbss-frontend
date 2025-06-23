import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Calendar, ArrowLeft } from 'lucide-react';
import { getBlogById } from '@/utils/api';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(id);
        setBlog(data);
      } catch (err) {
        setError('Failed to load blog. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <p>Loading blog...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !blog) {
    return (
      <Layout>
        <div className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">{error || "The blog post you're looking for doesn't exist."}</p>
            <Link 
              to="/career/blogs" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/career/blogs" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
              <img 
                src={blog.image && blog.image.startsWith('/uploads/') ? `https://cbss-backend.onrender.com${blog.image}` : blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {blog.title}
              </h1>
              
              <div className="flex items-center text-gray-500 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-8 font-medium">
                  {blog.excerpt}
                </p>
                
                <div className="text-gray-700 leading-relaxed">
                  {blog.content.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="mb-4">
                        {paragraph.trim()}
                      </p>
                    )
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
