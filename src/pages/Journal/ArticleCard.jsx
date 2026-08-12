import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react'

const ArticleCard = ({ article, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: Math.min(index * 0.06, 0.5) }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-text-primary/10 bg-bg-card transition-all duration-500 hover:-translate-y-1 hover:border-accent-soft/40 hover:shadow-xl hover:shadow-bg-primary/30"
    >
      <Link
        to={`/journal/${article.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
        aria-label={`اقرأ المقال: ${article.title}`}
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 transition-opacity duration-500"
          style={{ backgroundImage: 'var(--card-scrim)' }}
        />
        <span className="absolute start-4 top-4 rounded-full border border-accent-soft/40 bg-bg-primary/85 px-3 py-1.5 text-[11px] font-bold text-accent-soft backdrop-blur-md">
          {article.category}
        </span>
        <span className="absolute end-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-text-primary/15 bg-bg-primary/85 px-3 py-1.5 text-[11px] font-semibold text-text-primary/70 backdrop-blur-md">
          <Clock className="h-3 w-3" />
          {article.readingTime}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2.5 text-xs font-semibold text-text-primary/55">
          <CalendarDays className="h-3.5 w-3.5 text-accent-soft" />
          <time dateTime={article.date}>{article.date}</time>
        </div>

        <h3 className="font-display text-lg font-extrabold leading-snug text-text-primary transition-colors duration-300 group-hover:text-accent-soft sm:text-xl">
          <Link to={`/journal/${article.slug}`}>{article.title}</Link>
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-text-secondary">{article.excerpt}</p>

        <Link
          to={`/journal/${article.slug}`}
          className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-accent-soft transition-colors duration-300 hover:text-accent-soft-strong"
        >
          اقرأ المقال
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        </Link>
      </div>
    </motion.article>
  )
}

export default ArticleCard
