interface PricingCard {
  _key?: string
  serviceName: string
  price: string
  priceUnit?: string
  priceColor?: string
}

interface PricingSectionProps {
  block?: {
    heading?: string
    pricingCards?: PricingCard[]
  }
}

const defaultPricingCards: PricingCard[] = [
  {
    serviceName: 'Laserreinigung',
    price: 'ab 120 €',
    priceUnit: 'pro Stunde',
    priceColor: 'text-yellow-300',
  },
  {
    serviceName: 'Trockeneisreinigung',
    price: 'ab 115 €',
    priceUnit: 'pro Stunde',
    priceColor: 'text-yellow-400',
  },
  {
    serviceName: 'Sandstrahlen',
    price: 'ab 90 €',
    priceUnit: 'pro Stunde',
    priceColor: 'text-yellow-500',
  },
]

export default function PricingSection({block}: PricingSectionProps = {}) {
  const heading = block?.heading || 'Preisübersicht'
  const pricingCards =
    block?.pricingCards && block.pricingCards.length > 0 ? block.pricingCards : defaultPricingCards

  return (
    <section id="preise" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">{heading}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {pricingCards.map((card, index) => (
            <div
              key={card._key || index}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-yellow-500 transition-colors text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{card.serviceName}</h3>
              <div className={`text-4xl font-bold ${card.priceColor || 'text-yellow-400'} mb-2`}>
                {card.price}
              </div>
              <div className="text-gray-400">{card.priceUnit || 'pro Stunde'}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
