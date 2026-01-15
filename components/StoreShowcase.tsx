'use client'

export default function StoreShowcase() {
  const stores = [
    { id: 1, category: 'Headless', color: 'bg-yellow-50' },
    { id: 2, category: 'Custom Liquid', color: 'bg-pink-50' },
    { id: 3, category: 'Theme', color: 'bg-gray-100' },
    { id: 4, category: 'Theme', color: 'bg-red-50' },
    { id: 5, category: 'Theme', color: 'bg-teal-50' },
    { id: 6, category: 'Custom Liquid', color: 'bg-blue-50' },
    { id: 7, category: 'Theme', color: 'bg-green-50' },
    { id: 8, category: 'Theme', color: 'bg-purple-50' },
    { id: 9, category: 'Theme', color: 'bg-orange-50' },
  ]

  const column1 = stores.slice(0, 3)
  const column2 = stores.slice(3, 6)
  const column3 = stores.slice(6, 9)

  return (
    <section className="bg-black py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 - Scrolls Down */}
          <div className="flex flex-col space-y-6">
            <div className="animate-scroll-down space-y-6">
              {[...column1, ...column1].map((store, idx) => (
                <div 
                  key={`col1-${idx}`}
                  className={`${store.color} rounded-lg overflow-hidden h-96 flex items-center justify-center relative`}
                >
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {store.category}
                  </div>
                  <div className="text-center text-gray-400">
                    <div className="text-6xl mb-2">🏪</div>
                    <p className="text-sm">Store Example {store.id}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Scrolls Up */}
          <div className="flex flex-col space-y-6">
            <div className="animate-scroll-up space-y-6">
              {[...column2, ...column2].map((store, idx) => (
                <div 
                  key={`col2-${idx}`}
                  className={`${store.color} rounded-lg overflow-hidden h-96 flex items-center justify-center relative`}
                >
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {store.category}
                  </div>
                  <div className="text-center text-gray-400">
                    <div className="text-6xl mb-2">🛍️</div>
                    <p className="text-sm">Store Example {store.id}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 - Scrolls Down */}
          <div className="flex flex-col space-y-6">
            <div className="animate-scroll-down space-y-6">
              {[...column3, ...column3].map((store, idx) => (
                <div 
                  key={`col3-${idx}`}
                  className={`${store.color} rounded-lg overflow-hidden h-96 flex items-center justify-center relative`}
                >
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                    {store.category}
                  </div>
                  <div className="text-center text-gray-400">
                    <div className="text-6xl mb-2">🏬</div>
                    <p className="text-sm">Store Example {store.id}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
