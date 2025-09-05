import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/" className="font-bold text-xl text-gray-900">
              Graphland
            </Link>
            <div className="hidden md:block w-px h-4 bg-gray-300" />
            <p className="text-gray-600 text-sm text-center md:text-left">
              Custom solutions. Crafted with precision.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6">
              <Link href="/services" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Services
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Projects
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                About
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:hello@graphland.dev" 
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
              >
                hello@graphland.dev
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Graphland. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}