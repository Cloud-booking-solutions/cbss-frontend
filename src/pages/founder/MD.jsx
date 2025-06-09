import Layout from '../../components/Layout';

const MD = () => {
  return (
    <Layout>
      <div className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Managing Director</h1>
            <p className="text-xl text-black">Operations and Strategy</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="w-64 h-64 rounded-full overflow-hidden mx-auto mb-6">
                  <img
                    src="https://cloudbookingsolutions.com/img/md.jpg"
                    alt="Managing Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-black mb-2">Priya Deshmukh</h2>
                <p className="text-black font-semibold text-lg">Managing Director</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4">About Our MD</h3>

                <p className="text-lg leading-relaxed text-black">
                  <span className="font-bold">Priya Deshmukh</span> is the dynamic Managing Director of Cloud Booking Software Solutions,
                  where she oversees the company's global operations and drives strategic initiatives.
                  <span className="font-bold"> With a robust background in software development and project management,</span> she has been
                  instrumental in streamlining processes and enhancing productivity across the organization.
                </p>

                <p className="mt-3 text-lg leading-relaxed text-black">
                  She joined Cloud Booking Software Solutions <span className="font-bold">4 years ago</span> as a senior software engineer and
                  quickly rose through the ranks due to <span className="font-bold">her exceptional technical acumen and leadership skills.</span> 
                  As MD, she has <span className="font-bold">spearheaded numerous successful projects,</span> including the launch of the company’s 
                  flagship product, which has revolutionized the way businesses manage their operations.
                </p>

                <p className="mt-3 font-bold text-black">
                  Her dedication to fostering a culture of innovation and collaboration has been pivotal in attracting top talent and maintaining a high-performance team.
                </p>

                <p className="mt-3 text-lg leading-relaxed text-black">
                  Her leadership has not only driven the company’s growth but also ensured the delivery of high-quality solutions to clients worldwide.
                </p>

                <p className="mt-3 text-lg leading-relaxed text-black">
                  She holds <span className="font-bold">a Bachelor's degree in Information Technology.</span> Outside of work,
                  <span className="font-bold"> she is passionate about advocating for women in tech.</span>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MD;
