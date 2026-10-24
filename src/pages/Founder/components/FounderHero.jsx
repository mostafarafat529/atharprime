import { motion } from 'framer-motion'
import { founder, founderImageSlots } from '../../../data/founder'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const imageReveal = {
  hidden: { opacity: 0, y: 44, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
}

const FounderHero = () => {
  return (
    <section className="relative overflow-hidden bg-bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 start-0 z-0 select-none font-display text-[36vw] font-black leading-none text-text-primary/[0.03] lg:text-[20rem]"
      >
        أثر
      </span>

      <div className="container-site relative z-10 grid items-center gap-20 pb-36 pt-32 md:pt-44 lg:grid-cols-12 lg:gap-8">
        {/* Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-6"
        >
          <motion.div variants={item} className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-accent-soft" />
            <span
              dir="ltr"
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-text-secondary md:text-xs"
            >
              Founder — انطلاقة
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-black leading-[1.12] text-text-primary"
          >
            علي خالد
            <br />
            <span className="text-accent-soft">عبيد</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-display text-xl font-bold text-text-secondary md:text-2xl"
          >
            {founder.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-base leading-relaxed text-text-primary/70 md:text-lg"
          >
            {founder.tagline} — رؤية تجمع بين العين المدربة على التفاصيل، والعزيمة التي لا ترضى إلا
            بأجود تنفيذ.
          </motion.p>

          <motion.div
            variants={item}
            dir="ltr"
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-text-primary/45 md:text-[11px]"
          >
            <span>Architecture</span>
            <span className="text-accent-soft">•</span>
            <span>Finishing</span>
            <span className="text-accent-soft">•</span>
            <span>Construction</span>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="show"
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto w-full max-w-[540px]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-2xl border border-accent-soft/25 md:-inset-6"
            />

            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-bg-primary/40 ring-1 ring-text-primary/10">
              <img
                src={founderImageSlots.heroMain}
                alt="علي خالد عبيد — مؤسس انطلاقة"
                loading="eager"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>

            {founderImageSlots.heroDetail && (
              <motion.img
                src={founderImageSlots.heroDetail}
                alt="تفاصيل من عمل انطلاقة"
                loading="lazy"
                initial={{ opacity: 0, y: 24, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -4 }}
                transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
                className="absolute -bottom-12 -start-5 hidden w-40 rounded-xl border-4 border-bg-primary object-cover shadow-xl shadow-bg-primary/30 sm:block md:w-52"
              />
            )}

            <div className="absolute -bottom-9 end-2 rounded-xl border border-text-primary/10 bg-bg-card/90 px-5 py-3.5 backdrop-blur-md">
              <span
                dir="ltr"
                className="text-[9px] font-semibold uppercase tracking-[0.3em] text-text-primary/45"
              >
                انطلاقة
              </span>
              <p className="mt-1 font-display text-sm font-bold text-text-primary">
                مؤسس الشركة
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FounderHero
