import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play } from 'lucide-react'
import founderVideo from '../../assets/videos/founder/WhatsApp Video 2026-08-13 at 1.01.47 AM.mp4'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const videoUp = {
  hidden: { opacity: 0, y: 44, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: 'easeOut' } },
}

const playIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.25 },
  },
}

const VideoSection = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    videoRef.current?.play()
  }

  return (
    <section id="vision" className="relative overflow-hidden bg-bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]"
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
              رؤيتنا
            </p>
            <span className="h-px w-10 bg-accent-soft" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-extrabold leading-[1.35] text-text-primary md:text-4xl lg:text-5xl"
          >
            حين تتحول الفكرة إلى <span className="text-accent-soft">مشهد.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-primary/65 md:text-lg"
          >
            في انطلاقة، لا نكتفي بتنفيذ المساحات؛ نحوّل الأفكار والتصورات إلى تفاصيل حقيقية تجمع
            بين جمال التصميم، دقة التنفيذ، وجودة التشطيب.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-14 max-w-5xl md:mt-16"
        >
          <motion.div variants={videoUp} className="group relative">
            <span className="pointer-events-none absolute -start-3 -top-3 z-10 h-8 w-8 border-s-2 border-t-2 border-accent-soft/60" />
            <span className="pointer-events-none absolute -end-3 -top-3 z-10 h-8 w-8 border-e-2 border-t-2 border-accent-soft/60" />
            <span className="pointer-events-none absolute -bottom-3 -start-3 z-10 h-8 w-8 border-s-2 border-b-2 border-accent-soft/60" />
            <span className="pointer-events-none absolute -bottom-3 -end-3 z-10 h-8 w-8 border-e-2 border-b-2 border-accent-soft/60" />

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-text-primary/10 bg-bg-card shadow-2xl shadow-bg-primary/40">
              <video
                ref={videoRef}
                src={founderVideo}
                className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                  isPlaying ? '' : 'group-hover:scale-[1.03]'
                }`}
                preload="none"
                playsInline
                controls={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                aria-label="فيديو توضيحي عن رؤية وانطلاقة"
              />

              <AnimatePresence>
                {!isPlaying && (
                  <motion.button
                    type="button"
                    onClick={handlePlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    aria-label="تشغيل الفيديو"
                    className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
                    style={{ backgroundImage: 'var(--video-scrim)' }}
                  >
                    <motion.span
                      variants={playIn}
                      initial="hidden"
                      animate="show"
                      className="relative flex h-20 w-20 items-center justify-center transition-transform duration-300 active:scale-90 md:h-24 md:w-24"
                    >
                      <span className="absolute inset-0 rounded-full border border-accent-soft/30 transition-colors duration-500 group-hover:border-accent-soft" />
                      <span className="absolute inset-0 rounded-full bg-brand-500/25 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/30 transition-transform duration-500 group-hover:scale-110 md:h-16 md:w-16">
                        <Play className="ms-1 h-6 w-6 fill-current md:h-7 md:w-7" />
                      </span>
                    </motion.span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex items-center justify-between gap-4 text-[11px] font-semibold tracking-wide md:text-xs"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-soft" />
              <p className="text-text-primary/60">انطلاقة | من الفكرة إلى التنفيذ</p>
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <p className="text-accent-soft">مشاهدة الفيديو</p>
              <span className="h-px w-8 bg-accent-soft" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSection
