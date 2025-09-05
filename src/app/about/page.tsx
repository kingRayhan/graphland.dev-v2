import { Team } from "@/common/graphql-models/graphql";

// Mock data for now - will be replaced with actual GraphQL query later
const mockTeamMembers: Team[] = [
  {
    _id: "1",
    _type: "team",
    name: "Alex Rodriguez",
    designation: "Founder & CEO",
    bio: "Passionate about creating innovative software solutions that solve real-world problems. 10+ years experience in full-stack development and team leadership.",
    image: {
      asset: {
        url: "/api/placeholder/400/400",
      },
    },
    socialLinks: [
      {
        title: "LinkedIn",
        url: "https://linkedin.com/in/alexrodriguez",
        icon: {
          name: "linkedin",
          svg: "<svg>...</svg>",
        },
      },
      {
        title: "GitHub",
        url: "https://github.com/alexrodriguez",
        icon: {
          name: "github",
          svg: "<svg>...</svg>",
        },
      },
    ],
  },
  {
    _id: "2",
    _type: "team",
    name: "Sarah Chen",
    designation: "Lead Designer",
    bio: "Creative designer with expertise in user experience and interface design. Focused on creating beautiful, functional digital experiences.",
    image: {
      asset: {
        url: "/api/placeholder/400/400",
      },
    },
    socialLinks: [
      {
        title: "Dribbble",
        url: "https://dribbble.com/sarahchen",
        icon: {
          name: "dribbble",
          svg: "<svg>...</svg>",
        },
      },
    ],
  },
  {
    _id: "3",
    _type: "team",
    name: "Michael Johnson",
    designation: "Senior Developer",
    bio: "Full-stack developer specializing in modern web technologies and scalable applications. Passionate about clean code and performance optimization.",
    image: {
      asset: {
        url: "/api/placeholder/400/400",
      },
    },
    socialLinks: [
      {
        title: "Twitter",
        url: "https://twitter.com/michaeljohnson",
        icon: {
          name: "twitter",
          svg: "<svg>...</svg>",
        },
      },
    ],
  },
  {
    _id: "4",
    _type: "team",
    name: "Emily Davis",
    designation: "Project Manager",
    bio: "Experienced project manager with a track record of delivering complex software projects on time and within budget.",
    image: {
      asset: {
        url: "/api/placeholder/400/400",
      },
    },
    socialLinks: [
      {
        title: "LinkedIn",
        url: "https://linkedin.com/in/emilydavis",
        icon: {
          name: "linkedin",
          svg: "<svg>...</svg>",
        },
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              About Graphland
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
              We&apos;re a passionate team of digital craftspeople who believe in the power 
              of great design and clean code to transform businesses and create meaningful experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:scale-105">
                Work With Us
              </button>
              <button className="px-8 py-4 border border-gray-300 text-gray-900 rounded-full font-medium text-lg hover:border-gray-900 hover:bg-gray-50 transition-all duration-200">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Story Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Journey</h3>
                    <p className="text-gray-600">Growing stronger every day</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl opacity-80"></div>
              </div>
              
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl -z-10 transform rotate-3 scale-105 opacity-60"></div>
            </div>

            {/* Story Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Every great company starts with a vision. Ours began in 2019 when we saw businesses 
                  struggling to bridge the gap between innovative technology and exceptional user experience.
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">The Beginning</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Started as a small team of passionate developers with a simple belief: every business 
                      deserves access to world-class digital solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Growing Trust</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Built lasting partnerships with clients who trusted us to transform their ideas 
                      into powerful digital experiences that drive real business results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Innovation Focus</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Today, we continue pushing boundaries in web development, mobile applications, 
                      and desktop software, always with our clients&apos; success at heart.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:shadow-lg hover:scale-105">
                  Join Our Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 lg:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind Graphland&apos;s success. Each bringing unique expertise 
              and passion to create exceptional digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-12">
            {mockTeamMembers.map((member) => (
              <div key={member._id} className="group">
                <div className="relative mb-6">
                  {/* Team Member Image */}
                  <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-gray-500 text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-gray-400 rounded-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="font-medium">{member.name}</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay with social links */}
                  <div className="absolute inset-0 bg-gray-900/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {member.socialLinks?.map((link, index) => (
                        <a
                          key={index}
                          href={link?.url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Team Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium mb-4">
                    {member.designation}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 lg:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we approach 
              every project, client relationship, and team interaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-900 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We stay ahead of technology trends and continuously explore new possibilities 
                to deliver cutting-edge solutions that drive meaningful results.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-900 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Every project receives our full attention to detail and craftsmanship. 
                We&apos;re committed to delivering work that exceeds expectations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-900 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Partnership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We work closely with our clients as true partners, building lasting 
                relationships based on trust, transparency, and shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional results 
              for our clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">50+</div>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">25+</div>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">5+</div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">100%</div>
              <p className="text-gray-600 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Ready to work with us?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Let&apos;s discuss your project and see how we can bring your vision to life. 
            We&apos;re excited to hear about your ideas and explore how we can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:scale-105">
              Start a Project
            </button>
            <button className="px-10 py-5 border border-gray-300 text-gray-900 rounded-full font-medium text-lg hover:border-gray-900 hover:bg-gray-50 transition-all duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
