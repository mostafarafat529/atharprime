import { motion } from 'framer-motion'
import { processSteps } from './processData'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const ProcessSection = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-bg-primary">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]" />

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
              طريقة عملنا
            </p>
            <span className="h-px w-10 bg-accent-soft" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-extrabold leading-[1.35] text-text-primary md:text-4xl lg:text-5xl"
          >
            رحلة مشروعك
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-primary/65 md:text-lg"
          >
            من أول فكرة حتى التسليم النهائي، نرافقك في كل خطوة.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-16 hidden lg:block"
        >
          <div className="absolute inset-x-0 top-7 h-px bg-text-primary/10" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="absolute inset-x-0 top-7 h-[3px] origin-right bg-gradient-to-l from-brand-500 via-brand-500 to-brand-300"
          />

          <div className="relative grid grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-text-primary/15 bg-bg-card/80 font-display text-sm font-bold text-accent-soft transition-all duration-400 group-hover:-translate-y-1 group-hover:border-accent-soft/60 group-hover:shadow-[0_0_0_6px_rgba(172,216,245,0.12)]">
                  {step.num}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-text-primary transition-colors duration-300 group-hover:text-accent-soft">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-text-primary/55 transition-colors duration-300 group-hover:text-text-primary/75">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mt-12 lg:hidden"
        >
          <div className="absolute bottom-3 start-[27px] top-3 w-px bg-text-primary/10" />

          <div className="space-y-10">
            {processSteps.map((step) => (
              <motion.div key={step.num} variants={fadeUp} className="group relative flex gap-5">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-text-primary/15 bg-bg-card/80 font-display text-sm font-bold text-accent-soft transition-all duration-400 group-hover:border-accent-soft/60 group-hover:shadow-[0_0_0_6px_rgba(172,216,245,0.12)]">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-lg font-bold leading-snug text-text-primary transition-colors duration-300 group-hover:text-accent-soft">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-primary/55 transition-colors duration-300 group-hover:text-text-primary/75">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
