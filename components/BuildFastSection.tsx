export default function BuildFastSection() {
  return (
    <section className="bg-indigo-700 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <button className="border border-white px-6 py-2 rounded-full mb-8 hover:bg-white hover:text-indigo-700 transition">
            Custom options
          </button>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Anything you want to build, you can
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-indigo-800 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <div className="text-xl">Terminal Preview</div>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-bold mr-4">OPT #1</div>
              <h3 className="text-3xl font-bold">Go Liquid</h3>
            </div>
            <p className="text-xl mb-6">
              Get the best of both worlds. Build your own one-of-a-kind store in no time with Liquid, 
              then leave the rest to us.
            </p>
            <a href="#" className="text-xl underline hover:no-underline">Learn more →</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center mb-6">
              <div className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-bold mr-4">OPT #2</div>
              <h3 className="text-3xl font-bold">Go headless</h3>
            </div>
            <p className="text-xl mb-6">
              Get full control. Tap into our APIs and developer tools to build your own bespoke store, 
              integrated with your preferred stack.
            </p>
            <a href="#" className="text-xl underline hover:no-underline">Learn more →</a>
          </div>
          <div className="bg-indigo-800 rounded-2xl p-8 h-96 flex items-center justify-center order-1 md:order-2">
            <div className="text-center">
              <div className="text-6xl mb-4">🔧</div>
              <div className="text-xl">API Integration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
