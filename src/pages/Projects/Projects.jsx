import { useCallback, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import {
  ArrowDown,
  Box,
  ChevronLeft,
  ChevronRight,
  Images,
  Plus,
} from 'lucide-react'
import { projects, projectFilters, typeLabels } from '../../components/ProjectsSection/projectsData'
import ProjectModal from '../../components/ProjectsSection/ProjectModal'

const INITIAL_VISIBLE = 6
const REVEAL_STEP = 6

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? -60 : 60, opacity: 0, scale: 1.01 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction) => ({ x: direction > 0 ? 60 : -60, opacity: 0, scale: 1.01 }),
}

const formatNumber = (n) => String(n).padStart(2, '0')

const ProjectsPage = () => {
  const railRef = useRef(null)
  const location = useLocation()

  const openProjectOnLoad = useMemo(() => {
    const openId = location.state?.openProjectId
    if (!openId) return null
    return projects.find((project) => project.id === openId) || null
  }, [location.state])

  const [activeFilter, setActiveFilter] = useState('الكل')
  const [activeIndex, setActiveIndex] = useState(
    openProjectOnLoad ? projects.indexOf(openProjectOnLoad) : 0
  )
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)
  const [direction, setDirection] = useState(0)
  const [activeProject, setActiveProject] = useState(openProjectOnLoad)
  const [activeImage, setActiveImage] = useState(0)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'الكل') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const visibleProjects = useMemo(
    () => filteredProjects.slice(0, visibleCount),
    [filteredProjects, visibleCount]
  )

  const totalVisible = visibleProjects.length
  const safeIndex = totalVisible > 0 ? Math.min(activeIndex, totalVisible - 1) : 0

  const openProject = useCallback((project, imageIndex = 0) => {
    setActiveProject(project)
    setActiveImage(imageIndex)
  }, [])

  const closeProject = useCallback(() => {
    setActiveProject(null)
    setActiveImage(0)
  }, [])

  const handleFilter = (filter) => {
    if (filter === activeFilter) return
    setActiveFilter(filter)
    setActiveIndex(0)
    setVisibleCount(INITIAL_VISIBLE)
    setDirection(0)
    railRef.current?.scrollTo?.({ left: 0, behavior: 'smooth' })
  }

  const goTo = (index) => {
    if (index === safeIndex) return
    setDirection(index > safeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const goNext = () => {
    if (totalVisible <= 1) return
    setDirection(1)
    setActiveIndex((safeIndex + 1) % totalVisible)
  }

  const goPrev = () => {
    if (totalVisible <= 1) return
    setDirection(-1)
    setActiveIndex((safeIndex - 1 + totalVisible) % totalVisible)
  }

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + REVEAL_STEP, filteredProjects.length))
  }

  const active = visibleProjects[safeIndex] || visibleProjects[0]
  const hasMore = visibleCount < filteredProjects.length

  return (
    <main className="relative overflow-hidden bg-bg-primary">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div aria-hidden="true" className="pointer-events-none absolute -start-40 top-32 h-96 w-96 rounded-full bg-brand-500/10 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -end-40 top-[34rem] h-96 w-96 rounded-full bg-accent-soft/10 blur-[120px]" />

      <div className="container-site relative pb-24 pt-32 md:pb-28 md:pt-40">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-accent-soft" />
            <p className="text-xs font-semibold tracking-widest text-accent-soft md:text-sm">
              أعمالنا
            </p>
            <span className="h-px w-10 bg-accent-soft" />
          </div>

          <h1 className="font-display text-3xl font-extrabold leading-[1.3] text-text-primary sm:text-4xl lg:text-5xl">
            مساحات صممناها لتُرى...
            <br />
            <span className="bg-gradient-to-l from-accent-soft to-accent-strong bg-clip-text text-transparent">
              ونفذناها لتُعاش.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-primary/65 md:text-lg">
            المحفظة الكاملة — من المخططات الثنائية الأبعاد والتصاميم التفاعلية ثلاثية الأبعاد،
            إلى التشطيبات الفاخرة المنفذة على أرض الواقع. تصفّح عبر السلايدر أو انتقل مباشرة بالأرقام.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2.5 md:gap-3"
        >
          {projectFilters.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilter(filter)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 active:scale-95 md:px-5 md:py-2.5 md:text-sm ${
                  isActive
                    ? 'border-accent-soft bg-accent-soft text-bg-primary shadow-lg shadow-accent-soft/20'
                    : 'border-text-primary/15 text-text-primary/70 hover:-translate-y-0.5 hover:border-accent-soft/50 hover:text-text-primary'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </motion.div>

        {active && (
          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-start">
            {/* ============ Slider ============ */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-text-primary/10 bg-bg-card shadow-[0_24px_70px_-20px_rgba(3,13,27,0.85)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] md:aspect-[21/11]">
                <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                  <motion.img
                    key={active.id}
                    src={active.image}
                    alt={active.title}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{ backgroundImage: 'var(--card-scrim)' }}
                />

                <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-3 p-4 sm:p-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-soft/40 bg-bg-primary/85 px-3 py-1.5 text-[11px] font-bold text-accent-soft backdrop-blur-md">
                    {active.is3D ? <Box className="h-3.5 w-3.5" /> : <Images className="h-3.5 w-3.5" />}
                    {typeLabels[active.type]}
                  </span>
                  <span dir="ltr" className="rounded-full border border-text-primary/15 bg-bg-primary/85 px-3 py-1.5 font-display text-xs font-bold tracking-widest text-text-primary/70 backdrop-blur-md">
                    {formatNumber(safeIndex + 1)} / {formatNumber(totalVisible)}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 p-4 pb-5 sm:p-6 sm:pb-7">
                  <p className="text-[11px] font-semibold tracking-wide text-accent-soft sm:text-xs">
                    {active.category}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-extrabold leading-snug text-text-primary sm:text-2xl md:text-3xl">
                    {active.title}
                  </h2>
                  <p className="mt-2 hidden max-w-2xl text-sm leading-relaxed text-text-primary/65 md:block md:text-base">
                    {active.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="العنصر السابق"
                  className="absolute start-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-text-primary/20 bg-bg-primary/80 text-text-primary backdrop-blur-md transition-all duration-300 hover:border-accent-soft/60 hover:text-accent-soft active:scale-90 sm:h-12 sm:w-12"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="العنصر التالي"
                  className="absolute end-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-text-primary/20 bg-bg-primary/80 text-text-primary backdrop-blur-md transition-all duration-300 hover:border-accent-soft/60 hover:text-accent-soft active:scale-90 sm:h-12 sm:w-12"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4 border-t border-text-primary/10 p-4 sm:p-5">
                <p className="text-sm leading-relaxed text-text-primary/65 md:hidden">
                  {active.description}
                </p>

                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => openProject(active)}
                    className="group inline-flex items-center gap-2 rounded-full bg-accent-soft px-5 py-2.5 text-xs font-bold text-bg-primary shadow-lg shadow-accent-soft/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft-strong active:scale-[0.97] sm:px-6 sm:text-sm"
                  >
                    {active.is3D ? 'استكشف التصميم 360°' : 'عرض التفاصيل'}
                  </button>

                  {active.images?.length > 1 && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-primary/50">
                      <Images className="h-4 w-4" />
                      {active.images.length} صور
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            {/* ============ Side: info + thumbnails ============ */}
            <motion.aside
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="rounded-3xl border border-text-primary/10 bg-bg-card/60 p-5 backdrop-blur-sm sm:p-6">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="h-8 w-1 rounded-full bg-accent-soft" />
                  <h3 className="font-display text-lg font-extrabold text-text-primary">
                    {active.title}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-accent-soft/30 bg-accent-soft/10 px-3 py-1 text-[11px] font-bold text-accent-soft">
                    {active.category}
                  </span>
                  <span className="rounded-full border border-text-primary/15 px-3 py-1 text-[11px] font-semibold text-text-primary/60">
                    {typeLabels[active.type]}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-primary/65 md:text-base">
                  {active.description}
                </p>
              </div>

              <div className="rounded-3xl border border-text-primary/10 bg-bg-card/60 p-5 backdrop-blur-sm sm:p-6">
                <p className="mb-3 text-xs font-bold tracking-wide text-text-primary/50">
                  صور المشروع
                </p>
                {active.images?.length > 0 ? (
                  <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 lg:grid-cols-3">
                    {active.images.map((img, i) => (
                      <button
                        key={`${active.id}-${i}`}
                        type="button"
                        onClick={() => openProject(active, i)}
                        aria-label={`عرض الصورة ${i + 1}`}
                        className={`group relative aspect-[4/3] overflow-hidden rounded-xl border bg-bg-primary transition-all duration-300 hover:-translate-y-0.5 ${
                          i === activeImage && activeProject === active
                            ? 'border-accent-soft shadow-lg shadow-accent-soft/20'
                            : 'border-text-primary/10 hover:border-accent-soft/40'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${active.title} — ${i + 1}`}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-text-primary/50">لا توجد صور إضافية.</p>
                )}
              </div>
            </motion.aside>
          </div>
        )}

        {/* ============ Numbers rail + More ============ */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div
            ref={railRef}
            className="flex items-center gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible"
          >
            {visibleProjects.map((project, index) => {
              const isActive = index === safeIndex
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`المشروع ${index + 1}: ${project.title}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex h-11 w-12 shrink-0 items-center justify-center rounded-xl border font-display text-sm font-bold transition-all duration-300 active:scale-95 md:h-12 md:w-14 ${
                    isActive
                      ? 'border-accent-soft bg-accent-soft text-bg-primary shadow-lg shadow-accent-soft/25'
                      : 'border-text-primary/15 text-text-primary/60 hover:-translate-y-0.5 hover:border-accent-soft/50 hover:text-accent-soft'
                  }`}
                >
                  {formatNumber(index + 1)}
                </button>
              )
            })}

            {hasMore && (
              <button
                type="button"
                onClick={showMore}
                className="flex h-11 w-auto shrink-0 items-center gap-1.5 rounded-xl border border-dashed border-accent-soft/50 px-4 font-display text-sm font-bold text-accent-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-soft hover:bg-accent-soft/10 active:scale-95 md:h-12"
              >
                <Plus className="h-4 w-4" />
                المزيد
              </button>
            )}
          </div>
          <p className="mt-3 text-center text-xs text-text-primary/45">
            {totalVisible} من {filteredProjects.length} مشروع
          </p>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-text-primary/15 px-8 py-4 text-sm font-bold text-text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-soft/50 hover:text-accent-soft active:scale-[0.97]"
          >
            ابدأ مشروعك الآن
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1.5" />
          </Link>
        </div>
      </div>

      <ProjectModal project={activeProject} initialImage={activeImage} onClose={closeProject} />
    </main>
  )
}

export default ProjectsPage
