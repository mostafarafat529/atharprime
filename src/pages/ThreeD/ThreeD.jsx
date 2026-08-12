import { motion } from 'framer-motion'
import { ArrowUpLeft, Box, ExternalLink } from 'lucide-react'
import { threeDProjects } from '../../components/ThreeDSection/threeDProjectsData'

const pad = (n) => String(n).padStart(2, '0')

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const ThreeDPage = () => {
  return (
    <main className="relative overflow-hidden bg-bg-primary">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div aria-hidden="true" className="pointer-events-none absolute -start-40 top-24 h-96 w-96 rounded-full bg-brand-500/10 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -end-40 top-[38rem] h-96 w-96 rounded-full bg-accent-soft/10 blur-[120px]" />

      <div className="container-site relative pb-24 pt-32 md:pb-28 md:pt-40">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-accent-soft" />
            <p className="text-xs font-semibold tracking-widest text-accent-soft md:text-sm">
              التصميم قبل التنفيذ
            </p>
            <span className="h-px w-10 bg-accent-soft" />
          </div>

          <h1 className="font-display text-3xl font-extrabold leading-[1.25] text-text-primary sm:text-4xl lg:text-5xl">
            استكشف التصميم
            <span className="block bg-gradient-to-l from-accent-soft to-accent-strong bg-clip-text text-transparent">
              قبل التنفيذ.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-primary/65 md:text-lg">
            جولات ثلاثية الأبعاد حية من داخل كل مساحة — تتحرك بين الغرف، وتستشعر الإضاءة والخامات،
            قبل أن نبدأ العمل على أرض الواقع.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {threeDProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: Math.min(index * 0.06, 0.5) }}
              aria-label={`استكشف ${project.title}`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-text-primary/10 bg-bg-card transition-all duration-500 hover:-translate-y-1 hover:border-accent-soft/50 hover:shadow-xl hover:shadow-bg-primary/40 active:scale-[0.99]"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
              />
              <span
                className="absolute inset-0 transition-opacity duration-500"
                style={{ backgroundImage: 'var(--card-scrim)' }}
              />

              <span className="absolute start-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-accent-soft/40 bg-bg-primary/85 px-3 py-1.5 text-[11px] font-bold text-accent-soft backdrop-blur-md">
                <Box className="h-3.5 w-3.5" />
                360°
              </span>
              <span className="absolute end-3 top-3 z-10 rounded-full border border-text-primary/15 bg-bg-primary/85 px-3 py-1.5 text-[11px] font-bold text-text-primary/70 backdrop-blur-md">
                3D
              </span>
              <span className="absolute start-4 top-12 z-10 text-xs font-bold tracking-widest text-text-primary/60">
                {pad(index + 1)}
              </span>

              <div className="absolute inset-x-0 bottom-0 z-[6] p-5">
                <span className="mb-2 inline-block rounded-full bg-brand-500/90 px-3 py-1 text-[10px] font-bold tracking-widest text-white">
                  {project.category}
                </span>
                <h3 className="font-display text-lg font-bold text-text-primary">{project.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-text-secondary">
                  {project.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-accent-soft opacity-0 transition-all duration-500 group-hover:opacity-100">
                  استكشف التصميم
                  <ExternalLink className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-center gap-5 rounded-3xl border border-text-primary/10 bg-bg-card/50 px-6 py-12 text-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-accent-soft/40 bg-bg-primary text-accent-soft">
            <Box className="h-7 w-7" />
          </span>
          <div>
            <h3 className="font-display text-xl font-extrabold text-text-primary sm:text-2xl">
              التصميم ليس صورة... بل تجربة.
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-text-secondary">
              كل جولة تُفتح في نافذة جديدة من داخل متصفحك — تجوّل بحرية بين المساحات قبل أن نبدأ التنفيذ.
            </p>
          </div>
          <a
            href={threeDProjects[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-accent-soft px-8 py-4 text-sm font-bold text-bg-primary shadow-lg shadow-accent-soft/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft-strong active:scale-[0.97]"
          >
            ابدأ أول جولة
            <ArrowUpLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </main>
  )
}

export default ThreeDPage
