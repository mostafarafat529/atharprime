import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

const STORAGE_KEY = 'athar-theme'

const getInitialTheme = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* ignore */
  }
  return 'dark'
}

const applyTheme = (theme) => {
  const light = theme === 'light'
  document.documentElement.classList.toggle('light', light)
  const meta = document.getElementById('theme-color')
  if (meta) meta.setAttribute('content', light ? '#f5f5f2' : '#030d1b')
}

const ThemeToggle = ({ scrolled = false }) => {
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined' ? getInitialTheme() : 'dark'
  )

  useEffect(() => {
    applyTheme(theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    const root = document.documentElement
    root.classList.add('theme-anim')
    setTheme(next)
    window.setTimeout(() => root.classList.remove('theme-anim'), 500)
  }

  const surface = scrolled
    ? 'border-border-soft bg-text-primary/5 text-text-primary hover:border-accent hover:bg-text-primary/10'
    : 'border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10'

  const glow = scrolled
    ? 'hover:shadow-[0_0_18px_rgba(172,216,245,0.28)]'
    : 'hover:shadow-[0_0_18px_rgba(172,216,245,0.35)]'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'التبديل إلى الوضع الداكن' : 'التبديل إلى الوضع الفاتح'}
      title={theme === 'light' ? 'الوضع الداكن' : 'الوضع الفاتح'}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 active:scale-90 ${surface} ${glow}`}
    >
      <span className="relative inline-flex h-5 w-5 items-center justify-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={theme}
            initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="inline-flex"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  )
}

export default ThemeToggle
