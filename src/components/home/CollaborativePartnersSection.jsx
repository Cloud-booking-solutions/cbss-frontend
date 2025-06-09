
const CollaborativePartnersSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Collaborative Industry Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with leading industry partners to provide comprehensive solutions and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="h-40 w-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
      <img src="https://cloudbookingsolutions.com/img/aadhar.png" alt="Aadhar Partner Logo" className="h-full object-contain" />
    </div>
   
  </div>

  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="h-40 w-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
      <img src="https://cloudbookingsolutions.com/img/dhan.png" alt="Dhan Partner Logo" className="h-full object-contain" />
    </div>
    
  </div>
</div>


      </div>
    </section>
  );
};

export default CollaborativePartnersSection;
