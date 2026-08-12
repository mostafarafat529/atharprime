import { useState } from 'react'
import { Play } from 'lucide-react'

const ProjectVideo = ({
  video,
  poster,
  title,
  overlayLabel = 'شاهد الجولة',
  className = 'aspect-video',
  roundedClass = 'rounded-3xl',
}) => {
  const [playing, setPlaying] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`relative overflow-hidden bg-bg-card shadow-2xl shadow-bg-primary/30 ring-1 ring-text-primary/10 ${roundedClass} ${className}`}
    >
      {!playing ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${overlayLabel} — ${title}`}
          className="group absolute inset-0 flex h-full w-full items-center justify-center focus:outline-none"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-bg-primary/35 transition-opacity duration-500 group-hover:opacity-60"
          />
          {poster && (
            <img
              src={poster}
              alt={title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          )}
          <span className="relative flex flex-col items-center gap-3">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-bg-primary/60 text-white backdrop-blur-md shadow-xl shadow-bg-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-soft group-hover:text-bg-primary md:h-20 md:w-20">
              <Play className="ms-0.5 h-7 w-7 fill-current md:h-9 md:w-9" />
            </span>
            {overlayLabel && (
              <span className="rounded-full border border-text-primary/10 bg-bg-primary/75 px-4 py-1.5 text-xs font-bold text-text-primary backdrop-blur-md md:text-sm">
                {overlayLabel}
              </span>
            )}
          </span>
        </button>
      ) : failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-bg-primary px-6 text-center">
          <p className="text-sm font-semibold text-text-primary/80">تعذر تشغيل الفيديو.</p>
          <p className="text-xs text-text-primary/50">يرجى المحاولة لاحقًا.</p>
        </div>
      ) : (
        <video
          src={video}
          poster={poster}
          title={title}
          controls
          autoPlay
          playsInline
          controlsList="nodownload"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  )
}

export default ProjectVideo
