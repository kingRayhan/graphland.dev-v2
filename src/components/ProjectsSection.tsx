import { Project } from "@/common/graphql-models/graphql";

type UIProject = Project & {
  client?: string;
  technologies?: string[];
  completionDate?: string;
  category?: string;
  featured?: boolean;
};

const mockProjects: UIProject[] = [
  {
    _id: "1",
    _type: "project",
    title: "FinTech Dashboard",
    bodyRaw: null,
    cover: {
      asset: {
        url: "/api/placeholder/800/600"
      }
    },
    client: "SecureBank",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    completionDate: "2024-01-15",
    category: "Web Application",
    featured: true
  },
  {
    _id: "2",
    _type: "project",
    title: "Healthcare Mobile App",
    bodyRaw: null,
    cover: {
      asset: {
        url: "/api/placeholder/800/600"
      }
    },
    client: "MedCare Solutions",
    technologies: ["React Native", "Node.js", "MongoDB"],
    completionDate: "2024-02-28",
    category: "Mobile App",
    featured: true
  },
  {
    _id: "3",
    _type: "project",
    title: "E-Learning Platform",
    bodyRaw: null,
    cover: {
      asset: {
        url: "/api/placeholder/800/600"
      }
    },
    client: "EduTech Inc",
    technologies: ["Next.js", "GraphQL", "PostgreSQL"],
    completionDate: "2024-03-20",
    category: "Web Application",
    featured: true
  },
  {
    _id: "4",
    _type: "project",
    title: "Inventory Management System",
    bodyRaw: null,
    cover: {
      asset: {
        url: "/api/placeholder/800/600"
      }
    },
    client: "LogiCorp",
    technologies: ["Vue.js", "Python", "MongoDB"],
    completionDate: "2024-04-10",
    category: "Desktop Application",
    featured: false
  },
  {
    _id: "5",
    _type: "project",
    title: "Social Media Analytics",
    bodyRaw: null,
    cover: {
      asset: {
        url: "/api/placeholder/800/600"
      }
    },
    client: "DataViz Pro",
    technologies: ["React", "D3.js", "Node.js"],
    completionDate: "2024-05-15",
    category: "Web Application",
    featured: false
  },
  {
    _id: "6",
    _type: "project",
    title: "Real Estate Platform",
    bodyRaw: null,
    cover: {
      asset: {
        url: "/api/placeholder/800/600"
      }
    },
    client: "PropertyHub",
    technologies: ["Angular", "C#", "SQL Server"],
    completionDate: "2024-06-30",
    category: "Web Application",
    featured: false
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-32 lg:py-40 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Explore some of our recent work that demonstrates our commitment to delivering 
            exceptional digital solutions across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-20">
          {mockProjects.map((project, index) => (
            <div 
              key={project._id} 
              className={`group cursor-pointer ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="relative bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-neutral-800 hover:shadow-2xl">
                {/* Project Image */}
                <div className={`relative overflow-hidden ${
                  index === 0 ? 'aspect-[2/1]' : 'aspect-[4/3]'
                }`}>
                  <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center">
                    <div className="text-neutral-300 text-center">
                      <div className={`mx-auto mb-4 bg-neutral-600 rounded-2xl flex items-center justify-center ${
                        index === 0 ? 'w-24 h-24' : 'w-16 h-16'
                      }`}>
                        <svg className={`${index === 0 ? 'w-12 h-12' : 'w-8 h-8'}`} fill="currentColor" viewBox="0 0 20 20">
                          {project.category === 'Mobile App' && (
                            <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4z" clipRule="evenodd" />
                          )}
                          {project.category === 'Web Application' && (
                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                          )}
                          {project.category === 'Desktop Application' && (
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1h-4l-1 2h2a1 1 0 110 2H7a1 1 0 110-2h2l-1-2H4a1 1 0 01-1-1V4zm13 1H4v6h12V5z" clipRule="evenodd" />
                          )}
                        </svg>
                      </div>
                      <p className={`font-medium ${index === 0 ? 'text-lg' : 'text-base'}`}>
                        {project.title}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <button className="px-6 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-200 transition-colors duration-200">
                        View Case Study
                      </button>
                      <button className="px-6 py-3 border border-neutral-400/40 text-white rounded-full font-medium hover:bg-white/10 transition-colors duration-200">
                        Live Preview
                      </button>
                    </div>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full border border-neutral-700">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-medium rounded-full">
                      {project.category ?? 'Project'}
                    </span>
                    <span className="text-neutral-400 text-sm">
                      {project.completionDate ? new Date(project.completionDate).getFullYear() : ''}
                    </span>
                  </div>
                  
                  <h3 className={`font-bold text-neutral-100 mb-2 group-hover:text-neutral-300 transition-colors duration-300 ${
                    index === 0 ? 'text-2xl' : 'text-xl'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm mb-4">
                    Client: <span className="font-medium text-neutral-200">{project.client ?? '—'}</span>
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {(project.technologies ?? []).slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies && project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-neutral-800 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center border border-neutral-700">
                  <svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-neutral-100 mb-4">
            See More of Our Work
          </h3>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Explore our complete portfolio to see how we&apos;ve helped businesses 
            across different industries achieve their digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-neutral-900 rounded-full font-medium text-lg hover:bg-neutral-200 transition-all duration-200 hover:shadow-lg hover:scale-105">
              View All Projects
            </button>
            <button className="px-8 py-4 border border-neutral-700 text-neutral-100 rounded-full font-medium text-lg hover:border-neutral-400 hover:bg-neutral-900 transition-all duration-200">
              Download Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
