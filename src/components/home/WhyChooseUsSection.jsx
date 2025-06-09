import { Link } from 'react-router-dom';
import { Award, Clock, Users, Lightbulb, Shield, Headphones } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Over 10+ years of experience delivering successful IT solutions across various industries.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We pride ourselves on meeting deadlines and delivering projects on time, every time.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Our skilled professionals work collaboratively to ensure the highest quality results.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Robust security measures integrated into every solution we develop.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: '24/7 customer support and maintenance to ensure smooth operations.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const stats = [
    { number: '1344+', label: 'Happy Clients' },
    { number: '2050+', label: 'Projects Completed' },
    { number: '1364+', label: 'Support Hours' },
    { number: '20+', label: 'Team Members' }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Cloud Booking?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results for your organization.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 hover:scale-105"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
