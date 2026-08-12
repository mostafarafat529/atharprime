import { motion } from 'framer-motion'
import { ArrowLeft, Phone } from 'lucide-react'
import { contactData } from './contactData'
import { WhatsAppIcon, FacebookIcon } from '../FloatingSocials/FloatingSocials'

const iconMap = {
  whatsapp: WhatsAppIcon,
  phone: Phone,
  facebook: FacebookIcon,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const ContactSection = () => {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -end-10 -top-8 select-none font-display text-[11rem] font-black leading-none text-text-primary/[0.04] md:text-[15rem]"
      >
        01
      </span>

      <div className="container-site relative py-24 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-accent-soft" />
              <p className="text-xs font-semibold tracking-widest text-accent-soft md:text-sm">
                {contactData.eyebrow}
              </p>
              <span className="h-px w-10 bg-accent-soft" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-extrabold leading-[1.35] text-text-primary md:text-4xl lg:text-5xl"
            >
              جاهز تبدأ <span className="text-accent-soft">مشروعك؟</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-base leading-relaxed text-text-primary/65 md:text-lg"
            >
              {contactData.description}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-md text-sm leading-relaxed text-text-primary/45 md:text-base"
            >
              {contactData.note}
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4 md:gap-5"
          >
            {contactData.cards.map((card) => {
              const Icon = iconMap[card.icon]
              const externalProps = card.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {}
              return (
                <motion.a
                  key={card.id}
                  variants={fadeUp}
                  href={card.href}
                  {...externalProps}
                  className="group flex items-center gap-4 rounded-2xl border border-text-primary/10 bg-bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-soft hover:bg-bg-card/80 hover:shadow-xl hover:shadow-bg-primary/30 active:scale-[0.99] md:gap-5 md:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-text-primary/10 bg-bg-primary/80 text-accent-soft transition-all duration-300 group-hover:border-accent-soft group-hover:shadow-[0_0_16px_rgba(172,216,245,0.18)] md:h-14 md:w-14">
                    <Icon className="h-6 w-6" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2.5">
                      <span className="text-[11px] font-semibold tracking-widest text-accent-soft">
                        {card.number}
                      </span>
                      <span className="truncate font-display text-base font-bold text-text-primary md:text-lg">
                        {card.title}
                      </span>
                    </span>
                    <span
                      dir={card.valueDir || undefined}
                      className="mt-0.5 block text-sm font-semibold text-text-primary/70 md:text-base"
                    >
                      {card.value}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-text-primary/45 md:text-sm">
                      {card.description}
                    </span>
                  </span>

                  <span className="flex shrink-0 items-center justify-center text-text-primary/40 transition-all duration-300 group-hover:-translate-x-1.5 group-hover:text-accent-soft">
                    <ArrowLeft className="h-5 w-5" />
                  </span>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
