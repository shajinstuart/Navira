import image1 from '../images/image1.png'

const WA_LINK = 'https://wa.me/919489526843?text=Hi%2C%20I%20want%20to%20order%20Navira%20Honey%20500g'

const tags = ['Ethical Beekeeping', 'No Additives', 'Local Cultivation', 'Kanyakumari Origin']

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-honey-cream px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={image1}
              alt="Navira Honey apiary in Kanyakumari — ethical beekeeping"
              className="w-full h-full object-cover max-h-[500px]"
              loading="lazy"
            />
          </div>

          {/* Story */}
          <div>
            <p className="text-honey-gold text-xs tracking-[0.3em] uppercase mb-3">Our Story</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-honey-brown mb-6">About Navira</h2>
            <p className="text-honey-body/80 leading-relaxed mb-4">
              I am an agricultural engineer with a deep love for the land — and last year, that love led me to begin my first season of honey cultivation in the lush hills of Kanyakumari, Tamil Nadu.
            </p>
            <p className="text-honey-body/80 leading-relaxed mb-4">
              We've just completed our first harvest. Every jar of Navira Honey is the result of patient, ethical beekeeping — no sugar feeding, no chemical treatments, no shortcuts. Just bees doing what they do best, in one of the most biodiverse regions of India.
            </p>
            <p className="text-honey-body/80 leading-relaxed mb-6">
              Navira (meaning "bright, fresh spring") was born from a belief that the best honey comes from the best environment — and Kanyakumari, where the Eastern and Western Ghats meet the sea, provides exactly that.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-honey-green text-honey-green px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-honey-gold text-white font-semibold px-8 py-3.5 rounded-full hover:bg-honey-brown transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
