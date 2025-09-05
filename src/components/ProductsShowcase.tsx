interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
  features: string[]
}

const products: Product[] = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution with advanced analytics, inventory management, and seamless payment integration.',
    image: '/api/placeholder/800/600',
    category: 'Web Application',
    features: ['Real-time Analytics', 'Multi-vendor Support', 'Mobile Responsive', 'Payment Gateway']
  },
  {
    id: '2',
    name: 'Task Management App',
    description: 'Streamline your workflow with our intuitive task management application featuring team collaboration and progress tracking.',
    image: '/api/placeholder/800/600',
    category: 'Mobile App',
    features: ['Team Collaboration', 'Progress Tracking', 'Cloud Sync', 'Offline Mode']
  },
  {
    id: '3',
    name: 'Design Studio Suite',
    description: 'Professional design tools for creative professionals with advanced vector editing and collaborative features.',
    image: '/api/placeholder/800/600',
    category: 'Desktop Application',
    features: ['Vector Editing', 'Real-time Collaboration', 'Plugin System', 'Cloud Storage']
  },
  {
    id: '4',
    name: 'Analytics Dashboard',
    description: 'Powerful business intelligence platform with real-time data visualization and comprehensive reporting capabilities.',
    image: '/api/placeholder/800/600',
    category: 'Web Application',
    features: ['Data Visualization', 'Custom Reports', 'API Integration', 'Export Tools']
  },
  {
    id: '5',
    name: 'CRM System',
    description: 'Complete customer relationship management solution to streamline sales processes and customer interactions.',
    image: '/api/placeholder/800/600',
    category: 'Web Application',
    features: ['Lead Management', 'Sales Pipeline', 'Contact Management', 'Email Integration']
  },
  {
    id: '6',
    name: 'Learning Management System',
    description: 'Educational platform for online courses with interactive content, assessments, and progress tracking.',
    image: '/api/placeholder/800/600',
    category: 'Web Application',
    features: ['Course Creation', 'Video Streaming', 'Assessments', 'Progress Tracking']
  }
]

export default function ProductsShowcase() {
  return (
    <section className="py-32 lg:py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our flagship products that showcase the depth of our expertise 
            and commitment to excellence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-gray-300 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">{product.name}</p>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
                        View Details
                      </button>
                      <button className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-200">
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    {product.category}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <span className="text-gray-600 text-xs">{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 3 && (
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                        <span className="text-gray-400 text-xs">+{product.features.length - 3} more features</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 lg:mt-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in custom solutions?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We build tailored products that perfectly match your business needs. 
            Let&apos;s discuss your vision and create something amazing together.
          </p>
          <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:scale-105">
            Start Your Custom Project
          </button>
        </div>
      </div>
    </section>
  )
}