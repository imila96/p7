export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Investors</a></li>
              <li><a href="#" className="hover:text-white">Partners</a></li>
              <li><a href="#" className="hover:text-white">Affiliates</a></li>
              <li><a href="#" className="hover:text-white">Legal</a></li>
              <li><a href="#" className="hover:text-white">Service Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Merchant Support</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Hire a Partner</a></li>
              <li><a href="#" className="hover:text-white">Academy</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Developers</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Platform.dev</a></li>
              <li><a href="#" className="hover:text-white">API Documentation</a></li>
              <li><a href="#" className="hover:text-white">Dev Degree</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Shop</a></li>
              <li><a href="#" className="hover:text-white">Shop Pay</a></li>
              <li><a href="#" className="hover:text-white">Plus</a></li>
              <li><a href="#" className="hover:text-white">Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Global impact</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Build Black</a></li>
              <li><a href="#" className="hover:text-white">Accessibility</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Online Store Builder</a></li>
              <li><a href="#" className="hover:text-white">Website Builder</a></li>
              <li><a href="#" className="hover:text-white">Ecommerce Website</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold mb-4">YourBrand</div>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} | English</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Sitemap</a>
            <a href="#" className="text-gray-400 hover:text-white">Your Privacy Choices</a>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-6">
          {['Facebook', 'Twitter', 'YouTube', 'Instagram', 'TikTok', 'LinkedIn', 'Pinterest'].map((social) => (
            <a key={social} href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">{social}</span>
              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
