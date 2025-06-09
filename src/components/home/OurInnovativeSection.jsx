import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurInnovativeSection = () => {
  const projects = [
    { id: 1, name: "SPMM", link: "https://spmmtalegaon.in/", image: "https://cloudbookingsolutions.com/img/project/new/spmm.jpg" },
    { id: 2, name: "Aarvi Event", link: "https://digi-cloud-menu.click/Aarvievent/", image: "https://cloudbookingsolutions.com/img/project/new/aarvievent.jpg" },
    { id: 3, name: "Sai-Malhar Caterers", link: "https://saimalharcaterers.com/", image: "https://cloudbookingsolutions.com/img/project/new/saimalhar.jpg" },
    { id: 4, name: "Rudra Estate", link: "https://www.rudraestate.in/", image: "https://cloudbookingsolutions.com/img/project/new/rudra.jpg" },
    { id: 5, name: "Square 7 Architects", link: "https://square7architects.com/", image: "https://cloudbookingsolutions.com/img/project/new/squarre7.jpg" },
    { id: 6, name: "Bansode Civil Engineer", link: "https://bansodecivilengineer.co.in/", image: "https://cloudbookingsolutions.com/img/project/new/bansode.jpg" },
    { id: 7, name: "JJ Event", link: "https://jjevent.co.in/", image: "https://cloudbookingsolutions.com/img/project/new/jjevent.jpg" },
    { id: 8, name: "APure Joy", link: "https://apurejoy.com/", image: "https://cloudbookingsolutions.com/img/project/new/apurejoy.jpg" },
    { id: 9, name: "Chetak Tours & Travels", link: "https://chetaktoursandtravels.in/", image: "https://cloudbookingsolutions.com/img/project/new/chetak.jpg" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Innovative Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our latest innovative solutions and successful project implementations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group block"
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                  <ExternalLink className="w-5 h-5 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center text-primary-600 font-medium">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 hover:scale-105"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurInnovativeSection;
