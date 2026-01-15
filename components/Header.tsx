'use client'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gray-900 text-white z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold">YourBrand</div>
            <nav className="hidden md:flex space-x-6">
              <button className="hover:text-gray-300 flex items-center">
                Solutions <span className="ml-1">▼</span>
              </button>
              <a href="#pricing" className="hover:text-gray-300">Pricing</a>
              <button className="hover:text-gray-300 flex items-center">
                Resources <span className="ml-1">▼</span>
              </button>
              <a href="#enterprise" className="hover:text-gray-300">Enterprise</a>
              <button className="hover:text-gray-300 flex items-center">
                What's new <span className="ml-1">▼</span>
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#login" className="hover:text-gray-300">Log in</a>
            <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
              Start for free
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
