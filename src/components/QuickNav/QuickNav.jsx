import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Box, Home, LayoutGrid, MessageCircle, Newspaper, UserRound } from 'lucide-react'

const quickItems = [
  { key: 'home', label: 'الرئيسية', to: '/', Icon: Home },
  { key: 'founder', label: 'المؤسس', to: '/founder', Icon: UserRound },
  { key: 'projects', label: 'أعمالنا', to: '/projects', Icon: LayoutGrid },
  { key: '3d', label: 'التصميم 3D', to: '/3d', Icon: Box },
  { key: 'journal', label: 'Athar Journal', to: '/journal', Icon: Newspaper },
  { key: 'contact', label: 'تواصل معنا', to: '/#contact', Icon: MessageCircle },
]

const QuickNav = () => {
  const { pathname, hash } = useLocation()

  const isActive = (to) => {
    if (to === '/') return pathname === '/' && !hash
    if (to === '/#contact') return pathname === '/' && hash === '#contact'
    return pathname === to
  }

  return (
    <nav
      aria-label="تنقل سريع"
      className="fixed start-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2.5 lg:flex"
    >
      {quickItems.map(({ key, label, to, Icon }) => {
        const active = isActive(to)
        return (
          <NavLink
            key={key}
            to={to}
            title={label}
            aria-label={label}
            aria-current={active ? 'page' : undefined}
            className={`group relative flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 active:scale-90 ${
              active
                ? 'border-accent-soft/60 bg-accent-soft/10 text-accent-soft shadow-lg shadow-accent-soft/20'
                : 'border-border-soft bg-bg-card/70 text-text-secondary hover:border-accent-soft/50 hover:bg-accent-soft/5 hover:text-accent-soft'
            }`}
          >
            <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
            <span
              className="pointer-events-none absolute start-full top-1/2 ms-3 -translate-y-1/2 -translate-x-1 whitespace-nowrap rounded-full border border-border-soft bg-bg-elevated/95 px-4 py-2 text-xs font-bold text-text-primary opacity-0 shadow-lg shadow-bg-primary/30 backdrop-blur-md transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100"
            >
              {label}
            </span>
          </NavLink>
        )
      })}
    </nav>
  )
}

export default QuickNav
