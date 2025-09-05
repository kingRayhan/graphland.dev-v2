export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden py-20 lg:py-32">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-full opacity-40 animate-pulse" />
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-lg rotate-45 opacity-20" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-neutral-800 rounded-lg rotate-12 opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-100 leading-tight">
            Custom solutions.
            <br />
            <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Crafted with precision.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            We build exceptional websites, mobile applications, and desktop software 
            tailored to your unique needs and vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="px-8 py-4 bg-white text-neutral-900 rounded-full font-medium text-lg hover:bg-neutral-200 transition-all duration-200 hover:shadow-lg hover:scale-105">
              View Our Work
            </button>
            <button className="px-8 py-4 border border-neutral-700 text-neutral-100 rounded-full font-medium text-lg hover:border-neutral-400 hover:bg-neutral-900 transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-neutral-600 to-transparent" />
        <div className="w-2 h-2 bg-neutral-600 rounded-full mx-auto mt-2" />
      </div>
    </section>
  )
}
