import Layout from '../../components/Layout';

const WebsiteDevelopment = () => {
  return (
    <Layout>
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Development</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create stunning, responsive websites that drive results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Website Development Services</h2>
              <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                A professional and efficient business or a project owner like you always looks for a top-rated website design and development company.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Cloud Booking Software Solutions a leading website development company in Pune that can create purposeful, timely, powerful, result-focused and measurable digital experiences for your website.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                To enhance your business's competitiveness, efficiency, and profitability. Something you can see for yourself and measure as well! As a reputed professional website development company in Pune, Cloud Booking Solutions offers result-driven web development services that assure guaranteed ROI to your business.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                As a <span className="font-bold">professional web development company in Pune</span>, we guarantee custom web development assistance in our service packages with <span className="font-bold">uncompromised affordability</span>, and for <span className="font-bold">one year no service charge applicable, 24/7 support, and annual website Maintenance contract.</span>
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/hero-image-5.svg"
                alt="Website Development"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/g_feature-web-development-3.svg"
                alt="Our Development Fields"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Development Fields</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We follow a comprehensive development process that ensures your website meets your business objectives and provides an excellent user experience. From initial consultation to launch and ongoing support, we're with you every step of the way.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Static Websites</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Dynamic Websites</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">E-commerce Websites</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Responsive Websites</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WebsiteDevelopment;
