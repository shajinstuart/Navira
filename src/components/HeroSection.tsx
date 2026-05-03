import heroBg    from '../images/image1.png'
import heroVideo from '../videos/vedio1.mp4'

const WA_LINK = 'https://wa.me/919489526843?text=Hi%2C%20I%20want%20to%20order%20Navira%20Honey%20500g'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background video — muted, looping, no controls */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroBg}
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-honey-brown/60" />

      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-honey-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
          Kanyakumari, Tamil Nadu
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-3">
          Navira Honey
        </h1>
        <p className="font-serif text-xl sm:text-2xl text-honey-gold italic mb-2">
          A Nature's Nectar
        </p>
        <p className="text-2xl mb-8 opacity-80">மலரின் தேன்</p>
        <p className="text-base sm:text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
          Pure, raw, and unprocessed honey — harvested ethically from the lush gardens of Kanyakumari.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-honey-gold text-white font-semibold px-8 py-3.5 rounded-full text-base hover:bg-white hover:text-honey-brown transition-all"
          >
            Order via WhatsApp
          </a>
          <a
            href="#about"
            className="border border-white/60 text-white font-medium px-8 py-3.5 rounded-full text-base hover:border-honey-gold hover:text-honey-gold transition-all"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  )
}
