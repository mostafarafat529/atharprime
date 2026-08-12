import { motion } from 'framer-motion'
import { founderImageSlots } from '../../../data/founder'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const milestones = [
  {
    num: '١',
    title: 'الرؤية',
    desc: 'كل مشروع يبدأ في الذهن؛ صورة واضحة للمساحة النهائية قبل أول خطوة على الأرض.',
  },
  {
    num: '٢',
    title: 'التخطيط',
    desc: 'دراسة المساحة وتوزيعها، واختيار الخامات والتفاصيل بما يخدم الوظيفة والذوق.',
  },
  {
    num: '٣',
    title: 'التنفيذ',
    desc: 'إشراف مباشر على كل مرحلة، ومتابعة يومية حتى تُطابق النتيجةُ الصورةَ المرسومة.',
  },
  {
    num: '٤',
    title: 'الواقع',
    desc: 'مساحة تكتمل تفاصيلها، وتُسلم نظيفة جاهزة، تترك أثرًا في من يعيشها.',
  },
]

const VisionToRealitySection = () => {
  return (
    <section className="relative overflow-hidden bg-bg-primary">
      <div className="container-site py-24 md:py-32 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Images — asymmetric overlap */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative mx-auto w-full max-w-[540px] lg:col-span-6"
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-bg-primary/30 ring-1 ring-text-primary/10">
              <img
                src={founderImageSlots.visionMain}
                alt="متابعة تنفيذ في موقع عمل أثر برايم"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>

            {founderImageSlots.visionDetail && (
              <motion.img
                src={founderImageSlots.visionDetail}
                alt="علي خالد عبيد أثناء العمل"
                loading="lazy"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
                className="absolute -bottom-14 -end-4 hidden w-48 rotate-3 rounded-2xl border-4 border-bg-primary object-cover shadow-2xl shadow-bg-primary/40 sm:block md:w-60"
              />
            )}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 -end-6 hidden h-28 w-28 rounded-2xl border border-accent-soft/30 lg:block"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6"
          >
            <motion.div variants={item} className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-soft" />
              <span
                dir="ltr"
                className="text-[10px] font-semibold uppercase tracking-[0.3em] text-text-secondary md:text-xs"
              >
                From Vision to Reality
              </span>
            </motion.div>

            <motion.h2
              variants={item}
              className="font-display text-4xl font-extrabold leading-[1.25] text-text-primary md:text-5xl"
            >
              من الرؤية
              <br />
              إلى <span className="text-accent-soft">الواقع</span>
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-primary/70 md:text-lg"
            >
              المسافة بين الفكرة والإنجاز ليست مسافة هينة؛ لكنها تُختصر حين يكون التنفيذ مبنيًا على
              رؤية واضحة. هذه الرحلة هي جوهر عمل أثر برايم:
            </motion.p>

            <motion.div variants={item} className="mt-10 space-y-6">
              {milestones.map((m, i) => (
                <div key={m.title} className="relative flex gap-5">
                  {i < milestones.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute start-[17px] top-9 bottom-[-18px] w-px bg-accent-soft/30"
                    />
                  )}
                  <span
                    dir="rtl"
                    className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-soft/40 bg-bg-card font-display text-sm font-bold text-accent-soft"
                  >
                    {m.num}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-lg font-bold text-text-primary">{m.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-text-secondary">{m.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionToRealitySection
