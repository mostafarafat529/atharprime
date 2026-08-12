import { motion } from 'framer-motion'
import ProjectVideo from '../../../components/ProjectVideo/ProjectVideo'
import { founderTourProjectId, projects } from '../../../components/ProjectsSection/projectsData'

const tourProject = projects.find((project) => project.id === founderTourProjectId)

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const FounderTourSection = () => {
  if (!tourProject) return null

  return (
    <section className="relative overflow-hidden bg-bg-primary">
      <div className="container-site py-24 md:py-32 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-soft" />
              <span
                dir="ltr"
                className="text-[10px] font-semibold uppercase tracking-[0.3em] text-text-secondary md:text-xs"
              >
                Inside the Work
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-extrabold leading-[1.3] text-text-primary md:text-4xl lg:text-5xl"
            >
              المؤسس من داخل
              <br />
              <span className="text-accent-soft">أحد المشاريع</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-primary/70 md:text-lg"
            >
              شاهد علي خالد عبيد وهو يتجول بنفسه داخل إحدى المساحات المنفذة — يستعرض التفاصيل واللمسات
              النهائية كما تُسلَّم للعميل، بلغة الميدان لا الصور المعالجة.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-base leading-relaxed text-text-primary/70 md:text-lg"
            >
              جولة قصيرة توثّق العلاقة بين المؤسس والتفاصيل: كل مساحة تمر من عينه قبل أن تصل إلى يد
              العميل.
            </motion.p>
          </motion.div>

          {/* Video */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-7"
          >
            <ProjectVideo
              video={tourProject.video}
              poster={tourProject.videoPoster || tourProject.image}
              title={tourProject.title}
              overlayLabel="شاهد الجولة"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FounderTourSection
