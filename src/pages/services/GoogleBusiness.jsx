import Layout from '../../components/Layout';

const GoogleBusiness = () => {
  return (
    <Layout>
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Google My Business Profile Handling</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimize your local presence and attract more customers with professional Google My Business management
            </p>
          </div>

          {/* First section - content left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Google My Business Management</h2>
              <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Google My Business is a free tool provided by Google that allows businesses to manage their online presence across various Google platforms.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                With Google My Business, businesses can manage important information about their business, such as their address, phone number, hours of operation, website URL, and more. They can also create posts, upload photos and videos, and respond to customer reviews.
              </p>
              <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Having a Google My Business listing can help businesses increase their visibility in local search results, build trust and credibility with potential customers through customer reviews, and provide important information to customers who are searching for their products or services.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/gmb-local-seo.svg"
                alt="Google Business Image 1"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Second section - image left, content right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/online-stock-management-consultant-2885231-2399509.png"
                alt="Google Business Image 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local SEO Benefits</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A well-optimized Google My Business profile significantly improves your local search visibility, helping customers find your business when they search for relevant services in your area.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Increased Visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Business Information Management</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Customer Reviews and Ratings</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Photos and Videos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GoogleBusiness;
