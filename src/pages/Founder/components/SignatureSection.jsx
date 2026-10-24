import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { founder } from '../../../data/founder'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const signatureVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.6, ease: 'easeInOut' }, opacity: { duration: 0.4 } },
  },
}

const SignatureSection = () => {
  return (
    <section className="relative overflow-hidden bg-bg-card">
      <div className="container-site py-24 md:py-32 lg:py-36">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <motion.div variants={item}>
            <svg
              viewBox="0 0 320 110"
              fill="none"
              aria-hidden="true"
              className="mx-auto h-24 w-64 md:h-28 md:w-80"
            >
              <motion.path
                d="M20 88 C 40 20, 60 18, 76 40 C 92 62, 108 20, 126 44 C 144 68, 160 26, 176 50 C 192 74, 206 30, 222 54 C 236 74, 252 46, 268 56 M286 50 Q296 52 300 56"
                variants={signatureVariants}
                stroke="var(--color-accent-soft)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.circle
                cx="86"
                cy="18"
                r="2.5"
                fill="var(--color-accent-soft)"
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  show: { opacity: 1, scale: 1, transition: { delay: 1.4, duration: 0.3 } },
                }}
              />
            </svg>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-4 font-display text-3xl font-extrabold text-text-primary md:text-4xl"
          >
            {founder.name}
          </motion.p>

          <motion.p
            variants={item}
            dir="ltr"
            className="mt-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-text-primary/45"
          >
            Founder & Visionary — انطلاقة
          </motion.p>

          <motion.div variants={item} className="mx-auto my-8 h-px w-40 bg-accent-soft/40" />

          <motion.p variants={item} className="text-base leading-relaxed text-text-secondary md:text-lg">
            إذا كنت تبحث عن مساحة تُبنى باحترام للتفاصيل، وتُنجز على أيدي فريق واحد يتحمل مسؤولية
            النتيجة، فدعنا نترك أثرنا معًا.
          </motion.p>

          <motion.div variants={item} className="mt-10">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-display text-base font-bold text-bg-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-[0_14px_34px_-10px_rgba(16,96,160,0.6)] active:scale-[0.97]"
            >
              <span>اكتشف انطلاقة</span>
              <span
                aria-hidden="true"
                className="text-lg leading-none transition-transform duration-300 group-hover:-translate-x-1.5"
              >
                ←
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SignatureSection
