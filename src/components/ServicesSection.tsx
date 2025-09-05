interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

const services: Service[] = [
  {
    id: '1',
    title: 'Website Development',
    description: 'Custom websites and web applications built with modern technologies. From simple landing pages to complex enterprise solutions.',
    icon: '🌐',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Secure & Scalable']
  },
  {
    id: '2', 
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with seamless functionality.',
    icon: '📱',
    features: ['Cross-platform', 'Native Performance', 'App Store Ready', 'Push Notifications']
  },
  {
    id: '3',
    title: 'Desktop Applications',
    description: 'Powerful desktop software solutions for Windows, macOS, and Linux. Built for performance and reliability.',
    icon: '💻',
    features: ['Multi-platform', 'Rich UI/UX', 'Offline Support', 'System Integration']
  }
]

export default function ServicesSection() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating digital solutions that drive business growth 
            and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="relative bg-gray-50 rounded-3xl p-8 lg:p-10 h-full hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gray-100">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full opacity-60" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gray-900 text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 group-hover:shadow-lg">
                  Learn More
                </button>

                {/* Hover accent */}
                <div className="absolute top-6 right-6 w-8 h-8 bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}