export default function AppShowcase() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center space-x-4 mb-8 flex-wrap">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl"></div>
            ))}
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Do more with commerce apps
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          With 16000+ apps to choose from, the App Store has whatever extras your store needs—from 
          added features to custom product options.
        </p>
      </div>
    </section>
  )
}
