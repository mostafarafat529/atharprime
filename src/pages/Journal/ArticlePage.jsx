import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CalendarDays, ChevronLeft, Clock, Quote } from 'lucide-react'
import Seo from '../../components/Seo/Seo'
import { journalArticles, journalAuthor } from '../../data/journalData'
import ArticleCard from './ArticleCard'

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const renderBlock = (block, index) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={index} className="mt-10 font-display text-2xl font-extrabold leading-snug text-text-primary md:text-[1.75rem]">
          {block.text}
        </h2>
      )
    case 'p':
      return (
        <p key={index} className="mt-5 text-base leading-[1.95] text-text-primary/75 md:text-[17px]">
          {block.text}
        </p>
      )
    case 'quote':
      return (
        <blockquote
          key={index}
          className="relative mt-8 rounded-2xl border border-accent-soft/30 bg-accent-soft/[0.06] p-6 ps-7 md:p-7 md:ps-8"
        >
          <span className="absolute start-0 top-0 h-full w-1 rounded-full bg-accent-soft" />
          <Quote className="mb-3 h-6 w-6 text-accent-soft" aria-hidden="true" />
          <p className="font-display text-base font-bold leading-relaxed text-text-primary md:text-lg">
            {block.text}
          </p>
        </blockquote>
      )
    case 'img':
      return (
        <figure key={index} className="group mt-10">
          <div className="overflow-hidden rounded-2xl border border-text-primary/10 shadow-xl shadow-bg-primary/20">
            <img
              src={block.src}
              alt={block.alt}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center text-xs text-text-primary/45">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    case 'cta':
      return (
        <Link
          key={`${block.to}-${index}`}
          to={block.to}
          className="group mt-9 inline-flex items-center gap-3 rounded-full border border-accent-soft/40 bg-accent-soft/10 px-6 py-3.5 text-sm font-bold text-accent-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-soft hover:bg-accent-soft hover:text-bg-primary active:scale-[0.97]"
        >
          {block.label}
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        </Link>
      )
    default:
      return null
  }
}

const ArticlePage = () => {
  const { slug } = useParams()

  const article = useMemo(
    () => journalArticles.find((a) => a.slug === slug) || null,
    [slug]
  )

  const related = useMemo(() => {
    if (!article) return []
    const sameCategory = journalArticles.filter(
      (a) => a.id !== article.id && a.category === article.category
    )
    const others = journalArticles.filter(
      (a) => a.id !== article.id && a.category !== article.category
    )
    return [...sameCategory, ...others].slice(0, 3)
  }, [article])

  if (!article) {
    return (
      <main className="relative overflow-hidden bg-bg-primary">
        <Seo title="مقال غير موجود — مجلة انطلاقة" description="المقال الذي تبحث عنه غير موجود." url={`/journal/${slug}`} />
        <div className="container-site flex min-h-[70vh] flex-col items-center justify-center pb-24 pt-32 text-center">
          <p className="font-display text-6xl font-black text-accent-soft">404</p>
          <h1 className="mt-4 font-display text-2xl font-extrabold text-text-primary">
            هذا المقال غير موجود
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
            ربما تغيّر الرابط أو حُذف المقال. يمكنك العودة إلى مجلة انطلاقة لتصفح جميع المقالات.
          </p>
          <Link
            to="/journal"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent-soft px-7 py-3.5 text-sm font-bold text-bg-primary shadow-lg shadow-accent-soft/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
          >
            العودة إلى المجلة
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="relative overflow-hidden bg-bg-primary">
      <Seo
        title={`${article.title} — مجلة انطلاقة`}
        description={article.excerpt}
        url={`/journal/${article.slug}`}
        image={article.image}
        keywords={article.keywords}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div aria-hidden="true" className="pointer-events-none absolute -start-40 top-24 h-96 w-96 rounded-full bg-brand-500/10 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -end-40 top-[52rem] h-96 w-96 rounded-full bg-accent-soft/10 blur-[120px]" />

      <div className="container-site relative pb-24 pt-32 md:pb-28 md:pt-36">
        {/* Breadcrumb */}
        <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-xs font-semibold text-text-primary/50 md:text-sm">
          <Link to="/journal" className="transition-colors duration-300 hover:text-accent-soft">
            مجلة انطلاقة
          </Link>
          <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-accent-soft">{article.category}</span>
        </nav>

        {/* Header */}
        <header className="mx-auto mt-8 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-accent-soft" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-soft" dir="ltr">
              انطلاقة / {article.category}
            </span>
          </div>

          <motion.h1
            {...fadeUp}
            className="mt-5 font-display text-3xl font-black leading-[1.3] text-text-primary sm:text-4xl md:text-[2.75rem]"
          >
            {article.title}
          </motion.h1>

          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="mt-5 text-base leading-relaxed text-text-primary/65 md:text-lg">
            {article.excerpt}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-text-primary/10 py-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-soft/40 bg-bg-card font-display text-base font-black text-accent-soft">
                {journalAuthor.name.charAt(0)}
              </span>
              <div>
                <p className="text-xs text-text-primary/45">بقلم</p>
                <p className="font-display text-sm font-extrabold text-text-primary">{journalAuthor.name}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-primary/55">
              <CalendarDays className="h-4 w-4 text-accent-soft" />
              <time dateTime={article.date}>{article.date}</time>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-primary/55">
              <Clock className="h-4 w-4 text-accent-soft" />
              {article.readingTime} قراءة
            </span>
          </motion.div>
        </header>

        {/* Hero image */}
        <motion.figure
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-text-primary/10 shadow-2xl shadow-bg-primary/30">
            <img
              src={article.image}
              alt={article.title}
              className="aspect-[21/10] w-full object-cover"
            />
          </div>
        </motion.figure>

        {/* Content */}
        <article className="mx-auto mt-4 max-w-3xl" dir="rtl">
          {article.content.map((block, index) => renderBlock(block, index))}

          {/* Keywords */}
          {article.keywords?.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-text-primary/10 pt-7">
              <span className="text-xs font-bold text-text-primary/45">كلمات مفتاحية:</span>
              {article.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-text-primary/15 px-3.5 py-1.5 text-[11px] font-semibold text-text-secondary"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}

          {/* Article CTA icons legend — a clean sign-off */}
          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-text-primary/10 bg-bg-card/60 p-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-soft/40 bg-bg-primary font-display text-lg font-black text-accent-soft">
              {journalAuthor.name.charAt(0)}
            </span>
            <p className="text-sm leading-relaxed text-text-secondary">
              {journalAuthor.name} — {journalAuthor.role}. نتشرف بمرافقتك في مشروعك القادم من الفكرة حتى التسليم.
            </p>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section aria-label="مقالات ذات صلة" className="mt-24">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-soft" dir="ltr">
                  Keep Reading
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-text-primary sm:text-3xl">
                  مقالات ذات صلة
                </h2>
              </div>
              <Link
                to="/journal"
                className="group hidden shrink-0 items-center gap-2 text-sm font-bold text-accent-soft transition-colors duration-300 hover:text-accent-soft-strong sm:inline-flex"
              >
                كل المقالات
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedArticle, index) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default ArticlePage
