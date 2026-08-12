import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const SHOW_THRESHOLD = 500

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setVisible(window.scrollY > SHOW_THRESHOLD)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      ticking = false
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          aria-label="العودة إلى أعلى الصفحة"
          title="العودة إلى أعلى الصفحة"
          className="group fixed bottom-5 start-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-bg-card/80 text-accent-soft shadow-lg shadow-bg-primary/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-[3px] hover:border-accent-soft hover:shadow-[0_10px_30px_rgba(16,96,160,0.35)] active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft md:bottom-6 md:start-6 md:h-12 md:w-12"
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 md:h-5.5 md:w-5.5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
