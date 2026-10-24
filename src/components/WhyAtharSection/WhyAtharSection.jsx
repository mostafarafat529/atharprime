import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { whyAtharFeatures } from './whyAtharData'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const lineGrow = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1.1, ease: 'easeInOut' } },
}

const WhyAtharSection = () => {
  const lastIndex = whyAtharFeatures.length - 1

  return (
    <section id="why" className="relative overflow-hidden bg-bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-16 select-none whitespace-nowrap text-center font-display text-[20vw] font-black leading-none tracking-tight text-text-primary/[0.04] md:text-[13rem]"
      >
        انطلاقة
      </span>

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
              لماذا انطلاقة؟
            </p>
            <span className="h-px w-10 bg-accent-soft" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-extrabold leading-[1.35] text-text-primary md:text-4xl lg:text-5xl"
          >
            لأن التفاصيل هي التي <span className="text-accent-soft">تصنع الأثر.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-primary/65 md:text-lg"
          >
            في انطلاقة، لا نتعامل مع التشطيبات والمقاولات باعتبارها مجرد تنفيذ، بل نبدأ من فهم
            فكرتك، ونطوّرها إلى تصور واضح، ثم نحولها إلى مساحة متكاملة تجمع بين التصميم، جودة
            التنفيذ، ودقة التفاصيل.
          </motion.p>
        </motion.div>

        <motion.div
          variants={lineGrow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          style={{ transformOrigin: 'center' }}
          className="mx-auto mt-12 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-accent-soft/60 to-transparent md:mt-14"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:mt-14 lg:grid-cols-6 lg:gap-6"
        >
          {whyAtharFeatures.map((feature, index) => {
            const isLast = index === lastIndex
            return (
              <motion.article
                key={feature.num}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-2xl border border-text-primary/10 bg-bg-card/50 transition-all duration-500 hover:-translate-y-1 hover:border-accent-soft hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)] hover:shadow-brand-500/10 ${
                  feature.span
                } ${isLast ? 'md:col-span-2 lg:col-span-6' : ''}`}
              >
                <span className="absolute inset-x-0 top-0 h-px w-10 bg-accent-soft transition-all duration-500 group-hover:w-full" />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -end-6 -top-6 h-24 w-24 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/10"
                />

                <div
                  className={`flex h-full flex-col ${
                    isLast
                      ? 'flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center md:p-8'
                      : 'p-6 md:p-8'
                  }`}
                >
                  <p className="font-display text-5xl font-black leading-none text-text-primary/[0.07] transition-all duration-500 group-hover:-translate-y-1 group-hover:text-accent-soft/20 md:text-6xl">
                    {feature.num}
                  </p>

                  <div className={isLast ? 'md:flex-1' : 'mt-4'}>
                    <h3 className="font-display text-lg font-bold text-text-primary transition-colors duration-300 group-hover:text-accent-soft md:text-xl">
                      {feature.title}
                    </h3>
                    <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-text-primary/55 md:text-base">
                      {feature.description}
                    </p>
                  </div>

                  {isLast && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px w-16 shrink-0 bg-accent-soft transition-all duration-500 group-hover:w-24 md:block"
                    />
                  )}
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-16 flex flex-col items-center gap-6 text-center md:mt-20"
        >
          <motion.p
            variants={fadeUp}
            className="font-display text-2xl font-bold text-text-primary md:text-3xl"
          >
            فكرتك تبدأ <span className="text-accent-soft">من هنا.</span>
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-accent-soft px-8 py-4 text-sm font-bold text-bg-primary shadow-lg shadow-accent-soft/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-text-primary hover:shadow-accent-soft/40 active:scale-[0.97] md:px-10 md:text-base"
          >
            ابدأ مشروعك
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1.5 md:h-5 md:w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyAtharSection
