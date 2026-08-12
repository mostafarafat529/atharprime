import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, Check, ChevronDown } from 'lucide-react'
import { services } from './servicesData'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => setOpenIndex((prev) => (prev === index ? null : index))

  return (
    <section id="services" className="relative overflow-hidden bg-bg-primary">
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
            <p className="text-xs font-semibold tracking-widest text-accent-soft md:text-sm">خدماتنا</p>
            <span className="h-px w-10 bg-accent-soft" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-extrabold leading-[1.35] text-text-primary md:text-4xl lg:text-5xl"
          >
            حلول متكاملة لمساحتك...
            <br />
            <span className="text-accent-soft">من الفكرة إلى التنفيذ.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-primary/65 md:text-lg"
          >
            نقدم حلولًا متكاملة في التصميم والتشطيبات والمقاولات، مع اهتمام دقيق بكل تفصيلة من مراحل
            المشروع.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          {services.map((service, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="border-b border-text-primary/10"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="group grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-5 py-6 text-start md:py-7"
                >
                  <span
                    className={`font-display text-sm font-bold tabular-nums transition-colors duration-500 md:text-base ${
                      isOpen
                        ? 'text-accent-soft'
                        : 'text-brand-400/80 group-hover:text-accent-soft'
                    }`}
                  >
                    {service.num}
                  </span>

                  <div className="flex min-w-0 items-center gap-4">
                    <span
                      className={`hidden h-px shrink-0 bg-accent-soft transition-all duration-500 md:block ${
                        isOpen ? 'w-8' : 'w-0 group-hover:w-8'
                      }`}
                    />
                    <div className="min-w-0">
                      <h3
                        className={`font-display text-xl font-bold leading-snug transition-colors duration-500 md:text-2xl ${
                          isOpen ? 'text-accent-soft' : 'text-text-primary'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-primary/50 md:hidden">
                        {service.short}
                      </p>
                    </div>
                  </div>

                  <div className="hidden items-center gap-5 md:flex">
                    <p className="max-w-xs text-sm leading-relaxed text-text-primary/45">
                      {service.short}
                    </p>
                    <span
                      className={`shrink-0 rounded-full border p-2.5 transition-all duration-500 ${
                        isOpen
                          ? 'border-accent-soft/60 bg-text-primary/5 text-accent-soft'
                          : 'border-text-primary/15 text-text-primary/60 group-hover:border-accent-soft/50 group-hover:text-accent-soft'
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-500 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </div>

                  <span
                    className={`shrink-0 rounded-full border p-2.5 transition-all duration-500 md:hidden ${
                      isOpen
                        ? 'border-accent-soft/60 bg-text-primary/5 text-accent-soft'
                        : 'border-text-primary/15 text-text-primary/60'
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-500 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-9 md:grid-cols-2 md:gap-12">
                        <div className="border-s-2 border-accent-soft/80 ps-5">
                          <p className="text-base leading-relaxed text-text-primary/75">
                            {service.description}
                          </p>
                        </div>

                        <div className="md:pt-1">
                          <ul className="space-y-3">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center gap-3 text-sm text-text-primary/70"
                              >
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent-soft/40 text-accent-soft">
                                  <Check className="h-3 w-3" />
                                </span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <a
                            href="#contact"
                            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent-soft transition-colors duration-300 hover:text-text-primary"
                          >
                            <span className="link-underline">استكشف الخدمة</span>
                            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1.5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mx-auto mt-10 flex max-w-5xl items-center justify-between text-xs">
          <span className="font-display tabular-nums tracking-widest text-text-primary/40">
            {String(openIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
          </span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-semibold text-accent-soft/90 transition-colors duration-300 hover:text-accent-soft"
          >
            <span className="link-underline">استكشف خدماتنا</span>
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
