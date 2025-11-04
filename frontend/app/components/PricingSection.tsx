export default function PricingSection() {
  return (
    <section id="preise" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Preisübersicht</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-yellow-500 transition-colors text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Laserreinigung</h3>
            <div className="text-4xl font-bold text-yellow-300 mb-2">ab 120 €</div>
            <div className="text-gray-400">pro Stunde</div>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-primary transition-colors text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Trockeneisreinigung</h3>
            <div className="text-4xl font-bold text-yellow-400 mb-2">ab 115 €</div>
            <div className="text-gray-400">pro Stunde</div>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-yellow-500 transition-colors text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Sandstrahlen</h3>
            <div className="text-4xl font-bold text-yellow-500 mb-2">ab 90 €</div>
            <div className="text-gray-400">pro Stunde</div>
          </div>
        </div>
      </div>
    </section>
  )
}
