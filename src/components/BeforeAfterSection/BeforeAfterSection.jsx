import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { comparisons } from './comparisonsData'

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

const fadeScale = {
  hidden: { opacity: 0, scale: 0.97, y: 26 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const handleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.35 } },
}

const ComparisonSlider = ({ comparison, pos, setPos, dragging, setDragging }) => {
  const containerRef = useRef(null)

  const updateFromEvent = useCallback(
    (clientX) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const x = clientX - rect.left
      const next = Math.min(100, Math.max(0, (x / rect.width) * 100))
      setPos(next)
    },
    [setPos]
  )

  const handlePointerDown = (event) => {
    event.preventDefault()
    setDragging(true)
    event.currentTarget.setPointerCapture?.(event.pointerId)
    updateFromEvent(event.clientX)
  }

  const handlePointerMove = (event) => {
    if (!dragging) return
    updateFromEvent(event.clientX)
  }

  const handlePointerUp = () => setDragging(false)

  const handleKeyDown = (event) => {
    const step = 4
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setPos((prev) => Math.max(0, prev - step))
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      setPos((prev) => Math.min(100, prev + step))
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-text-primary/10 bg-bg-card shadow-2xl shadow-bg-primary/40 md:aspect-[16/9] ${
        dragging ? 'cursor-grabbing' : 'cursor-col-resize'
      }`}
      style={{ touchAction: 'pan-y' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <img
        src={comparison.after}
        alt={`بعد: ${comparison.title}`}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0" style={{ clipPath: `inset(0 calc(100% - ${pos}%) 0 0)` }}>
        <img
          src={comparison.before}
          alt={`قبل: ${comparison.title}`}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="pointer-events-none absolute left-4 top-4">
        <span className="rounded-full border border-text-primary/15 bg-bg-primary/85 px-4 py-1.5 text-xs font-bold text-text-primary backdrop-blur-md">
          قبل
        </span>
      </div>
      <div className="pointer-events-none absolute right-4 top-4">
        <span className="rounded-full border border-text-primary/15 bg-bg-primary/85 px-4 py-1.5 text-xs font-bold text-accent-soft backdrop-blur-md">
          بعد
        </span>
      </div>

      <div
        className="absolute inset-y-0 z-10"
        style={{ left: `${pos}%` }}
        role="slider"
        aria-label="اسحب للمقارنة بين قبل وبعد"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="absolute inset-y-0 w-[3px] -translate-x-1/2 bg-accent-soft shadow-[0_0_14px_rgba(172,216,245,0.65)]" />

        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            variants={handleIn}
            className={`flex h-11 items-center gap-2.5 rounded-full border border-accent-soft/50 bg-brand-500 px-4 text-text-primary shadow-lg shadow-brand-500/40 transition-all duration-300 ${
              dragging ? 'scale-105 cursor-grabbing' : 'cursor-grab hover:scale-110 hover:shadow-brand-500/60'
            }`}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="h-4 w-px bg-text-primary/40" />
            <ChevronLeft className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const BeforeAfterSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)

  const comparison = comparisons[activeIndex]

  const select = (index) => {
    setActiveIndex(index)
    setPos(50)
  }

  return (
    <section id="before-after" className="relative overflow-hidden bg-bg-primary">
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
              قبل التنفيذ • بعد التنفيذ
            </p>
            <span className="h-px w-10 bg-accent-soft" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-extrabold leading-[1.35] text-text-primary md:text-4xl lg:text-5xl"
          >
            الفرق الذي يصنع <span className="text-accent-soft">أثر</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-primary/65 md:text-lg"
          >
            من الفكرة الأولى إلى التفاصيل النهائية، نحوّل التصور إلى مساحة متكاملة تجمع بين دقة
            التصميم وجودة التنفيذ.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-14 max-w-6xl md:mt-16"
        >
          <motion.div variants={fadeScale} className="relative">
            <span className="pointer-events-none absolute -start-3 -top-3 z-10 h-8 w-8 border-s-2 border-t-2 border-accent-soft/60" />
            <span className="pointer-events-none absolute -end-3 -top-3 z-10 h-8 w-8 border-e-2 border-t-2 border-accent-soft/60" />
            <span className="pointer-events-none absolute -bottom-3 -start-3 z-10 h-8 w-8 border-s-2 border-b-2 border-accent-soft/60" />
            <span className="pointer-events-none absolute -bottom-3 -end-3 z-10 h-8 w-8 border-e-2 border-b-2 border-accent-soft/60" />

            <AnimatePresence mode="wait">
              <motion.div
                key={comparison.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <ComparisonSlider
                  comparison={comparison}
                  pos={pos}
                  setPos={setPos}
                  dragging={dragging}
                  setDragging={setDragging}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="mt-10 grid items-end gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="font-display text-sm font-bold tracking-widest text-accent-soft">
                {comparison.num}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold leading-snug text-text-primary md:text-3xl">
                {comparison.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-primary/60 md:text-base">
                {comparison.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <p className="inline-flex items-center gap-2 text-xs font-semibold text-text-primary/50">
                <span className="h-px w-6 bg-accent-soft/70" />
                اسحب للمقارنة
              </p>

              <div className="flex items-center gap-2.5">
                {comparisons.map((item, index) => {
                  const isActive = activeIndex === index
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => select(index)}
                      aria-pressed={isActive}
                      className={`rounded-lg border px-4 py-2.5 font-display text-sm font-bold transition-all duration-300 active:scale-95 ${
                        isActive
                          ? 'border-accent-soft bg-accent-soft text-bg-primary'
                          : 'border-text-primary/15 text-text-primary/60 hover:-translate-y-0.5 hover:border-accent-soft hover:text-accent-soft'
                      }`}
                    >
                      {item.num}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BeforeAfterSection
