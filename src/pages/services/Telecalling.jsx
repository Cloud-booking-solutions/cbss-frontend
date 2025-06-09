import Layout from '../../components/Layout';

const Telecalling = () => {
  return (
    <Layout>
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Telecalling Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional telecalling services to boost your sales and customer engagement
            </p>
          </div>

          {/* First section - content left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Telecalling Solutions</h2>
              <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                With our outstanding chat support services and complete call center solutions, you can increase your lead conversion.
                Our professional agents use their knowledge to provide one-on-one engagement with your potential clients and answer
                their questions, therefore creating trust.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Being one of the finest and perhaps most <span className="font-bold">telecalling service providers</span>, we will surely help you
                achieve your objectives through our comprehensive package of <span className="font-bold">call center solutions</span>. Moreover,
                through our team of customer behaviour specialists, we will provide you with unrivalled <span className="font-bold">chat support services</span>{" "}
                and <span className="font-bold">call centre solutions</span> in India.
              </p>
              <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Furthermore, because they are designed with the most recent technology, the software we utilise for data input of call
                information and recording purposes are simple to use and browse. With years of experience as the leading{" "}
                <span className="font-bold">voice call service provider</span> and <span className="font-bold">call center service provider</span> in
                India, our skilled teams understand precisely what you want.
              </p>
            </div>
            <div className="h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://cloudbookingsolutions.com/img/2182513.webp"
                alt="Telecalling Support"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second section - image left, content right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://cloudbookingsolutions.com/img/WebsiteDevelopment.png"
                alt="Telecalling Strategy"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Targeted Approach</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use data-driven approaches to identify and target the right prospects, ensuring higher conversion rates and better ROI for your telecalling campaigns.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Market research surveys</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Appointment scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Customer satisfaction surveys</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Telecalling;
