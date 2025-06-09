import { Link } from 'react-router-dom';

const CustomerCommunitySection = () => {
  const customers = [
    { id: 1, img: "https://cloudbookingsolutions.com/img/clients/12.jpg" },
    { id: 2, img: "https://cloudbookingsolutions.com/img/clients/2.jpg" },
    { id: 3, img: "https://cloudbookingsolutions.com/img/clients/3.jpg" },
    { id: 4, img: "https://cloudbookingsolutions.com/img/clients/4.jpg" },
    { id: 5, img: "https://cloudbookingsolutions.com/img/clients/6.jpg" },
    { id: 6, img: "https://cloudbookingsolutions.com/img/clients/10.jpg" },
    { id: 7, img: "https://cloudbookingsolutions.com/img/clients/1.jpg" },
    { id: 8, img: "https://cloudbookingsolutions.com/img/clients/11.jpg" },
    { id: 9, img: "https://cloudbookingsolutions.com/img/clients/13.jpg" },
    { id: 10, img: "https://cloudbookingsolutions.com/img/clients/14.jpg" },
    { id: 11, img: "https://cloudbookingsolutions.com/img/clients/16.jpg" },
    { id: 12, img: "https://cloudbookingsolutions.com/img/clients/17.jpg" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Customer Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with amazing companies across various industries who trust us with their technology needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {customers.map((customer) => (
            <div key={customer.id} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              <div className="aspect-square bg-white rounded-lg shadow-sm flex items-center justify-center">
                <img
                  src={customer.img}
                  alt="Customer logo"
                  className="object-contain h-full w-full p-4"
                />
              </div>
            </div>
          ))}
        </div>

       <div className="mt-16 text-center bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          Become part of our customer community and experience the difference that quality technology solutions can make for your business.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300"
        >
          Get Started Today
        </Link>
      </div>
      </div>
    </section>
  );
};

export default CustomerCommunitySection;
