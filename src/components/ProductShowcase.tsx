import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'

const products = [
  {
    image: image2,
    name:   'Raw Forest Honey',
    weight: '500g',
    origin: 'Kanyakumari Forest',
    note:   'Unfiltered, enzyme-rich, dark amber',
  },
  {
    image: image3,
    name:   'Wildflower Honey',
    weight: '250g',
    origin: 'Tamil Nadu Meadows',
    note:   'Floral, light, naturally crystallizes',
  },
  {
    image: image4,
    name:   'Multifloral Honey',
    weight: '1kg',
    origin: 'Kanyakumari Hills',
    note:   'Rich, complex, deeply nourishing',
  },
]

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 bg-honey-cream px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-honey-gold text-xs tracking-[0.3em] uppercase mb-3">Harvest 2026</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-honey-brown mb-4">Our Products</h2>
          <p className="text-honey-body/70 max-w-xl mx-auto">
            Straight from the hive to your home — no additives, no heating, no compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={p.image}
                  alt={`${p.name} — Navira Honey from ${p.origin}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-xl text-honey-brown">{p.name}</h3>
                  <span className="text-xs text-honey-gold border border-honey-gold/30 rounded-full px-2 py-0.5 flex-shrink-0 ml-2">
                    {p.weight}
                  </span>
                </div>
                <p className="text-xs text-honey-green font-medium mb-2">{p.origin}</p>
                <p className="text-sm text-honey-body/60">{p.note}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-sm text-honey-body/50 italic">
          Launching 2027 — pre-order inquiries welcome via WhatsApp
        </p>
      </div>
    </section>
  )
}
