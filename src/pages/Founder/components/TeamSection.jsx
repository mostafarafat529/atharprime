import { motion } from 'framer-motion'
import { founderImageSlots, founderExtraImages } from '../../../data/founder'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const teamPillars = ['فريق متخصص', 'أيدي عاملة مدربة', 'متابعة ميدانية', 'عمل جماعي']

const TeamSection = () => {
  return (
    <section className="relative overflow-hidden bg-bg-card">
      <div className="container-site py-24 md:py-32 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-6"
          >
            <motion.div variants={item} className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-soft" />
              <span
                dir="ltr"
                className="text-[10px] font-semibold uppercase tracking-[0.3em] text-text-secondary md:text-xs"
              >
                The Team Behind the Mark
              </span>
            </motion.div>

            <motion.h2
              variants={item}
              className="font-display text-4xl font-extrabold leading-[1.25] text-text-primary md:text-5xl"
            >
              وراء كل أثر
              <br />
              <span className="text-accent-soft">فريق</span>
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-primary/70 md:text-lg"
            >
              العمل الكبير لا يُبنى بيد واحدة. يحيط بالمؤسس فريق من المتخصصين والعمال، يعمل كلٌّ في
              موقعه بدقة، وتجمعهم مسؤولية واحدة: ألّا تخرج المساحة من أيدينا إلا وقد أكملت وعدها.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
              {teamPillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-text-primary/10 bg-bg-primary/60 px-5 py-2.5 text-sm font-semibold text-text-secondary"
                >
                  {pillar}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="group relative aspect-[16/11] overflow-hidden rounded-2xl shadow-2xl shadow-bg-primary/30 ring-1 ring-text-primary/10">
                <img
                  src={founderImageSlots.teamMain}
                  alt="تفاصيل من أعمال أثر برايم"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="absolute -bottom-7 start-4 rounded-xl border border-text-primary/10 bg-bg-primary/90 px-6 py-4 backdrop-blur-md md:start-8"
              >
                <p className="font-display text-lg font-extrabold text-accent-soft">أثر برايم</p>
                <p className="mt-0.5 text-xs text-text-secondary">فريق واحد، معيار واحد</p>
              </motion.div>

              {founderExtraImages.length > 0 && (
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {founderExtraImages.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`صور إضافية من أعمال أثر برايم ${i + 1}`}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-text-primary/10 transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
