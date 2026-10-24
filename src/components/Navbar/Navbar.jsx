import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { siteConfig } from '../../data/config'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import MobileNav from './MobileNav'
import logo from '../../assets/logo/WhatsApp Image 2026-10-15 at 8.57.32 PM (1).jpeg'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40)
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const phone = siteConfig.contact.phone
  const phoneHref = phone ? `tel:${phone}` : null

  /* Non-home pages have their own premium headers (no navy hero overlay),
     so the navbar is always solid there — semantic tokens in both themes. */
  const solid = scrolled || !isHome
  const brandText = solid ? 'text-text-primary' : 'text-white'
  const brandRing = solid ? 'ring-border-soft' : 'ring-white/15'
  const linkText = (base) => (solid ? base : 'text-white/80')
  const ctaSurface = solid
    ? 'border-border-soft bg-text-primary/5 text-text-primary hover:border-accent hover:bg-text-primary/10'
    : 'border-white/15 bg-white/5 text-white hover:border-ice-200/60 hover:bg-white/10'

  const sectionLinkClass = `group relative py-2 text-[15px] font-semibold transition-colors duration-300 hover:text-accent-soft ${linkText('text-text-secondary')}`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        solid
          ? 'border-border-soft bg-bg-primary/90 py-2.5 shadow-lg shadow-bg-primary/10 backdrop-blur-md'
          : 'border-transparent bg-gradient-to-b from-navy-950 via-navy-950/60 to-transparent py-4 md:py-5'
      }`}
    >
      <nav className="container-site flex items-center justify-between gap-6">
        <Link
          to="/"
          onClick={() => {
            if (pathname === '/' && window.scrollY > 0) {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className="group flex shrink-0 items-center gap-3"
          aria-label="الرئيسية"
        >
          <img
            src={logo}
            alt="شعار انطلاقة"
            className={`h-12 w-12 rounded-xl object-cover object-center ring-1 transition-all duration-300 group-hover:ring-accent-soft ${brandRing} md:h-14 md:w-14`}
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className={`font-display text-lg font-extrabold transition-colors duration-300 ${brandText} md:text-xl`}>
              {siteConfig.name}
            </span>
            <span className="text-[11px] font-medium tracking-wide text-accent-soft md:text-xs">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 xl:flex">
          {siteConfig.navLinks.map((link) =>
            isHome ? (
              <a key={link.href} href={link.href} className={sectionLinkClass}>
                {link.label}
                <span className="absolute bottom-0 start-0 h-px w-0 bg-accent-soft transition-all duration-300 group-hover:w-full" />
              </a>
            ) : (
              <Link key={link.href} to={`/${link.href}`} className={sectionLinkClass}>
                {link.label}
                <span className="absolute bottom-0 start-0 h-px w-0 bg-accent-soft transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          {phoneHref ? (
            <a
              href={phoneHref}
              className={`group hidden items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97] ${ctaSurface} lg:flex`}
            >
              <Phone className="h-4 w-4 text-accent-soft transition-transform duration-300 group-hover:-rotate-12" />
              <span>اتصل بنا</span>
              <span dir="ltr" className={`font-medium ${solid ? 'text-text-secondary' : 'text-white/70'}`}>
                {phone}
              </span>
            </a>
          ) : (
            <span className={`hidden items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur-sm ${ctaSurface} lg:flex`}>
              <Phone className="h-4 w-4 text-accent-soft" />
              <span>اتصل بنا</span>
            </span>
          )}

          <ThemeToggle scrolled={solid} />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 active:scale-90 ${ctaSurface} xl:hidden`}
            aria-label="القائمة"
            aria-expanded={menuOpen}
          >
            <span className="relative inline-flex h-5 w-5 items-center justify-center">
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={menuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="inline-flex"
                >
                  {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>
        </div>
      </nav>

      <div className="xl:hidden">
        <MobileNav
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          phone={phone}
          phoneHref={phoneHref}
        />
      </div>
    </header>
  )
}

export default Navbar
