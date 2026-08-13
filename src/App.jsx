import { lazy, Suspense, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import FloatingSocials from './components/FloatingSocials/FloatingSocials'
import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'
import FloatingParticles from './components/FloatingParticles/FloatingParticles'
import QuickNav from './components/QuickNav/QuickNav'

const Founder = lazy(() => import('./pages/Founder/Founder'))
const Projects = lazy(() => import('./pages/Projects/Projects'))
const ThreeD = lazy(() => import('./pages/ThreeD/ThreeD'))
const Journal = lazy(() => import('./pages/Journal/Journal'))
const ArticlePage = lazy(() => import('./pages/Journal/ArticlePage'))

const pageFallback = (
  <div className="flex min-h-screen items-center justify-center bg-bg-primary">
    <div className="flex flex-col items-center gap-4">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-text-primary/15 border-t-accent-soft" />
      <p className="text-xs font-semibold tracking-widest text-text-primary/50">ATHAR PRIME</p>
    </div>
  </div>
)

const ScrollToTop = () => {
  const { pathname, hash } = useLocation()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    const pathChanged = prevPathname.current !== pathname
    prevPathname.current = pathname

    if (hash) {
      const id = hash.slice(1)
      if (pathChanged) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

      const interval = window.setInterval(() => {
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          window.clearInterval(interval)
        }
      }, 120)
      const timeout = window.setTimeout(() => window.clearInterval(interval), 2000)

      return () => {
        window.clearInterval(interval)
        window.clearTimeout(timeout)
      }
    }

    if (pathChanged) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    return undefined
  }, [pathname, hash])

  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <FloatingParticles />
        <ScrollToTop />
        <Navbar />
        <FloatingSocials />
        <BackToTop />
        <QuickNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/founder"
            element={
              <Suspense fallback={pageFallback}>
                <Founder />
              </Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <Suspense fallback={pageFallback}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="/3d"
            element={
              <Suspense fallback={pageFallback}>
                <ThreeD />
              </Suspense>
            }
          />
          <Route
            path="/journal"
            element={
              <Suspense fallback={pageFallback}>
                <Journal />
              </Suspense>
            }
          />
          <Route
            path="/journal/:slug"
            element={
              <Suspense fallback={pageFallback}>
                <ArticlePage />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </MotionConfig>
    </BrowserRouter>
  )
}

export default App
