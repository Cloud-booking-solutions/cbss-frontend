
import Layout from '../components/Layout';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Cloud Booking Software Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the future of technology with innovative software solutions and exceptional service
            </p>
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Welcome to Cloud Booking Software Solutions</h2>
              </div>
              
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Cloud Booking Software Solutions a leading provider of comprehensive
            IT solutions designed to drive digital transformation and empower
            businesses to thrive in the modern era. With a strong focus on
            innovation, efficiency, and customer satisfaction, Cloud Booking
            Software Solutions deliver tailored technology solutions to meet the
            unique needs of our clients.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Cloud Booking Software Solutions, we understand that every
            organization has specific IT requirements, which is why Cloud
            Booking Software Solutions offer a wide range of services and
            expertise to cater to diverse industries and business sizes. Cloud
            Booking Software Solutions team of skilled professionals possesses
            deep knowledge and expertise in areas such as software development,
            cloud computing, cybersecurity, data analytics, infrastructure
            management, and more.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Cloud Booking Software Solutions are committed to delivering
            cutting-edge solutions that leverage the latest technologies and
            industry best practices. By staying ahead of emerging trends and
            advancements,Cloud Booking Software Solutions ensure that our
            clients benefit from the most innovative and effective IT solutions
            available. Our agile and collaborative approach allows us to adapt
            quickly to evolving business needs and deliver solutions that drive
            tangible results.
          </p>
            </div>
            <div className="h-96">
              <img
                src="https://cloudbookingsolutions.com/img/about-extra-2.svg"
                alt="Company Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="h-80 rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img
                src="https://cloudbookingsolutions.com/img/about-us-new.svg"
                alt="Mission"
                className="w-full h-full object-contain p-6"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
             <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Customer satisfaction is at the core of everything we do. Cloud
            Booking Software Solutions prioritize building strong and
            long-lasting relationships with our clients, understanding their
            unique challenges, and providing personalized support throughout
            their technology journey.Cloud Booking Software Solutions team of
            dedicated professionals is available to offer guidance, assistance,
            and ongoing maintenance to ensure that our clients' IT systems
            operate seamlessly and efficiently.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Cloud Booking Software Solutions take pride in our commitment to
            quality, reliability, and security. We adhere to stringent industry
            standards and best practices, employing robust security measures to
            protect our clients' data and systems. With our comprehensive IT
            solutions, businesses can streamline operations, enhance
            productivity, improve customer experiences, and gain a competitive
            edge in their respective industries.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] font-bold text-gray-800">
            Join us on this transformative technology journey and experience the
            power of our innovative IT solutions. Together, we can unlock the
            full potential of your organization and pave the way for success in
            the digital age.
          </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Eye className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To be the leading provider of innovative IT solutions, recognized for our technical excellence, customer-centric approach, and contribution to the digital transformation of businesses worldwide.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We envision a future where technology seamlessly integrates with business processes, enabling organizations to achieve unprecedented levels of efficiency, growth, and customer satisfaction.
              </p>
            </div>
            <div className="h-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://cloudbookingsolutions.com/img/milestone.jpg"
                alt="Vision"
                className="w-full h-full object-contain p-6"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-to-r from-gray-50 to-primary-50 rounded-xl p-8 mb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and define who we are as a company
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">We strive for excellence in every project, delivering high-quality solutions that exceed expectations.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">We believe in the power of teamwork and collaboration to achieve remarkable results.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">We embrace innovation and continuously explore new technologies to stay ahead.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
