import { memo } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Box, Maximize2 } from 'lucide-react'

const spanClasses = {
  large: 'md:col-span-2 md:row-span-2',
  wide: 'md:col-span-2',
  tall: 'md:row-span-2',
  small: '',
}

const ProjectCard = ({ project, onOpen, index }) => {
  const { title, category, image, is3D, span } = project

  const content = (
    <>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out ${
          is3D ? 'group-hover:scale-[1.04]' : 'group-hover:scale-[1.06]'
        }`}
      />

      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ backgroundImage: 'var(--card-scrim)' }}
      />

      {is3D ? (
        <>
          <span className="absolute start-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-accent-soft/40 bg-bg-primary/85 px-3 py-1.5 text-[11px] font-bold text-accent-soft backdrop-blur-md">
            <Box className="h-3.5 w-3.5" />
            3D تفاعلي
          </span>

          <div className="absolute inset-0 z-[5] flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-bg-primary/70 via-bg-primary/85 to-bg-primary/95 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-soft/40 bg-bg-primary/60 text-accent-soft transition-transform duration-500 group-hover:scale-110">
              <Box className="h-5 w-5" />
            </span>
            <span className="flex items-center gap-2 text-sm font-bold text-text-primary">
              استكشف التصميم 360°
              <ArrowUpRight className="h-4 w-4 text-accent-soft transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </div>
        </>
      ) : (
        <>
          <span className="absolute end-3 top-3 z-10 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full border border-accent-soft/30 bg-bg-primary/80 text-accent-soft opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <Maximize2 className="h-4 w-4" />
          </span>

          <span className="absolute start-3 top-3 z-10 rounded-full border border-text-primary/15 bg-bg-primary/85 px-3 py-1.5 text-[11px] font-bold text-text-primary/70 backdrop-blur-md">
            {project.type === '2d' ? 'مخطط 2D' : 'معرض الأعمال'}
          </span>
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 z-[6] p-4 transition-transform duration-500 group-hover:-translate-y-1 md:p-5">
        <p className="text-[11px] font-semibold tracking-wide text-accent-soft">{category}</p>
        <h3 className="mt-1 font-display text-sm font-bold leading-snug text-text-primary md:text-base">
          {title}
        </h3>
      </div>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: Math.min(index * 0.05, 0.4) }}
      className={`group relative aspect-[4/5] overflow-hidden rounded-2xl bg-bg-card lg:aspect-auto lg:h-full ${spanClasses[span]}`}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`${is3D ? 'استكشف' : 'عرض'} ${title}`}
        className="relative block h-full w-full cursor-pointer text-start transition-transform duration-300 active:scale-[0.985]"
      >
        {content}
      </button>
    </motion.div>
  )
}

export default memo(ProjectCard)
