import { Service } from "@/common/graphql-models/graphql";

// Mock data for now - will be replaced with actual GraphQL query later
const mockServices: Service[] = [
  {
    _id: "1",
    _type: "service",
    title: "Website Development",
    bodyRaw: null,
    cover: {
      asset: {
        url: "/api/placeholder/600/400"
      }
    },
    steps: [
      { name: "Discovery & Planning", body: "We analyze your requirements and create a detailed project roadmap." },
      { name: "Design & Prototyping", body: "Creating wireframes and interactive prototypes for your approval." },
      { name: "Development", body: "Building your website with modern technologies and best practices." },
      { name: "Testing & Launch", body: "Thorough testing and deployment to production environment." }
    ],
    faq: [
      { question: "How long does it take to build a website?", answer: "Typically 4-8 weeks depending on complexity and features required." },
      { question: "Do you provide ongoing maintenance?", answer: "Yes, we offer comprehensive maintenance packages to keep your site updated and secure." },
      { question: "Will my website be mobile-friendly?", answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices." }
    ]
  },
  {
    _id: "2", 
    _type: "service",
    title: "Mobile App Development",
    bodyRaw: null,
    cover: {
      asset: {
        url: "/api/placeholder/600/400"
      }
    },
    steps: [
      { name: "Strategy & Planning", body: "Define app goals, target audience, and technical requirements." },
      { name: "UI/UX Design", body: "Create intuitive and engaging user interfaces and experiences." },
      { name: "Development & Testing", body: "Build native or cross-platform apps with rigorous testing." },
      { name: "Deployment & Support", body: "Launch on app stores and provide ongoing maintenance." }
    ],
    faq: [
      { question: "Do you develop for both iOS and Android?", answer: "Yes, we develop native apps for both platforms as well as cross-platform solutions." },
      { question: "How much does mobile app development cost?", answer: "Costs vary based on complexity. We provide detailed estimates after understanding your requirements." },
      { question: "Can you help with app store submission?", answer: "Yes, we handle the entire app store submission process and optimization." }
    ]
  },
  {
    _id: "3",
    _type: "service", 
    title: "Desktop Applications",
    bodyRaw: null,
    cover: {
      asset: {
        url: "/api/placeholder/600/400"
      }
    },
    steps: [
      { name: "Requirements Analysis", body: "Understanding your business needs and technical specifications." },
      { name: "Architecture Design", body: "Planning the application structure and technology stack." },
      { name: "Development", body: "Building robust desktop applications with modern frameworks." },
      { name: "Distribution", body: "Packaging and distributing your application across platforms." }
    ],
    faq: [
      { question: "What platforms do you support?", answer: "We develop for Windows, macOS, and Linux using cross-platform technologies." },
      { question: "Can desktop apps integrate with web services?", answer: "Yes, we can integrate with APIs, databases, and cloud services seamlessly." },
      { question: "Do you provide installation packages?", answer: "We create professional installers and handle code signing for security." }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
              We offer comprehensive digital solutions to help your business thrive 
              in the modern world. From web development to mobile apps and desktop software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border border-gray-300 text-gray-900 rounded-full font-medium text-lg hover:border-gray-900 hover:bg-gray-50 transition-all duration-200">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-20 lg:gap-32">
            {mockServices.map((service, index) => (
              <div key={service._id} className="group">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Service Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                      <div className="aspect-[3/2] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-gray-500 text-center">
                          <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-2xl flex items-center justify-center">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                              {service.title.includes('Website') && (
                                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                              )}
                              {service.title.includes('Mobile') && (
                                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4z" clipRule="evenodd" />
                              )}
                              {service.title.includes('Desktop') && (
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1h-4l-1 2h2a1 1 0 110 2H7a1 1 0 110-2h2l-1-2H4a1 1 0 01-1-1V4zm13 1H4v6h12V5z" clipRule="evenodd" />
                              )}
                            </svg>
                          </div>
                          <p className="font-medium text-lg">{service.title}</p>
                        </div>
                      </div>
                      
                      {/* Floating accent */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg opacity-80 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl -z-10 transform rotate-2 scale-105 opacity-30 group-hover:rotate-3 transition-transform duration-500" />
                  </div>

                  {/* Service Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {service.title}
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        {service.title.includes('Website') && 
                          "Custom websites and web applications built with modern technologies. From simple landing pages to complex enterprise solutions with seamless user experiences."
                        }
                        {service.title.includes('Mobile') && 
                          "Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with powerful functionality and optimal performance."
                        }
                        {service.title.includes('Desktop') && 
                          "Powerful desktop software solutions for Windows, macOS, and Linux. Built for performance, reliability, and seamless system integration."
                        }
                      </p>
                    </div>

                    {/* Process Steps */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Our Process</h3>
                      <div className="space-y-4">
                        {service.steps?.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {stepIndex + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">{step?.name}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{step?.body}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:scale-105">
                        Start Project
                      </button>
                      <button className="px-8 py-4 border border-gray-300 text-gray-900 rounded-full font-medium hover:border-gray-900 hover:bg-gray-50 transition-all duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 lg:py-40 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services and development process.
            </p>
          </div>

          <div className="space-y-8">
            {mockServices.map((service) => (
              <div key={service._id}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  {service.title}
                </h3>
                <div className="grid grid-cols-1 gap-6 mb-12">
                  {service.faq?.map((item, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
                      <h4 className="font-semibold text-gray-900 mb-3">{item?.question}</h4>
                      <p className="text-gray-600 leading-relaxed">{item?.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Let&apos;s discuss your project requirements and see how we can bring 
            your vision to life with our expert development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:scale-105">
              Schedule Consultation
            </button>
            <button className="px-10 py-5 border border-gray-300 text-gray-900 rounded-full font-medium text-lg hover:border-gray-900 hover:bg-gray-50 transition-all duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}