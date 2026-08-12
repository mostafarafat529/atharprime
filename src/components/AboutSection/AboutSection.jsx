import { motion } from 'framer-motion'
import mainImage from '../../assets/images/hero/ChatGPT Image Aug 10, 2026, 02_45_11 AM.webp'
import smallImage from '../../assets/images/hero/ChatGPT Image Aug 10, 2026, 02_44_14 AM.webp'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const imageContainer = {
  hidden: {},
  show: { transition: { delayChildren: 0.1 } },
}

const mainImageVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: 'easeOut' } },
}

const smallImageVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut', delay: 0.3 } },
}

const badgeVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.5 } },
}

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]"
      />

      <div className="container-site relative py-24 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-start"
          >
            <motion.div variants={item} className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-soft" />
              <p className="text-xs font-semibold tracking-widest text-accent-soft md:text-sm">
                من نحن
              </p>
            </motion.div>

            <motion.h2
              variants={item}
              className="font-display text-3xl font-extrabold leading-[1.3] text-text-primary md:text-4xl lg:text-5xl lg:leading-[1.25]"
            >
              نصنع المساحات التي تنبض بـ<span className="text-accent-soft">التفاصيل</span>
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-6 text-base leading-relaxed text-text-primary/70 md:text-lg"
            >
              في أثر برايم، نؤمن أن كل مساحة تحمل قصة تستحق أن تُروى بتفاصيل استثنائية. نحوّل الأفكار
              إلى مساحات متكاملة تجمع بين جمال التصميم، دقة التنفيذ، وجودة التفاصيل.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 text-base leading-relaxed text-text-primary/70 md:text-lg"
            >
              نبدأ من فهم رؤيتك واحتياجاتك، ثم نعمل على تحويلها إلى واقع ملموس؛ من التخطيط والتصميم
              الهندسي، وصولًا إلى التشطيبات الدقيقة التي تعكس شخصية المكان. كل زاوية في مشروعك تنال
              عنايتنا الكاملة، لأن الجودة عندنا ليست خيارًا، بل التزام.
            </motion.p>
          </motion.div>

          <motion.div
            variants={imageContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <motion.div
              variants={mainImageVariants}
              className="relative aspect-[4/5] max-h-[34rem] w-full overflow-hidden rounded-2xl shadow-lg shadow-bg-primary/10 ring-1 ring-text-primary/10"
            >
              <img
                src={mainImage}
                alt="مشروع تشطيبات ومقاولات من أثر برايم"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>

            <motion.img
              src={smallImage}
              alt="تفاصيل تنفيذ معمارية من أثر برايم"
              loading="lazy"
              variants={smallImageVariants}
              className="absolute -bottom-4 -start-4 z-10 aspect-[3/4] w-36 rounded-xl border-4 border-bg-primary object-cover shadow-lg shadow-bg-primary/10 md:-bottom-6 md:-start-6 md:w-48 lg:-bottom-8 lg:-start-8 lg:w-56"
            />

            <motion.div
              variants={badgeVariants}
              className="absolute start-6 top-6 flex items-center gap-3 rounded-xl border border-text-primary/10 bg-bg-card/90 px-4 py-3 backdrop-blur-md"
            >
              <span className="h-9 w-1 rounded-full bg-gradient-to-b from-brand-400 to-ice-300" />
              <div>
                <p className="font-display text-sm font-bold text-text-primary">نبني أثرًا يدوم</p>
                <p className="text-xs text-text-primary/60">للتشطيبات والمقاولات العامة</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
