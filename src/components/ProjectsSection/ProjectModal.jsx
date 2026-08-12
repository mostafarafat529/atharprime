import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Box, ExternalLink, Image as ImageIcon, Loader2, Play, X } from 'lucide-react'
import ProjectVideo from '../ProjectVideo/ProjectVideo'
import { typeLabels } from './projectsData'

const ProjectViewer = ({ project, initialImage = 0 }) => {
  const [status, setStatus] = useState('loading')
  const [activeImage, setActiveImage] = useState(initialImage)
  const images = project.images?.length ? project.images : project.image ? [project.image] : []

  useEffect(() => {
    if (!project.link3D) return undefined
    const timer = window.setTimeout(() => {
      setStatus((prev) => (prev === 'loading' ? 'failed' : prev))
    }, 15000)
    return () => window.clearTimeout(timer)
  }, [project.link3D])

  if (project.video) {
    return (
      <div className="flex-1 overflow-y-auto bg-bg-primary">
        <ProjectVideo
          video={project.video}
          poster={project.videoPoster || project.image}
          title={project.title}
          overlayLabel="شاهد الجولة"
          className="aspect-video w-full"
          roundedClass="rounded-none shadow-none ring-0"
        />

        <div className="mx-auto w-full max-w-3xl px-4 py-6 md:px-8 md:py-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-accent-soft/30 bg-accent-soft/10 px-3 py-1 text-[11px] font-bold text-accent-soft">
              {project.category}
            </span>
            <span className="rounded-full border border-text-primary/15 px-3 py-1 text-[11px] font-semibold text-text-primary/60">
              {typeLabels[project.type] || project.type}
            </span>
          </div>

          <h4 className="mt-4 font-display text-xl font-extrabold leading-snug text-text-primary md:text-2xl">
            {project.title}
          </h4>

          {project.description && (
            <p className="mt-3 text-sm leading-relaxed text-text-primary/65 md:text-base">
              {project.description}
            </p>
          )}

          {project.services?.length > 0 && (
            <div className="mt-6">
              <p className="mb-2.5 text-xs font-bold tracking-wide text-text-primary/50">
                خدمات المشروع
              </p>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-text-primary/10 bg-bg-card/70 px-3.5 py-1.5 text-xs font-semibold text-text-secondary"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}

          {images.length > 1 && (
            <div className="mt-7">
              <p className="mb-2.5 text-xs font-bold tracking-wide text-text-primary/50">
                صور المشروع
              </p>
              <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                {images.map((img, i) => (
                  <button
                    key={`${project.id}-img-${i}`}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`الصورة ${i + 1}`}
                    className={`relative aspect-[4/3] overflow-hidden rounded-lg border transition-all duration-300 active:scale-95 ${
                      i === activeImage
                        ? 'border-accent-soft shadow-md shadow-accent-soft/25'
                        : 'border-text-primary/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} — ${i + 1}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (!project.link3D) {
    return (
      <div className="relative flex flex-1 flex-col bg-bg-primary">
        <div className="relative flex-1">
          <img
            src={images[activeImage] || images[0]}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>

        {images.length > 1 && (
          <div className="flex shrink-0 items-center justify-center gap-2 overflow-x-auto border-t border-text-primary/10 bg-bg-card/60 p-3">
            {images.map((img, i) => (
              <button
                key={`${project.id}-img-${i}`}
                type="button"
                onClick={() => setActiveImage(i)}
                aria-label={`الصورة ${i + 1}`}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-all duration-300 active:scale-95 ${
                  i === activeImage
                    ? 'border-accent-soft shadow-md shadow-accent-soft/25'
                    : 'border-text-primary/10 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`${project.title} — ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative flex-1 bg-bg-primary">
      {status !== 'failed' && (
        <iframe
          src={project.link3D}
          title={project.title}
          onLoad={() => setStatus('ready')}
          allowFullScreen
          allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      )}

      {status === 'loading' && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-bg-primary">
          <Loader2 className="h-9 w-9 animate-spin text-accent-soft" />
          <p className="text-sm text-text-primary/70">جارٍ تحميل التصميم التفاعلي...</p>
        </div>
      )}

      {status === 'failed' && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 bg-bg-primary px-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-soft/40 bg-bg-card text-accent-soft">
            <Box className="h-6 w-6" />
          </span>
          <div>
            <h4 className="font-display text-lg font-bold text-text-primary">
              هذا التصميم تفاعلي — استكشفه الآن
            </h4>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-primary/60">
              يبدو أن المعاينة المدمجة غير متاحة من داخل الموقع، يمكنك فتح التصميم التفاعلي في نافذة
              جديدة للاستكشاف الكامل.
            </p>
          </div>
          <a
            href={project.link3D}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-text-primary shadow-lg shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400 active:scale-[0.97]"
          >
            فتح التصميم 3D
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      )}
    </div>
  )
}

const ProjectModal = ({ project, onClose, initialImage = 0 }) => {
  useEffect(() => {
    if (!project) return

    document.body.style.overflow = 'hidden'

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100]"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <div
            className="absolute inset-0 bg-bg-primary/90 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative flex h-full w-full flex-col"
          >
            <header className="flex items-center justify-between gap-4 border-b border-text-primary/10 bg-bg-card/95 px-4 py-3 md:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-soft/40 bg-bg-primary text-accent-soft">
                  {project.is3D ? (
                    <Box className="h-4 w-4" />
                  ) : project.video ? (
                    <Play className="h-4 w-4 fill-current" />
                  ) : (
                    <ImageIcon className="h-4 w-4" />
                  )}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate font-display text-sm font-bold text-text-primary md:text-base">
                    {project.title}
                  </h3>
                  <span className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-bold text-accent-soft">
                    {project.is3D ? (
                      <>
                        <Box className="h-3 w-3" />
                        3D تفاعلي
                      </>
                    ) : project.video ? (
                      <>
                        <Play className="h-3 w-3 fill-current" />
                        جولة فيديو
                      </>
                    ) : (
                      project.category
                    )}
                  </span>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                {project.link3D && (
                  <a
                    href={project.link3D}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-2 rounded-full border border-text-primary/15 px-4 py-2 text-xs font-semibold text-text-primary/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-soft/50 hover:text-accent-soft active:scale-[0.97] sm:inline-flex"
                  >
                    فتح في نافذة جديدة
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="إغلاق"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-text-primary/15 text-text-primary/70 transition-all duration-300 hover:rotate-90 hover:border-accent-soft/50 hover:text-accent-soft active:scale-90"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </header>

            <ProjectViewer key={project.id} project={project} initialImage={initialImage} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default ProjectModal
