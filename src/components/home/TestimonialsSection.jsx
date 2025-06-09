
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
  { id: 1, name: "Vaibhav Gaikwad", text: "I got Priya's contact number from Cloud Booking Software Solutions business profile. I consulted for business profile number update and website design. She consulted me very nicely and I finalised the deal and got website design in just 6 days that is very responsive and contact number updated in just 4 days.. I am looking forward for next service i.e. Digital Marketing. Highly recommend." },
  { id: 2, name: "Vinod Supekar", text: "I have created my business profile through Cloud Booking Software Solutions. One of the best service providers in Pune. Most recommended." },
  { id: 3, name: "Waarjurkar Classes", text: "I developed the website for my classes from Cloud Booking Software Solutions, and they really did their best. I am totally satisfied with their service. Thank you so much Cloud Booking Software Solutions and Team!" },
  { id: 4, name: "Sagar Pawar", text: "The best online service provider. I developed a website from Cloud Booking Software Solutions, and they made a very attractive and responsive website for my business." },
  // { id: 5, name: "Ankush Chaudhari", text: "I made a business profile and there was no update on my Google profile. They made their work very fast and on priority basis. Now they are doing very professional work. Happy with their service, highly recommended." },
];
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary-500 mr-3" />
                {/* <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div> */}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-primary-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
