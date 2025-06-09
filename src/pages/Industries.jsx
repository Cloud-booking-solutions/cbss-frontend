
import Layout from '../components/Layout';
import { GraduationCap, Stethoscope, Building, Home, Wheat, Factory, Truck, ShoppingCart, Palette, UtensilsCrossed, Bug, Building2 } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      id: 1,
      name: "Education",
      icon: GraduationCap,
      description: "We bring innovation to education by creating engaging materials and intuitive e-learning solutions. Empowering educators and learners alike.",
      features: ["Student Portal", "Course Management", "Online Learning", "Assessment Tools"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "Health Care & Pharma",
      icon: Stethoscope,
      description: "We support the healthcare and pharma industry with innovative solutions that enhance patient care and streamline processes.",
      features: ["Patient Management", "Appointment Booking", "Medical Records", "Telemedicine"],
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      name: "Financial",
      icon: Building,
      description: "We empower the banking and financial sector with cutting-edge solutions that enhance efficiency, security, and customer engagement.",
      features: ["Online Banking", "Payment Processing", "Risk Management", "Compliance Tools"],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      name: "Real Estate",
      icon: Home,
      description: "We elevate the real estate industry with tailored solutions that showcase properties and drive engagement.",
      features: ["Property Listings", "Virtual Tours", "Client Management", "Document Management"],
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      name: "Agriculture Industry",
      icon: Wheat,
      description: "We support the agriculture industry with innovative solutions that enhance productivity and sustainability. From smart technologies to streamlined processes.",
      features: ["Farm Management", "Crop Monitoring", "Weather Analytics", "Supply Chain"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 6,
      name: "Manufacturing & Industrial",
      icon: Factory,
      description: "We drive innovation in the manufacturing and industrial sectors with cutting-edge solutions that enhance efficiency and productivity.",
      features: ["Process Automation", "Quality Control", "Inventory Management", "Production Planning"],
      color: "from-gray-500 to-gray-600"
    },
    {
      id: 7,
      name: "Transportation & Logistics",
      icon: Truck,
      description: "We drive efficiency in transportation and logistics with tailored solutions that streamline operations and optimize workflows.",
      features: ["Fleet Tracking", "Route Optimization", "Delivery Management", "Driver Analytics"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 8,
      name: "Retail",
      icon: ShoppingCart,
      description: "We serve the FMCG and retail industries by delivering creative, data-driven solutions that enhance brand visibility and customer engagement.",
      features: ["Inventory Management", "POS Systems", "Customer Analytics", "Supply Chain"],
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 9,
      name: "Interior",
      icon: Palette,
      description: "Design management and project tracking solutions for interior design firms and creative professionals.",
      features: ["Project Management", "Design Portfolio", "Client Communication", "Resource Planning"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 10,
      name: "Hotel & Restaurant",
      icon: UtensilsCrossed,
      description: "Hospitality management systems for hotels and restaurant operations to enhance customer experience.",
      features: ["Booking System", "POS Integration", "Customer Reviews", "Staff Management"],
      color: "from-red-500 to-red-600"
    },
    {
      id: 11,
      name: "Pest Control",
      icon: Bug,
      description: "Management systems for pest control services and scheduling solutions to optimize service delivery.",
      features: ["Service Scheduling", "Customer Management", "Treatment Tracking", "Mobile App"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <Layout>
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="w-10 h-10 text-primary-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Industries We Serve</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering specialized solutions across diverse industries with deep domain expertise and innovative technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-2">
                    {industry.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Industries;
