const clients = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'StartupXYZ', logo: 'SX' },
  { name: 'Enterprise Ltd', logo: 'EL' },
  { name: 'Innovation Hub', logo: 'IH' },
  { name: 'Digital Agency', logo: 'DA' },
  { name: 'Future Systems', logo: 'FS' },
  { name: 'Cloud Solutions', logo: 'CS' },
  { name: 'Mobile First', logo: 'MF' }
]

const testimonials = [
  {
    quote: "Graphland delivered an exceptional web application that transformed our business operations. Their attention to detail and technical expertise is outstanding.",
    author: "Sarah Johnson",
    title: "CTO, TechCorp",
    rating: 5
  },
  {
    quote: "The mobile app they built for us exceeded all expectations. The user experience is seamless and our customers love it.",
    author: "Michael Chen",
    title: "Founder, StartupXYZ", 
    rating: 5
  },
  {
    quote: "Professional, reliable, and innovative. Graphland is our go-to partner for all digital projects.",
    author: "Emily Davis",
    title: "Director, Enterprise Ltd",
    rating: 5
  }
]

export default function ClientsSection() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;ve had the privilege of working with amazing clients who trust us 
            to bring their digital visions to life.
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10 lg:gap-12 mb-24 lg:mb-28">
          {clients.map((client, index) => (
            <div key={index} className="group flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <span className="font-bold text-lg">
                  {client.logo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8">
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 lg:mt-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join our growing list of satisfied clients
          </h3>
          <p className="text-gray-600 mb-8">
            Ready to start your project? Let&apos;s discuss how we can help you achieve your goals.
          </p>
          <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}