import { motion } from 'framer-motion'
import { ArrowDown, ArrowLeft } from 'lucide-react'
import { siteConfig } from '../../data/config'
import heroImage from '../../assets/images/hero/ChatGPT Image Aug 10, 2026, 01_26_15 AM.webp'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="تصميم داخلي فاخر من أعمال انطلاقة للتشطيبات والمقاولات العامة"
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'var(--hero-scrim-v)' }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'var(--hero-scrim-h)' }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-site relative z-10 pb-28 pt-28 md:pt-36"
      >
        <div className="relative max-w-2xl text-start">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 inset-y-0 -z-10"
            style={{ backgroundImage: 'var(--hero-text-scrim)' }}
          />
          <motion.div variants={item} className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[var(--accent-color-strong)]" />
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-color-strong)] md:text-sm">
              مقاولات · تشطيبات · تصميم داخلي
            </p>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold leading-[1.3] text-text-primary sm:text-5xl md:text-6xl md:leading-[1.22] lg:text-7xl"
          >
            نصنع المساحات التي تترك <span className="text-[var(--accent-color-strong)]">انطلاقة</span>
          </motion.h1>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        dir="ltr"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-text-primary/70 transition-colors hover:text-text-primary md:flex md:right-10"
      >
        <span className="relative h-px w-14 overflow-hidden bg-text-primary/20">
          <motion.span
            animate={{ x: [-24, 56] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-y-0 left-0 w-6 bg-accent-soft"
          />
        </span>
        <span className="text-[10px] font-semibold tracking-[0.25em] md:text-[11px]">
          SCROLL TO EXPLORE
        </span>
      </motion.a>
    </section>
  )
}

export default Hero
