import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ProjectVideo from '../ProjectVideo/ProjectVideo'
import { founderTourProjectId, projects } from '../ProjectsSection/projectsData'

const tourProject = projects.find((project) => project.id === founderTourProjectId)

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const InsideTourSection = () => {
  const navigate = useNavigate()

  if (!tourProject) return null

  const openProject = () => {
    navigate('/projects', { state: { openProjectId: founderTourProjectId }, replace: true })
  }

  return (
    <section className="relative overflow-hidden bg-bg-primary">
      <div className="container-site py-24 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Video */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            <ProjectVideo
              video={tourProject.video}
              poster={tourProject.videoPoster || tourProject.image}
              title={tourProject.title}
              overlayLabel="شاهد الجولة"
            />
            <motion.p
              variants={fadeUp}
              className="mt-4 text-center text-xs text-text-primary/45"
            >
              لقطات من إحدى المساحات المنفذة — بصوت المؤسس علي خالد عبيد
            </motion.p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 lg:order-2 lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-soft" />
              <span
                dir="ltr"
                className="text-[10px] font-semibold uppercase tracking-[0.3em] text-text-secondary md:text-xs"
              >
                Inside One of Our Projects
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-extrabold leading-[1.3] text-text-primary md:text-4xl lg:text-5xl"
            >
              من داخل أحد <span className="text-accent-soft">مشاريعنا</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-primary/70 md:text-lg"
            >
              جولة حقيقية داخل إحدى المساحات التي نفذتها أثَر برايم، من التفاصيل الأولى حتى اللمسات
              النهائية.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9">
              <button
                type="button"
                onClick={openProject}
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent-soft px-8 py-4 text-sm font-bold text-bg-primary shadow-lg shadow-accent-soft/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft-strong hover:shadow-xl hover:shadow-accent-soft/25 active:scale-[0.97]"
              >
                شاهد المشروع
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1.5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InsideTourSection
