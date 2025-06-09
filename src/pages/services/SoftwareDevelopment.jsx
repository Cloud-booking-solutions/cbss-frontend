import Layout from '../../components/Layout';

const SoftwareDevelopment = () => {
  return (
    <Layout>
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Software and Web Application Development</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom software solutions tailored to your business needs and objectives
            </p>
          </div>

          {/* First section - content left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Software Development</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We develop custom software solutions that streamline your business processes, improve efficiency, and give you a competitive edge. Our experienced team works closely with you to understand your requirements and deliver solutions that exceed expectations.
              </p>
              <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                As one of India's reputed product development service companies and a well-known mobile application development company in Pune, we create applications and tools that are robust and scalable using the latest web technologies that are specifically tailored to your needs.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Due to our expertise as a mobile app development company in Pune, our developed apps are efficient, cost-effective, scalable and easily accessible. Our mobile app developers are proficient in creating models that fit your business perfectly.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                We also possess experts in <span className=" font-bold">android software development and iPhone app development.</span> These factors make Cloud Booking Solutions a top mobile app development company in Pune. We Are Expert in <span className=" font-bold">Customised Software Development</span>.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                The veteran experts of our product development and cloud application development services squad develop smooth and seamless applications that enable you to make informed business decisions through data-driven systems and enhance consumer engagement, thereby contributing to your company's growth.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/pwa.svg"
                alt="Custom Software Development Illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Second section - image left, content right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/Build-a-New-Product2.svg"
                alt="Advanced Technology for Development"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Technologies</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We leverage cutting-edge technologies and modern development frameworks to build scalable, secure, and maintainable software solutions that grow with your business.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">CMS Development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">ERP Development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">CRM Development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">HRMS Development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Cloud Application Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SoftwareDevelopment;
