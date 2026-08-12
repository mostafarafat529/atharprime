import { motion } from 'framer-motion'
import { founderPhilosophy } from '../../../data/founder'

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const PhilosophySection = () => {
  return (
    <section className="relative overflow-hidden bg-bg-card">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-8 end-4 select-none font-display text-8xl font-black leading-none text-accent-soft/[0.04] md:text-[10rem]"
      >
        ٠٤
      </span>

      <div className="container-site py-24 md:py-32 lg:py-36">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {founderPhilosophy.map((p, i) => (
            <motion.div
              key={p.num}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative border-s-2 border-accent-soft/70 ps-6"
            >
              <span dir="ltr" className="font-display text-sm font-black tracking-widest text-accent-soft">
                {p.num}
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-text-primary md:text-[1.35rem]">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection
