import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Box,
  ChevronLeft,
  Home,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Newspaper,
  Phone,
  UserRound,
  X,
} from 'lucide-react'

const NAV_ITEMS = [
  { key: 'home', label: 'الرئيسية', hint: 'الصفحة الرئيسية', to: '/', Icon: Home },
  { key: 'projects', label: 'المشاريع', hint: 'أعمالنا المنفذة', to: '/projects', Icon: LayoutGrid },
  { key: '3d', label: 'التصميمات 3D', hint: 'تصور ثلاثي الأبعاد', to: '/3d', Icon: Box },
  { key: 'founder', label: 'المؤسس', hint: 'قصة المؤسس', to: '/founder', Icon: UserRound },
  { key: 'journal', label: 'Athar Journal', hint: 'مقالات ورؤى', to: '/journal', Icon: Newspaper },
  { key: 'contact', label: 'تواصل معنا', hint: 'أرسل لنا رسالتك', to: '/#contact', Icon: MessageCircle },
  { key: 'location', label: 'الموقع', hint: 'عنوان فرعنا', to: '/#location', Icon: MapPin },
]

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

const MobileNav = ({ open, onClose, phone, phoneHref }) => {
  const { pathname, hash } = useLocation()

  const isActive = (to) => {
    if (to === '/') return pathname === '/' && !hash
    if (to.startsWith('/#')) return pathname === '/' && hash === to.slice(1)
    return pathname === to
  }

  /* Close automatically when a link was tapped (route or hash changed) */
  useEffect(() => {
    if (!open) return
    onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash])

  /* Close on Escape */
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  /* Close if the viewport grows to the desktop breakpoint */
  useEffect(() => {
    if (!open) return
    const mq = window.matchMedia('(min-width: 1280px)')
    const onChange = (e) => {
      if (e.matches) onClose()
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-[70] bg-bg-primary/45"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      {open && (
        <motion.div
          key="sheet"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          role="dialog"
          aria-modal="true"
          aria-label="قائمة التنقل"
          className="fixed inset-x-0 bottom-0 z-[70] flex max-h-[82dvh] flex-col overflow-hidden rounded-t-[28px] border-t border-border-soft bg-bg-elevated/90 shadow-[0_-30px_90px_-20px_rgba(3,13,27,0.6)] backdrop-blur-2xl"
        >
          <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-l from-transparent via-accent-soft/70 to-transparent" />

          <div className="flex justify-center pt-3">
            <span className="h-1.5 w-12 rounded-full bg-border-soft" />
          </div>

          <div className="flex items-center justify-between px-6 pb-2 pt-3">
            <div>
              <p className="font-display text-lg font-extrabold leading-tight text-text-primary">القائمة</p>
              <p className="mt-0.5 text-[11px] font-semibold tracking-[0.2em] text-accent-soft">ATHAR PRIME</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-bg-card/70 text-text-secondary backdrop-blur-sm transition-all duration-300 hover:border-accent-soft/50 hover:bg-accent-soft/10 hover:text-accent-soft active:scale-90"
              aria-label="إغلاق القائمة"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <motion.nav
            variants={listVariants}
            initial="hidden"
            animate="show"
            aria-label="روابط التنقل"
            className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto overscroll-contain px-5 pb-4 pt-1"
          >
            {NAV_ITEMS.map(({ key, label, hint, to, Icon }) => {
              const active = isActive(to)
              return (
                <motion.div key={key} variants={itemVariants}>
                  <Link
                    to={to}
                    onClick={onClose}
                    aria-current={active ? 'page' : undefined}
                    className={`group flex items-center gap-4 rounded-2xl border px-3 py-2.5 text-start transition-all duration-300 active:scale-[0.98] ${
                      active
                        ? 'border-accent-soft/30 bg-accent-soft/10'
                        : 'border-transparent hover:border-border-soft hover:bg-accent-soft/5'
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                        active
                          ? 'border-accent-soft/50 bg-accent-soft/15 text-accent-soft'
                          : 'border-border-soft bg-bg-card/70 text-text-secondary group-hover:border-accent-soft/40 group-hover:text-accent-soft'
                      }`}
                    >
                      <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block truncate text-[15px] font-bold leading-tight transition-colors duration-300 ${
                          active ? 'text-accent-soft' : 'text-text-primary group-hover:text-accent-soft'
                        }`}
                      >
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] font-medium text-text-muted">{hint}</span>
                    </span>
                    <ChevronLeft
                      className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                        active ? 'text-accent-soft' : 'text-text-muted group-hover:-translate-x-0.5 group-hover:text-accent-soft'
                      }`}
                    />
                  </Link>
                </motion.div>
              )
            })}
          </motion.nav>

          <div className="shrink-0 border-t border-border-soft/70 px-6 py-4">
            {phoneHref ? (
              <a
                href={phoneHref}
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-accent-soft px-6 py-3.5 text-sm font-bold text-bg-primary transition-all duration-300 hover:bg-accent-soft-strong active:scale-[0.98]"
              >
                <Phone className="h-4 w-4" />
                <span>اتصل بنا</span>
                <span dir="ltr" className="font-semibold">
                  {phone}
                </span>
              </a>
            ) : (
              <span className="flex w-full items-center justify-center gap-2.5 rounded-full bg-accent-soft px-6 py-3.5 text-sm font-bold text-bg-primary">
                <Phone className="h-4 w-4" />
                <span>اتصل بنا</span>
              </span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileNav
