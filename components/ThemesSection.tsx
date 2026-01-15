export default function ThemesSection() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <button className="border border-gray-800 text-gray-800 px-6 py-2 rounded-full mb-8 hover:bg-gray-800 hover:text-white transition">
          Platform themes
        </button>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Creativity meets commerce
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Craft your unique brand vision on a foundation that's built to sell, right out of the box.{' '}
          <a href="#" className="underline hover:no-underline">Just pick a theme</a> that reflects your brand, 
          then make it your own.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-6xl">🎨</div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Theme Name {i + 1}</h3>
                <p className="text-gray-600 text-sm">Category</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
