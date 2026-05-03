const benefits = [
  {
    icon:  '🌿',
    title: 'Antibacterial',
    desc:  'Natural hydrogen peroxide content inhibits bacterial growth — effective against common pathogens.',
  },
  {
    icon:  '⚡',
    title: 'Energy Booster',
    desc:  'Natural sugars (fructose + glucose) provide instant and sustained energy without a crash.',
  },
  {
    icon:  '🛡️',
    title: 'Antioxidant Rich',
    desc:  'Polyphenols and flavonoids fight free radicals, protecting cells and slowing oxidative stress.',
  },
  {
    icon:  '🩹',
    title: 'Wound Healing',
    desc:  'Raw honey accelerates wound healing and soothes burns — used in traditional medicine for centuries.',
  },
  {
    icon:  '🌸',
    title: 'Digestive Aid',
    desc:  'Enzymes in raw honey support gut health, reduce bloating, and aid in digestion naturally.',
  },
  {
    icon:  '💪',
    title: 'Immunity Support',
    desc:  'Phytonutrients from diverse flower sources strengthen your immune system over time.',
  },
]

export default function MedicinalValues() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-honey-gold text-xs tracking-[0.3em] uppercase mb-3">Nature's Medicine</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-honey-brown mb-4">Medicinal Benefits</h2>
          <p className="text-honey-body/70 max-w-xl mx-auto">
            Navira Honey isn't just sweet — it's a complete food endorsed by nature and science.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex gap-4 p-6 rounded-2xl bg-honey-cream hover:shadow-sm transition-shadow"
            >
              <span className="text-3xl flex-shrink-0" role="img" aria-label={b.title}>{b.icon}</span>
              <div>
                <h3 className="font-serif text-lg text-honey-brown mb-1">{b.title}</h3>
                <p className="text-sm text-honey-body/70 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
