import { useState } from 'react'

const faqs = [
  {
    q: 'Why has my honey crystallized?',
    a: "Crystallization is a natural and healthy sign of pure honey. It does NOT mean your honey has gone bad or been adulterated. All raw honey crystallizes over time because of its high glucose content. Simply place the jar in warm water (not boiling) to re-liquefy it.",
  },
  {
    q: 'Is Navira Honey truly raw?',
    a: 'Yes. We extract honey using a cold-spin process, never heating above hive temperature (~35°C). This preserves all natural enzymes, pollen, propolis, and beneficial nutrients that are destroyed by commercial pasteurization.',
  },
  {
    q: 'Why is it more expensive than supermarket honey?',
    a: 'Supermarket honey is often blended from multiple unknown sources, heavily filtered, heated, and may contain added sugar syrup. Navira Honey is single-origin, unprocessed, and fully traceable to our Kanyakumari apiary. You are paying for real food, not a mass-market product.',
  },
  {
    q: 'How is Navira different from store-bought honey?',
    a: 'Our bees are never fed sugar. We use no additives or preservatives. You get honey exactly as the bees made it — with natural color, aroma, texture variations, and all its medicinal properties fully intact.',
  },
  {
    q: 'Do you ship outside Tamil Nadu?',
    a: 'We are currently in Phase 1 — local and regional orders only via WhatsApp. Pan-India shipping will be available from our 2027 official launch. Contact us on WhatsApp to check current delivery availability.',
  },
  {
    q: 'Can diabetic patients consume Navira Honey?',
    a: 'Raw honey has a lower glycemic index than refined sugar and contains beneficial enzymes. However, we recommend consulting a physician before consumption if you have diabetes or any medical condition.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-honey-gold text-xs tracking-[0.3em] uppercase mb-3">Common Questions</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-honey-brown mb-4">FAQ</h2>
          <p className="text-honey-body/70">Everything you need to know before your first jar.</p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-honey-brown/10 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left flex items-center justify-between gap-4 px-6 py-5"
                aria-expanded={open === i}
              >
                <span className="font-medium text-honey-brown">{faq.q}</span>
                <span
                  className={`text-honey-gold text-xl flex-shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 border-t border-honey-brown/10">
                  <p className="pt-4 text-sm text-honey-body/70 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
