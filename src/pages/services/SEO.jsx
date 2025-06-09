import Layout from '../../components/Layout';

const SEO = () => {
  return (
    <Layout>
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Search Engine Optimization</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boost your online visibility and drive organic traffic with our comprehensive SEO services
            </p>
          </div>

          {/* First section - content left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional SEO Services</h2>
              <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                <span className=" font-bold">SEO stands for Search Engine Optimization </span>, which is the practice of optimizing a website to improve its visibility and ranking in search engine results pages. SEO involves optimizing the website's content, structure, and other technical aspects to make it more appealing to search engines and increase its chances of ranking higher in search results.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                SEO is important for improving your business because it can help you <span className="font-bold">attract more organic traffic to your website, generate leads, and increase sales</span>. Here are some specific ways that SEO can benefit your business:
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                <span className=" font-bold">Increases website traffic: </span>By optimizing your website for search engines, you can attract more organic traffic to your website. This can increase your brand visibility and help you reach more potential customers.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Generates leads: By attracting more organic traffic to your website, you can also generate more leads. SEO can help you attract people who are actively searching for products or services similar to yours, making them more likely to convert into customers.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/rethinkdigital-website-seo.svg"
                alt="SEO Service Illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Second section - image left, content right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/seo-company.svg"
                alt="SEO Company Illustration"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Long-term Results</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our SEO strategies focus on sustainable, long-term growth. We continuously monitor and optimize your website's performance to maintain and improve your search engine rankings.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">On-page SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Off-page SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Technical SEO</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SEO;
