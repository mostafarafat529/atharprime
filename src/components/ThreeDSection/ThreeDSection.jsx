import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowUpLeft, Globe2 } from 'lucide-react'
import { threeDProjects } from './threeDProjectsData'
import ThreeDProjectCard from './ThreeDProjectCard'

const pad = (n) => String(n).padStart(2, '0')

const featuredVariants = {
  initial: { opacity: 0, scale: 0.985 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.985 },
}

const ThreeDSection = () => {
  const [activeId, setActiveId] = useState(threeDProjects[0].id)
  const active = threeDProjects.find((p) => p.id === activeId) || threeDProjects[0]
  const total = threeDProjects.length

  const handleSelect = useCallback((id) => setActiveId(id), [])

  return (
    <section
      id="3d"
      aria-labelledby="3d-heading"
      className="relative overflow-hidden bg-bg-primary py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -start-32 top-10 h-80 w-80 rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="absolute -end-32 bottom-10 h-80 w-80 rounded-full bg-accent-soft/10 blur-[100px]" />
      </div>

      <div className="container-site relative">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-accent-soft"
            >
              <span className="h-px w-10 bg-brand-500" />
              التصميم قبل التنفيذ
            </motion.p>

            <motion.h2
              id="3d-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl font-extrabold leading-[1.1] text-text-primary sm:text-5xl lg:text-[3.4rem]"
            >
              استكشف مساحاتنا
              <span className="block bg-gradient-to-l from-accent-soft to-accent-strong bg-clip-text text-transparent">
                ثلاثية الأبعاد
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl leading-8 text-text-secondary"
            >
              ادخل إلى داخل التصميم قبل أن يبدأ التنفيذ، وتجوّل بحرية بين الغرف والزوايا —
              إضاءة، خامات، وفراغ حقيقي يمكنك استشعاره.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-text-primary px-6 py-3 text-sm font-bold text-bg-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft active:scale-[0.97]"
              >
                <Globe2 className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                {total}+ تجربة تصميم تفاعلية
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mt-2 flex items-center justify-center"
          >
            <span className="pointer-events-none absolute start-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-[80px]" />
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-44 w-44 items-center justify-center rounded-full border border-accent-soft/40 bg-bg-card/40 backdrop-blur-sm transition-all duration-500 hover:scale-[1.04] hover:border-accent-soft hover:shadow-[0_0_44px_rgba(172,216,245,0.25)] active:scale-95"
            >
              <span className="absolute -inset-4 rounded-full border border-dashed border-brand-500/50 transition-transform duration-500 group-hover:rotate-12" />
              <span className="relative text-4xl font-extrabold text-text-primary">360°</span>
              <span className="absolute -bottom-3 rounded-full bg-brand-500 px-4 py-1 text-[10px] font-bold tracking-widest text-white transition-colors duration-500 group-hover:bg-accent-soft group-hover:text-bg-primary">
                جولة تفاعلية
              </span>
            </a>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <span className="pointer-events-none absolute -top-10 start-1/2 z-0 -translate-x-1/2 select-none text-[7rem] font-extrabold leading-none text-text-primary/[0.04]">
              {pad(active.id)}
            </span>
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl border border-text-primary/10 shadow-2xl shadow-bg-primary/50 transition-all duration-500 hover:border-accent-soft/40 hover:shadow-[0_30px_60px_-20px_rgba(16,96,160,0.35)] active:scale-[0.99] sm:aspect-video"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.image}
                  alt={active.title}
                  loading="lazy"
                  variants={featuredVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <span
                className="absolute inset-0"
                style={{ backgroundImage: 'var(--feature-scrim)' }}
              />

              <span className="absolute end-5 top-5 flex items-center gap-2 rounded-full border border-accent-soft/50 bg-bg-primary/60 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-accent-soft backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-soft" />
                </span>
                3D INTERACTIVE
              </span>

              <span className="absolute start-6 top-6 text-xs font-bold tracking-widest text-text-primary/60">
                {pad(active.id)} <span className="text-text-primary/30">/ {pad(total)}</span>
              </span>

              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 sm:p-8">
                <div className="min-w-0">
                  <span className="mb-3 inline-block rounded-full bg-brand-500/90 px-3 py-1 text-[10px] font-bold tracking-widest text-white">
                    {active.category}
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={active.id}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4 }}
                      className="text-2xl font-extrabold text-text-primary sm:text-3xl"
                    >
                      {active.title}
                    </motion.h3>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={active.id}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4, delay: 0.08 }}
                      className="mt-2 max-w-md text-sm leading-6 text-text-secondary"
                    >
                      {active.description}
                    </motion.p>
                  </AnimatePresence>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-text-primary px-6 py-3 text-sm font-bold text-bg-primary transition-colors duration-300 group-hover:bg-accent-soft">
                  ابدأ الجولة
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </span>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-4 lg:max-h-[560px] lg:flex-col lg:snap-none lg:overflow-y-auto lg:pb-0 lg:pe-1"
          >
            {threeDProjects.map((project, index) => (
              <ThreeDProjectCard
                key={project.id}
                project={project}
                index={index}
                isActive={project.id === active.id}
                onSelect={handleSelect}
              />
            ))}
            <div className="mt-8 text-center lg:text-start">
              <p className="text-lg font-bold leading-8 text-text-primary">
                التصميم ليس صورة... بل تجربة.
              </p>
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-3 rounded-full bg-brand-500 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft hover:text-bg-primary active:scale-[0.97]"
              >
                ابدأ جولتك الآن
                <ArrowUpLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ThreeDSection
