import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Pause, Play, Sparkles } from 'lucide-react'
import { aiVideosData } from './aiVideosData'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const featuredUp = {
  hidden: { opacity: 0, y: 36, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: 'easeOut' } },
}

const playIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
  },
}

const padNumber = (index) => String(index + 1).padStart(2, '0')

const AISection = () => {
  const [activeId, setActiveId] = useState(aiVideosData[0].id)
  const [isPlaying, setIsPlaying] = useState(true)
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        const v = videoRef.current
        if (entry.isIntersecting) {
          v?.play().catch(() => {})
        } else {
          v?.pause()
        }
      },
      { rootMargin: '200px 0px', threshold: 0.05 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const activeIndex = aiVideosData.findIndex((v) => v.id === activeId)
  const activeVideo = aiVideosData[activeIndex]

  const handleSelect = (id) => {
    if (id !== activeId) {
      setIsPlaying(true)
      setActiveId(id)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="ai"
      className="relative overflow-hidden bg-bg-primary"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -start-40 top-0 h-96 w-96 rounded-full bg-brand-500/10 blur-[120px]"
      />

      <div className="container-site relative py-24 md:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-accent-soft" />
            <p className="text-xs font-semibold tracking-widest text-accent-soft md:text-sm">
              الرؤية البصرية
            </p>
            <span className="h-px w-10 bg-accent-soft" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-extrabold leading-[1.35] text-text-primary md:text-4xl lg:text-5xl"
          >
            من الفكرة... إلى <span className="text-accent-soft">مشهد يمكنك رؤيته</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-primary/65 md:text-lg"
          >
            نحوّل تصورك للمكان إلى تجربة بصرية تساعدك على رؤية التفاصيل قبل التنفيذ.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:mt-16 lg:grid-cols-12 lg:gap-10">
          <motion.div
            variants={featuredUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="order-first lg:col-span-7"
          >
            <div className="group relative">
              <span className="pointer-events-none absolute -start-3 -top-3 z-10 h-8 w-8 border-s-2 border-t-2 border-accent-soft/60" />
              <span className="pointer-events-none absolute -end-3 -top-3 z-10 h-8 w-8 border-e-2 border-t-2 border-accent-soft/60" />
              <span className="pointer-events-none absolute -bottom-3 -start-3 z-10 h-8 w-8 border-s-2 border-b-2 border-accent-soft/60" />
              <span className="pointer-events-none absolute -bottom-3 -end-3 z-10 h-8 w-8 border-e-2 border-b-2 border-accent-soft/60" />

              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-text-primary/10 bg-bg-card shadow-2xl shadow-bg-primary/40 ring-1 ring-accent-soft/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVideo.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    <video
                      ref={videoRef}
                      src={inView ? activeVideo.video : undefined}
                      poster={activeVideo.poster}
                      autoPlay={inView}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      controls={isPlaying}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                        isPlaying ? '' : 'group-hover:scale-[1.03]'
                      }`}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute start-4 top-4 z-10 flex items-center gap-2 rounded-full border border-text-primary/10 bg-bg-primary/80 px-3 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-soft" />
                  </span>
                  <span className="text-[11px] font-semibold text-text-primary">رؤية أثر برايم</span>
                </div>

                <div className="pointer-events-none absolute end-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-text-primary/10 bg-bg-primary/80 px-3 py-1.5 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-accent-soft" />
                  <span className="text-[11px] font-semibold text-text-primary">معاينة AI</span>
                </div>

                <AnimatePresence>
                  {!isPlaying && (
                    <motion.button
                      type="button"
                      onClick={() => videoRef.current?.play()}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      aria-label={`تشغيل فيديو ${activeVideo.title}`}
                      className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
                      style={{ backgroundImage: 'var(--video-scrim)' }}
                    >
                      <motion.span
                        variants={playIn}
                        initial="hidden"
                        animate="show"
                        className="relative flex h-20 w-20 items-center justify-center md:h-24 md:w-24"
                      >
                        <span className="absolute inset-0 rounded-full border border-accent-soft/30 transition-colors duration-500 group-hover:border-accent-soft" />
                        <span className="absolute inset-0 rounded-full bg-brand-500/25 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-text-primary shadow-lg shadow-brand-500/30 transition-transform duration-500 group-hover:scale-110 md:h-16 md:w-16">
                          <Play className="ms-1 h-6 w-6 fill-current md:h-7 md:w-7" />
                        </span>
                      </motion.span>
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="mt-6 flex items-start justify-between gap-4"
            >
              <div className="min-w-0">
                <p className="text-[11px] font-semibold tracking-widest text-accent-soft">
                  {padNumber(activeIndex)}
                </p>
                <h3 className="mt-1 truncate font-display text-lg font-bold text-text-primary md:text-xl">
                  {activeVideo.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-primary/55">
                  {activeVideo.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  isPlaying ? videoRef.current?.pause() : videoRef.current?.play()
                }
                aria-label={isPlaying ? 'إيقاف الفيديو مؤقتًا' : 'تشغيل الفيديو'}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-text-primary/15 bg-text-primary/5 text-text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-soft hover:bg-text-primary/10 hover:shadow-[0_0_16px_rgba(172,216,245,0.2)] active:scale-90"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="ms-0.5 h-4 w-4" />}
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-3 lg:overflow-visible lg:pb-0">
              {aiVideosData.map((video, index) => {
                const isActive = video.id === activeId
                return (
                  <motion.button
                    key={video.id}
                    variants={fadeUp}
                    type="button"
                    onClick={() => handleSelect(video.id)}
                    aria-pressed={isActive}
                    aria-label={video.title}
                    className={`group flex w-64 shrink-0 items-center gap-4 rounded-2xl border p-3 text-start transition-all duration-300 lg:w-full lg:p-3.5 ${
                      isActive
                        ? 'border-accent-soft/40 bg-bg-card/90 shadow-lg shadow-bg-primary/20'
                        : 'border-text-primary/10 bg-bg-card/50 hover:-translate-y-0.5 hover:border-text-primary/20 hover:bg-bg-card/80'
                    }`}
                  >
                    <span
                      className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border ${
                        isActive
                          ? 'border-accent-soft/50'
                          : 'border-text-primary/10 group-hover:border-accent-soft'
                      }`}
                    >
                      <video
                        src={inView ? video.video : undefined}
                        poster={video.poster}
                        muted
                        playsInline
                        preload="none"
                        disablePictureInPicture
                        aria-hidden="true"
                        tabIndex={-1}
                        className="h-full w-full object-cover"
                      />
                      <span
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ backgroundColor: 'var(--thumb-veil)' }}
                      >
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 ${
                            isActive
                              ? 'bg-accent-soft text-bg-primary'
                              : 'bg-bg-primary/70 text-text-primary group-hover:scale-110 group-hover:bg-brand-500'
                          }`}
                        >
                          {isActive ? (
                            <Pause className="h-3.5 w-3.5" />
                          ) : (
                            <Play className="ms-0.5 h-3.5 w-3.5" />
                          )}
                        </span>
                      </span>
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-[10px] font-semibold tracking-widest ${
                          isActive ? 'text-accent-soft' : 'text-text-primary/40'
                        }`}
                      >
                        {padNumber(index)}
                      </span>
                      <span
                        className={`mt-1 block truncate text-sm font-semibold ${
                          isActive ? 'text-text-primary' : 'text-text-primary/75'
                        }`}
                      >
                        {video.title}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${
                        isActive ? 'bg-accent-soft' : 'bg-text-primary/15'
                      }`}
                    />
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AISection
