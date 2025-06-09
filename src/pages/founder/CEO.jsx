import Layout from '../../components/Layout';

const CEO = () => {
  return (
    <Layout>
      <div className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Chief Executive Officer</h1>
            <p className="text-xl text-gray-600">Leadership and Vision</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="w-64 h-64 rounded-full overflow-hidden mx-auto mb-6">
                  <img
                    src="https://cloudbookingsolutions.com/img/ceo12.jpg"
                    alt="CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Shweta Kute</h2>
                <p className="text-black font-semibold text-lg">Chief Executive Officer</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About Our CEO</h3>
                <p className="text-[17px] leading-relaxed text-black">
                  Shweta Kute is the driving force behind Cloud Booking Software Solutions, guiding the company as its CEO
                  with unparalleled expertise and vision. Under her leadership, the company has become a leader in digital
                  transformation, known for its innovative solutions and industry foresight.
                </p>
                <p className="mt-3 font-bold text-black">
                  With over 5 years of experience in the technology sector,
                </p>
                <p className="text-[17px] leading-relaxed text-black">
                  Shweta has a proven track record of driving growth and innovation. She has a unique ability to foresee
                  industry trends and leverage emerging technologies to create groundbreaking solutions.
                </p>
                <p className="mt-3 font-bold text-black">
                  Her strategic vision and commitment to excellence have earned the company numerous accolades, including the
                  prestigious Tech Excellence Award.
                </p>
                <p className="mt-3 font-bold text-black">
                  Shweta holds a BE in IT and is a sought-after speaker at industry conferences.
                </p>
                <p className="text-[17px] leading-relaxed text-black">
                  She is a respected thought leader, often sharing insights on digital transformation, leadership, and
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CEO;
