export default function Testimonials() {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Join millions of merchants on YourBrand
        </h2>
        <p className="text-xl text-gray-400 mb-16">
          All kinds of businesses. All kinds of stores. All built to sell.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-2xl md:text-3xl mb-8 leading-relaxed">
              "We love our theme. It's simple to navigate. It's easy to update. My dev team moves at laser 
              speed. If we have an idea, it's implemented same-day."
            </p>
            <div className="mb-8">
              <p className="font-bold text-lg">Brand Name</p>
              <p className="text-gray-400">Founder and CEO</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-gray-800 hover:bg-gray-700 rounded-full p-3">←</button>
              <button className="bg-gray-800 hover:bg-gray-700 rounded-full p-3">→</button>
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">👤</div>
              <div className="text-xl text-gray-400">Customer Photo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
