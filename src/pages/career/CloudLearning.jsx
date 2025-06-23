
import Layout from '../../components/Layout';
import { Clock, Users, Star, BookOpen, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudLearning = () => {
  const courseCategories = [
    {
      category: "Language's Course",
      courses: [
        {
          title: "C/C++ Language",
          description: "C and C++ programming languages, widely used in systems programming, software development, embedded systems, and game development. This course builds a strong foundation in C/C++ programming.",
        },
        {
          title: "Core & Adv. JAVA",
          description: "Master both Core and Advanced Java concepts, essential for web development, enterprise applications, and mobile apps. This course provides hands-on experience to build Java-based solutions.",
        },
        {
          title: "HTML & CSS Language",
          description: "Learn to build and style web pages using HTML & CSS. This course covers the fundamentals of front-end development, equipping students with design and layout techniques.",
        },
        {
          title: "SQL",
          description: "Understand database management with SQL. This course covers fundamental querying techniques, data manipulation, and database design, preparing you for real-world data handling.",
        },
      ]
    },
    {
      category: "Courses",
      courses: [
        {
          title: "MS Office Course",
          description: "As an MS Office course, Cloud Learning role is to provide comprehensive training on Microsoft Office applications, a suite of productivity tools widely used in various professional settings. Microsoft Office includes applications such as Word, Excel, PowerPoint, Outlook, and more. Our course aims to equip students with the necessary skills to effectively use these applications for various tasks, enhancing their productivity and efficiency.",
        },
        // {
        //   title: "Typing Course",
        //   description: "As a typing course, Cloud Learning role is to help students improve their typing skills, speed, and accuracy on a computer keyboard. Typing is an essential skill in the digital age, and Our course aims to make students proficient in touch typing, where they can type without looking at the keyboard.",
        // },
        // {
        //   title: "Data Entry Operating Course",
        //   description: "As a Data Entry Operating course, Cloud Learning role is to train individuals in the essential skills and techniques required to efficiently and accurately enter data into computer systems and databases. Data entry operators play a crucial role in various industries, ensuring that information is correctly recorded and organized for further analysis and decision-making.",
        // },
        {
          title: "Website Development",
          description: "As a Website Development course, Cloud Learning role is to equip students with the knowledge and skills necessary to build fully functional and interactive websites. Website development involves working with various programming languages, frameworks, and technologies to create websites that meet specific design and functionality requirements. Our course aims to provide students with a comprehensive understanding of both front-end and back-end web development, enabling them to create dynamic and user-friendly websites.",
        },
      ]
    },
    {
      category: "Technologies",
      courses: [
        // {
        //   title: "SAP",
        //   description: "As a SAP (Systems, Applications, and Products) course, Cloud Learning role is to provide students with a comprehensive understanding of SAP software and its applications in business and enterprise settings. SAP is a leading provider of business software solutions used by organizations to manage various aspects of their operations, such as finance, human resources, supply chain, customer relationship management (CRM), and more. Our course aims to equip students with the skills and knowledge needed to implement, configure, and work with SAP systems effectively.",
        // },
        {
          title: "Software Testing Course",
          description: "As a Software Testing course, Cloud learning role is to train students in the principles, techniques, and methodologies of software testing. Software testing is a critical phase in the software development lifecycle, ensuring that the software meets quality standards, functions as intended, and is free from defects. Our course aims to equip students with the skills necessary to identify and report issues in software products effectively.",
        },
        {
          title: "Full-Stack Development",
          description: "As a full-stack development course, Cloud Learning role is to provide students with a comprehensive understanding of both front-end and back-end web development, enabling them to build complete web applications from start to finish. Full-stack development involves working with both the client-side (front-end) and server-side (back-end) technologies, and Our course aims to equip students with the skills to be versatile and proficient in the entire web development process.",
        },
        {
          title: "Data Science & Analytics Course",
          description: "As a Data Science & Analytics course, Cloud Learning role is to provide students with the knowledge and skills necessary to work with data effectively, extract valuable insights, and make data-driven decisions. Data science and analytics have become integral parts of various industries, and Our course aims to equip students with the tools and techniques needed to succeed in this data-driven world.",
        },
      ]
    },
    {
      category: "Special Courses",
      courses: [
        {
          title: "Animation Course",
          description: "As an Animation course, Cloud Learning role is to provide students with a comprehensive understanding of animation principles, techniques, and tools used in the creation of various forms of animation, including 2D animation, 3D animation, and visual effects (VFX). Our course aims to nurture students' creativity and storytelling abilities while equipping them with the technical skills required to bring characters, objects, and scenes to life through animation.",
        },
        {
          title: "Web Designing Course",
          description: "As a Web Designing course, Cloud Learning role is to equip students with the knowledge and skills necessary to design visually appealing, user-friendly, and functional websites. Web design is a crucial aspect of creating engaging online experiences, and Our course aims to teach students the principles, tools, and techniques required to craft effective web designs.",
        },
        {
          title: "Graphic Designing Course",
          description: "As a Graphic Designing course, Cloud Learning role is to provide students with the knowledge and skills necessary to create visually captivating and impactful designs across various media. Graphic design is a crucial discipline in the fields of advertising, marketing, branding, and digital media, and Our course aims to nurture students' creativity while teaching them the technical aspects of design tools and principles.",
        },
        {
          title: "WordPress Website Course",
          description: "As a WordPress Website course, Cloud Learning role is to provide students with the knowledge and skills necessary to create, customize, and manage websites using the WordPress platform. WordPress is one of the most popular content management systems (CMS) globally, and Our course aims to empower students to build functional and visually appealing websites without the need for extensive coding knowledge.",
        },
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className="section-padding bg-gradient-to-br from-blue-50 to-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <BookOpen className="mr-4 text-primary-600" />
              Cloud Learning Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advance your career with our comprehensive online courses designed by industry experts
            </p>
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {courseCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
                <Award className="mr-3 text-primary-600" />
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.courses.map((course, courseIndex) => (
                  <div
                    key={courseIndex}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border-t-4 border-primary-500"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <Target className="mr-2 text-primary-600" />
                        {course.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {course.description}
                      </p>

                      <div className="flex flex-col gap-3">
                        <Link 
                          to="/contact"
                          onClick={scrollToTop}
                          className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-all font-medium text-center text-sm hover:shadow-lg"
                        >
                          Enroll Now
                        </Link>
                        {/* <button className="border border-primary-600 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-all font-medium text-sm">
                          View Details
                        </button> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Additional Benefits Section */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Why Choose Cloud Learning?</h2>
              <p className="text-primary-100 max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers with our expert-led courses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p className="text-primary-100">Learn from industry professionals with years of real-world experience</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certificates</h3>
                <p className="text-primary-100">Earn industry-recognized certificates upon course completion</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-primary-100">Join a supportive community of learners and professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CloudLearning;
