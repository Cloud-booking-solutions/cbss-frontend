import Layout from '../../components/Layout';

const DigitalMarketing = () => {
  return (
    <Layout>
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Marketing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Grow your business with data-driven digital marketing strategies
            </p>
          </div>

          {/* First section - content left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
            <h3 className="font-bold text-xl lg:text-2xl text-black">A. Branding</h3>
              <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                A branding and digital marketing agency can enable your company to shape an impressive perception with easy recall urging the audience to connect and engage with your brand. As a reputed branding agency in Pune, we always strive to reach the extra mile for powering up your brand value in the market.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                We are a creative branding agency with experience and expertise in combining various branding aspects <span className="font-bold">such as logo, design, mission statement, and theme to shape an impactful branding strategy</span> for our clients. Our brand management services include creating <span className="font-bold">brand identity, brand guidelines, brand assets, brand architecture and brand collaterals</span>.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Through powerful storytelling, awe-inspiring creativity and intelligent communication, we enable your brand to build an unforgettable place in the minds of your customers. Our highly innovative branding services in Pune establish brand reputation without compromising the key requirements of our targeted clients’ audience base.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Generates leads: By attracting more organic traffic to your website, you can also generate more leads. SEO can help you attract people who are actively searching for products or services similar to yours, making them more likely to convert into customers.
              </p>

              <br />
              <h3 className="font-bold text-xl lg:text-2xl text-black">B. Social Media Marketing</h3>
              <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                As a leading social media marketing agency in India, we strive to build a solid competitive position for your online presence on <span className="font-bold">top social media platforms like Instagram, Facebook, Youtube and Linkedin</span>.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Through our <span className="font-bold">experience as a leading social media marketing agency in Pune</span>, we have developed a team of strategic-thinking digital marketing specialists that believe in empowering brands and assisting businesses in growing by using digital power.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                When you join us for your digital social media marketing optimization, you will leverage the latest social media marketing services and next-gen tools like Brand24, Semrush, and Social Mention.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/dm.png"
                alt="Digital Marketing Strategy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Second section - image left, content right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/iconfinder-social-media-work-4341270_120574.png"
                alt="Social Media Campaign"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Approach</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We develop customized digital marketing strategies based on your business goals, target audience, and industry. Our data-driven approach ensures measurable results and continuous optimization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Organic Social Media Marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Paid Social Media Advertising</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Influencer Marketing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DigitalMarketing;
