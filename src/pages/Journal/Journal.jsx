import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpLeft, CalendarDays, Clock, Compass, Sparkles } from 'lucide-react'
import Seo from '../../components/Seo/Seo'
import { journalArticles, journalAuthor, journalFilters } from '../../data/journalData'
import ArticleCard from './ArticleCard'

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const exploreLinks = [
  {
    to: '/projects',
    label: 'شاهد مشاريعنا',
    hint: 'معرض الأعمال الكامل',
    Icon: Compass,
  },
  {
    to: '/3d',
    label: 'استكشف تصميمات 3D',
    hint: 'جولات تفاعلية 360°',
    Icon: Sparkles,
  },
  {
    to: '/founder',
    label: 'تعرف على المؤسس',
    hint: 'علي خالد عبيد — أثر برايم',
    Icon: ArrowUpLeft,
  },
]

const Journal = () => {
  const [activeFilter, setActiveFilter] = useState('الكل')

  const featured = useMemo(() => journalArticles.find((a) => a.featured) || journalArticles[0], [])
  const articles = useMemo(() => journalArticles.filter((a) => a.id !== featured.id), [featured])

  const filtered = useMemo(() => {
    if (activeFilter === 'الكل') return articles
    return articles.filter((a) => a.category === activeFilter)
  }, [activeFilter, articles])

  const handleFilter = (filter) => {
    setActiveFilter(filter)
  }

  return (
    <main className="relative overflow-hidden bg-bg-primary">
      <Seo
        title="Athar Journal — أفكار ورؤى من أثر برايم"
        description="مجلة أثر برايم الرقمية: مقالات ورؤى حول التصميم الداخلي، التشطيبات، الإضاءة، والخامات لمساعدتك قبل أن تبدأ مشروعك."
        url="/journal"
        keywords={['مجلة', 'تصميم داخلي', 'تشطيبات', 'إضاءة', 'أثر برايم', 'نصائح التصميم']}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div aria-hidden="true" className="pointer-events-none absolute -start-40 top-24 h-96 w-96 rounded-full bg-brand-500/10 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -end-40 top-[40rem] h-96 w-96 rounded-full bg-accent-soft/10 blur-[120px]" />

      <div className="container-site relative pb-24 pt-32 md:pb-28 md:pt-40">
        {/* ============ Hero ============ */}
        <section className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-14 start-1/2 -translate-x-1/2 select-none font-display text-[22vw] font-black leading-none text-text-primary/[0.03] lg:text-[14rem]"
            dir="ltr"
          >
            JOURNAL
          </span>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative mx-auto max-w-3xl text-center"
          >
            <motion.div variants={heroItem} className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-accent-soft" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-soft md:text-xs" dir="ltr">
                Athar Journal / Insights
              </p>
              <span className="h-px w-10 bg-accent-soft" />
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="font-display text-5xl font-black leading-[1.1] text-text-primary sm:text-6xl lg:text-7xl"
            >
              Athar{' '}
              <span className="bg-gradient-to-l from-accent-soft to-accent-strong bg-clip-text text-transparent">
                Journal
              </span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-primary/65 md:text-lg"
            >
              أفكار ورؤى تساعدك على فهم التصميم، التشطيبات، والإضاءة قبل أن تبدأ مشروعك.
            </motion.p>

            <motion.div variants={heroItem} className="mx-auto mt-8 h-px w-24 bg-accent-soft/40" />
          </motion.div>
        </section>

        {/* ============ Featured Article ============ */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mt-20"
          aria-label="المقال المميز"
        >
          <article className="group grid overflow-hidden rounded-[2rem] border border-text-primary/10 bg-bg-card shadow-2xl shadow-bg-primary/30 lg:grid-cols-2">
            <Link
              to={`/journal/${featured.slug}`}
              className="relative block aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[460px]"
              aria-label={`اقرأ المقال المميز: ${featured.title}`}
            >
              <img
                src={featured.image}
                alt={featured.title}
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 transition-opacity duration-500"
                style={{ backgroundImage: 'var(--feature-scrim)' }}
              />
              <span className="absolute start-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-accent-soft/40 bg-bg-primary/85 px-4 py-2 text-[11px] font-bold text-accent-soft backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                المقال المميز
              </span>
              <span className="absolute end-5 top-5 rounded-full border border-text-primary/15 bg-bg-primary/85 px-3 py-1.5 text-[11px] font-bold text-text-primary/70 backdrop-blur-md">
                {featured.category}
              </span>
            </Link>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-text-primary/55">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-accent-soft" />
                  {featured.readingTime}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-accent-soft" />
                  <time dateTime={featured.date}>{featured.date}</time>
                </span>
              </div>

              <h2 className="mt-5 font-display text-2xl font-extrabold leading-[1.35] text-text-primary sm:text-3xl lg:text-4xl">
                <Link
                  to={`/journal/${featured.slug}`}
                  className="transition-colors duration-300 hover:text-accent-soft"
                >
                  {featured.title}
                </Link>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-text-secondary md:text-base">
                {featured.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-soft/40 bg-bg-primary font-display text-lg font-black text-accent-soft">
                  {journalAuthor.name.charAt(0)}
                </span>
                <div>
                  <p className="font-display text-sm font-extrabold text-text-primary">
                    {journalAuthor.name}
                  </p>
                  <p className="text-xs text-text-primary/50">{journalAuthor.role}</p>
                </div>
              </div>

              <Link
                to={`/journal/${featured.slug}`}
                className="group/btn mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-accent-soft px-7 py-3.5 text-sm font-bold text-bg-primary shadow-lg shadow-accent-soft/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft-strong active:scale-[0.97]"
              >
                اقرأ المقال
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-x-1" />
              </Link>
            </div>
          </article>
        </motion.section>

        {/* ============ Filters ============ */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-2.5 md:gap-3"
          role="group"
          aria-label="تصفية المقالات"
        >
          {journalFilters.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilter(filter)}
                aria-pressed={isActive}
                className={`relative rounded-full border px-4 py-2 text-xs font-semibold transition-colors duration-300 active:scale-95 md:px-5 md:py-2.5 md:text-sm ${
                  isActive
                    ? 'border-transparent text-bg-primary'
                    : 'border-text-primary/15 text-text-primary/70 hover:-translate-y-0.5 hover:border-accent-soft/50 hover:text-text-primary'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="journal-filter-pill"
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-full bg-accent-soft shadow-lg shadow-accent-soft/25"
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            )
          })}
        </motion.div>

        {/* ============ Articles Grid ============ */}
        <section aria-label="قائمة المقالات" className="mt-12">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((article, index) => (
                  <ArticleCard key={article.id} article={article} index={index} />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.p
              {...fadeUp}
              className="py-16 text-center text-sm text-text-primary/50"
            >
              لا توجد مقالات في هذا التصنيف بعد.
            </motion.p>
          )}

          <p className="mt-8 text-center text-xs text-text-primary/40">
            {filtered.length} من {articles.length} مقال
          </p>
        </section>

        {/* ============ Editorial CTA band ============ */}
        <section aria-label="استكشف المزيد" className="mt-20">
          <div className="rounded-[2rem] border border-text-primary/10 bg-bg-card/50 px-6 py-12 backdrop-blur-sm sm:px-10">
            <div className="mb-9 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-soft" dir="ltr">
                Continue the Journey
              </p>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-text-primary sm:text-3xl">
                الأفكار هنا، والمشاريع هناك
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">
                كل ما قرأته هنا نُفِّذ بالفعل. تجوّل في أعمالنا وجولاتنا وتعرف على الفريق الذي يقف خلفها.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {exploreLinks.map(({ to, label, hint, Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className="group flex items-center gap-4 rounded-2xl border border-text-primary/10 bg-bg-primary/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-soft/50 hover:shadow-lg hover:shadow-bg-primary/30"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-soft/30 bg-accent-soft/10 text-accent-soft transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-sm font-extrabold text-text-primary transition-colors duration-300 group-hover:text-accent-soft">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-xs text-text-primary/50">{hint}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Journal
