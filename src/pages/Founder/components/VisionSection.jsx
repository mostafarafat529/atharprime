import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16 } },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const VisionSection = () => {
  return (
    <section className="relative overflow-hidden bg-bg-primary">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -start-8 top-1/2 hidden -translate-y-1/2 select-none font-display text-[16rem] font-black leading-none text-text-primary/[0.03] lg:block"
      >
        “
      </span>

      <div className="container-site py-24 md:py-32 lg:py-36">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={item} className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent-soft" />
            <span className="text-xs font-semibold text-text-secondary md:text-sm">
              رؤية علي خالد عبيد لأثر برايم
            </span>
            <span className="h-px w-10 bg-accent-soft" />
          </motion.div>

          <motion.blockquote
            variants={item}
            className="font-display text-[clamp(1.5rem,4vw,3rem)] font-extrabold leading-[1.5] text-text-primary"
          >
            «أن يكون <span className="text-accent-soft">أثر برايم</span> اسمًا يُذكر أمام الجودة؛
            تثق به العين قبل أن تسمع عنه، ويبقى أثره واضحًا في كل مساحة عملنا عليها.»
          </motion.blockquote>

          <motion.p variants={item} className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-text-primary/70 md:text-lg">
            رؤية لا تبحث عن الكم، بل عن أثرٍ يُبنى بحرص، ويُسلم بثقة، ويستمر في الحكاية عن جودته
            بعده.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionSection
