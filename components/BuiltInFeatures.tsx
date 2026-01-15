export default function BuiltInFeatures() {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Built into every store
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="mb-6">
              <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">⚡</div>
                  <div className="text-5xl font-bold">99.9%</div>
                  <div className="text-sm text-gray-400 mt-2">UPTIME</div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">Lightning fast.<br />Ridiculously reliable.</h3>
            <p className="text-gray-400">
              With a 99.9% uptime rate and 300 points of presence worldwide, infrastructure 
              won't leave your customers hanging.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="mb-6">
              <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-6xl">🛒</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">The world's<br />best checkout</h3>
            <p className="text-gray-400">
              Checkout converts <span className="underline">15% better</span> on average than other commerce 
              platforms. Which means more sales for you.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="mb-6">
              <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-6xl">🤖</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">Powerful AI<br />at every turn</h3>
            <p className="text-gray-400">
              From launching your store to managing and scaling it, boost every part of your business 
              with built-in AI that's made for commerce.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
