import Layout from '../../components/Layout';

const Ecommerce = () => {
  return (
    <Layout>
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Ecommerce Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build and grow your online store with our comprehensive ecommerce solutions
            </p>
          </div>

          {/* First section - content left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Ecommerce Solutions</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From startup to enterprise, we provide end-to-end ecommerce solutions that help you sell more online. Our platforms are designed for performance, scalability, and user experience.
              </p>
              <p className="mt-5 lg:mt-14 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                E- Commerce development company Cloud Booking's years of industry experience makes us capable enough to handle various aspects related to your online business store, enabling you to reach out to the global audience.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Cloud Booking Team create and implement end-to-end e-commerce solutions like <span className="font-bold">E-commerce website, web app, android app, iphone app, software</span> that are integrated with your business website impeccably. We are committed for 100% client satisfaction.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                E-commerce development involves the creation, design, and implementation of online platforms that enable businesses to sell products or services over the internet. It encompasses various aspects, including website or application development, product management, secure payment processing, inventory management, and customer relationship management.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/ecommerce-2.png"
                alt="Ecommerce Solutions"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Second section - image left, content right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/ecommerce-1.png"
                alt="Advanced Ecommerce Features"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Features</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our ecommerce solutions include advanced features like inventory management, multi-vendor support, mobile optimization, and comprehensive analytics to help you manage and grow your online business.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Online Store Development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Mobile Commerce (m-commerce) Development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">B2C (Business-to-Consumer) E-commerce Development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">B2B (Business-to-Business) E-commerce Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ecommerce;
