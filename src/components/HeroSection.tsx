export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-20 lg:py-32">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-50 animate-pulse" />
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg rotate-45 opacity-30" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-gray-200 rounded-lg rotate-12 opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
            Custom solutions.
            <br />
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Crafted with precision.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We build exceptional websites, mobile applications, and desktop software 
            tailored to your unique needs and vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:scale-105">
              View Our Work
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-900 rounded-full font-medium text-lg hover:border-gray-900 hover:bg-gray-50 transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto mt-2" />
      </div>
    </section>
  )
}