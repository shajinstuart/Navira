import { useRef, useState } from 'react'
import storyPoster from '../images/image2.png'
import storyVideo  from '../videos/vedio2.mp4'

export default function BrandStoryVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    videoRef.current?.play()
    setPlaying(true)
  }

  return (
    <section className="py-24 bg-honey-cream px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-honey-gold text-xs tracking-[0.3em] uppercase mb-3">Our Process</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-honey-brown mb-4">How It's Made</h2>
          <p className="text-honey-body/70 max-w-xl mx-auto">
            From flower to jar — watch the Navira Honey story from our apiary in Kanyakumari.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video bg-honey-brown">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={storyPoster}
            controls={playing}
            playsInline
            preload="none"
            onEnded={() => setPlaying(false)}
          >
            <source src={storyVideo} type="video/mp4" />
          </video>

          {!playing && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center group w-full"
              aria-label="Play our brand story video"
            >
              <div className="bg-honey-gold/90 group-hover:bg-honey-gold text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
