export default function CustomizationSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Plus all the features you need,<br />right out of the box
        </h2>
        
        <div className="space-y-12">
          <FeatureRow 
            title="The world's best-converting checkout"
            description="Powered by the best checkout in the world, our platform converts shoppers into buyers 15% better on average than other platforms."
          />
          
          <FeatureRow 
            title="AI tools"
            description="AI helps you create a custom store in seconds and customize it. Sidekick, your AI assistant, helps with everything from setup to scaling your business to generating images and marketing copy."
          />
          
          <FeatureRow 
            title="Videos and 3D models"
            description="Help shoppers imagine how your products fit into their lives with videos, 3D visualization tools, and other rich media."
          />
          
          <FeatureRow 
            title="Search and filtering"
            description="Give your customers an easy way to find exactly what they're looking for."
          />
          
          <FeatureRow 
            title="Languages and currencies"
            description="Let customers select which country and what currency they're shopping in."
          />
          
          <FeatureRow 
            title="Product recommendations"
            description="Encourage customers to fill their carts by recommending more products they'll love."
          />
          
          <FeatureRow 
            title="Fast and accessible"
            description="Stores are optimized for speed and accessibility, so everyone can shop and nobody has to wait."
          />
          
          <FeatureRow 
            title="Mobile-ready"
            description="Everything's designed responsively, so things look good no matter what device customers use to visit your store."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureRow({ title, description }: { title: string; description: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-200 pb-12">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  )
}
