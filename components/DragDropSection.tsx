export default function DragDropSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎨</div>
              <div className="text-xl text-gray-600">Visual Editor</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Bring your vision to life</h2>
            <p className="text-xl text-gray-600">
              Powerful customization tools that let you nail every detail. No coding required—just your imagination.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-6">Create completely bespoke blocks</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Just say what you want in a few words and let AI build new content blocks to match your vision.
          </p>
          <div className="bg-gray-100 rounded-2xl p-8 h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🤖</div>
              <div className="text-xl text-gray-600">AI Block Generator</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Drag and drop</h3>
            <p className="text-xl text-gray-600">
              Effortlessly add pages and switch up the layout with our online store editor.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📱</div>
              <div className="text-xl text-gray-600">Page Builder</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20">
          <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <div className="text-xl text-gray-600">Multi-market Support</div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Sell worldwide or wholesale</h3>
            <p className="text-xl text-gray-600 mb-4">
              Show different products and pricing to international and B2B customers with contextual storefronts.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-6">The custom content customers need</h3>
          <p className="text-xl text-gray-600 mb-8">Across your store</p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            With metaobjects, you can add custom pages and new types of structured content (think banners, 
            lookbooks, influencer profiles).
          </p>
          
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h4 className="text-2xl font-bold mb-6">On specific surfaces</h4>
            <p className="text-xl text-gray-600 max-w-3xl">
              Use metafields to add specialized information (think product specs or a list of ingredients) 
              to product listings, orders, or customer profiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
