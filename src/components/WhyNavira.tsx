const comparisons = [
  {
    aspect: 'Sugar Feeding',
    navira: 'Never — bees fed only natural nectar',
    others: 'Common — bees given sugar syrup',
  },
  {
    aspect: 'Additives',
    navira: 'Zero — pure honey only',
    others: 'Often mixed with glucose syrup',
  },
  {
    aspect: 'Extraction',
    navira: 'Cold-spun, low pressure, enzyme-safe',
    others: 'High-heat pasteurization destroys enzymes',
  },
  {
    aspect: 'Crystallization',
    navira: 'Encouraged — it proves purity',
    others: 'Prevented chemically to look "liquid"',
  },
  {
    aspect: 'Origin',
    navira: 'Traceable — Kanyakumari, Tamil Nadu',
    others: 'Unknown multi-source blends',
  },
  {
    aspect: 'Batch Traceability',
    navira: 'Batch-verified, harvest-dated',
    others: 'Rarely traceable to source',
  },
]

const pillars = [
  { label: 'Royalty',  sub: 'A luxury food, not a commodity'     },
  { label: 'Nature',   sub: 'From the forests of Kanyakumari'    },
  { label: 'Organic',  sub: 'Completely free of chemicals'       },
]

export default function WhyNavira() {
  return (
    <section id="why-navira" className="py-24 bg-honey-brown text-white px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-honey-gold text-xs tracking-[0.3em] uppercase mb-3">The Difference</p>
          <h2 className="font-serif text-4xl sm:text-5xl mb-4">Why Navira Honey?</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Not all honey is created equal. Here's how Navira stands apart from the supermarket shelf.
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-3 pr-6 text-honey-gold font-medium">Aspect</th>
                <th className="text-left py-3 pr-6 text-honey-gold font-medium">Navira Honey ✓</th>
                <th className="text-left py-3 text-white/40 font-medium">Others</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr
                  key={row.aspect}
                  className={`border-b border-white/10 ${i % 2 === 0 ? 'bg-white/5' : ''}`}
                >
                  <td className="py-4 pr-6 font-medium text-white/80">{row.aspect}</td>
                  <td className="py-4 pr-6 text-honey-gold">{row.navira}</td>
                  <td className="py-4 text-white/40">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Brand pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {pillars.map((tag) => (
            <div key={tag.label} className="border border-honey-gold/30 rounded-2xl p-6">
              <p className="font-serif text-2xl text-honey-gold mb-1">{tag.label}</p>
              <p className="text-white/60 text-sm">{tag.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
