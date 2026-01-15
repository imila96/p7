export default function ChooseBuildMethod() {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Choose how you want to build ↓
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Start with a theme */}
          <div className="bg-gray-800 rounded-2xl p-12 border border-gray-700 hover:border-gray-600 transition">
            <div className="mb-8">
              <div className="w-full h-80 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-8xl">🎨</div>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">Start with a theme</h3>
            <p className="text-gray-400 text-lg">
              Generate a store design with AI, or pick from 800+ proven themes, then customize 
              things with our easy-to-use visual editor.
            </p>
          </div>

          {/* Build completely custom */}
          <div className="bg-gray-800 rounded-2xl p-12 border border-gray-700 hover:border-gray-600 transition">
            <div className="mb-8">
              <div className="w-full h-80 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-8xl">💻</div>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">Build completely custom</h3>
            <p className="text-gray-400 text-lg">
              Create a theme from scratch, go headless with Hydrogen (our headless stack), or 
              choose your own stack using our APIs. It's totally up to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
