import { memo } from 'react'
import { Play } from 'lucide-react'

const pad = (n) => String(n).padStart(2, '0')

const ThreeDProjectCard = ({ project, index, isActive, onSelect }) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(project.id)}
      aria-pressed={isActive}
      aria-label={project.title}
      className={`group w-72 shrink-0 snap-start overflow-hidden rounded-2xl border text-start transition-all duration-300 active:scale-[0.98] lg:w-full ${
        isActive
          ? 'border-accent-soft/60 bg-bg-card shadow-lg shadow-brand-500/20'
          : 'border-text-primary/10 bg-bg-card/60 hover:-translate-y-1 hover:border-accent-soft hover:shadow-xl hover:shadow-bg-primary/40'
      }`}
    >
      <span className="relative block aspect-video w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span
          className="absolute inset-0"
          style={{ backgroundImage: 'var(--thumb-scrim)' }}
        />
        {isActive && (
          <span className="absolute start-3 top-3 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-soft" />
          </span>
        )}
      </span>

      <span className="flex items-center justify-between gap-2 p-3.5">
        <span className="min-w-0">
          <span
            className={`block text-[10px] font-semibold tracking-widest ${
              isActive ? 'text-accent-soft' : 'text-text-primary/40'
            }`}
          >
            {pad(index + 1)}
          </span>
          <span
            className={`mt-0.5 block truncate text-sm font-semibold ${
              isActive ? 'text-text-primary' : 'text-text-primary/70'
            }`}
          >
            {project.title}
          </span>
        </span>
        <Play
          className={`h-4 w-4 shrink-0 ${
            isActive
              ? 'text-accent-soft'
              : 'text-text-primary/30 transition-colors duration-300 group-hover:text-text-primary/70'
          }`}
        />
      </span>
    </button>
  )
}

export default memo(ThreeDProjectCard)
