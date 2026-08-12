import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { featuredProjects } from './projectsData'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

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

const capabilities = [
  'تشطيبات فاخرة',
  'تصميمات داخلية',
  'مخططات 2D',
  'تصاميم 3D تفاعلية',
  'فلل',
  'شقق',
  'مشاريع تجارية',
  'حلول متكاملة',
]

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null)

  const openProject = useCallback((project) => setActiveProject(project), [])

  return (
    <section id="projects" className="relative overflow-hidden bg-bg-primary">
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
            <p className="text-xs font-semibold tracking-widest text-accent-soft md:text-sm">
              مشاريعنا
            </p>
            <span className="h-px w-10 bg-accent-soft" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-extrabold leading-[1.35] text-text-primary md:text-4xl lg:text-5xl"
          >
            أعمال تعكس دقة التفاصيل
            <br />
            <span className="text-accent-soft">وجمال التنفيذ.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-primary/65 md:text-lg"
          >
            نظرة سريعة على نخبة من مشاريعنا في التشطيبات والتصميم الداخلي — وعندما تريد المزيد،
            محفظتنا الكاملة تنتظرك.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid grid-flow-dense grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 lg:grid-cols-6 lg:auto-rows-[15rem]">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={openProject}
            />
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2.5 md:gap-3"
        >
          {capabilities.map((capability) => (
            <span
              key={capability}
              className="rounded-full border border-text-primary/10 bg-bg-card/60 px-4 py-2 text-xs font-semibold text-text-secondary transition-colors duration-300 hover:border-accent-soft/40 hover:text-accent-soft"
            >
              {capability}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2.5 rounded-full bg-accent-soft px-8 py-4 text-sm font-bold text-bg-primary shadow-lg shadow-accent-soft/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft-strong hover:shadow-xl hover:shadow-accent-soft/25 active:scale-[0.97]"
          >
            استكشف جميع أعمالنا
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1.5" />
          </Link>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-text-primary/15 px-8 py-4 text-sm font-bold text-text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-soft/50 hover:text-accent-soft active:scale-[0.97]"
          >
            ابدأ مشروعك الآن
          </a>
        </motion.div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}

export default ProjectsSection
