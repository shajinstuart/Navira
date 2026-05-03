import { useRef, useEffect, useState } from 'react'
import reel3   from '../videos/vedio3.mp4'
import reel4   from '../videos/vedio4.mp4'
import poster3 from '../images/image3.png'
import poster4 from '../images/image4.png'

interface ReelCardProps {
  src:    string
  poster: string
  label:  string
}

function ReelCard({ src, poster, label }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  // Pause when scrolled out of view
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-honey-brown shadow-md cursor-pointer group"
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="none"
        className="w-full h-full object-cover"
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-honey-brown/40">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-white text-sm font-medium">{label}</span>
        </div>
      )}
    </div>
  )
}

const reels: ReelCardProps[] = [
  { src: reel3, poster: poster3, label: 'Farm Visuals'    },
  { src: reel4, poster: poster4, label: 'Natural Process' },
]

export default function ReelsSection() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-honey-gold text-xs tracking-[0.3em] uppercase mb-3">Behind the Scenes</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-honey-brown mb-4">Glimpses</h2>
          <p className="text-honey-body/70 max-w-xl mx-auto">
            A peek into our apiary, extraction process, and the landscapes of Kanyakumari.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {reels.map((r) => (
            <ReelCard key={r.src} {...r} />
          ))}
        </div>

        <p className="text-center mt-8 text-xs text-honey-body/40">Tap to play · Pauses when scrolled away</p>
      </div>
    </section>
  )
}
