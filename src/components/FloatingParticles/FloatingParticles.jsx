import { useEffect, useRef, useState } from 'react'
import './FloatingParticles.css'

const mulberry32 = (seed) => () => {
  seed |= 0
  seed = (seed + 0x6d2b79f5) | 0
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

const countForWidth = () => {
  if (typeof window === 'undefined') return 34
  if (window.innerWidth >= 1024) return 48
  if (window.innerWidth >= 640) return 34
  return 20
}

const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)]

const generate = (count) => {
  const rng = mulberry32(20260810)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const scale = isMobile ? 0.9 : 1
  const rareCount = Math.min(6, Math.max(4, Math.round(count * 0.12)))

  return Array.from({ length: count }, (_, i) => {
    const isRare = i < rareCount
    const roll = rng()
    const tier = isRare
      ? 'rare'
      : roll < 0.55
        ? 'small'
        : roll < 0.85
          ? 'medium'
          : 'large'

    let size
    let op
    let glow
    switch (tier) {
      case 'rare':
        size = pick(rng, [8, 10])
        op = 0.6 + rng() * 0.25
        glow = '0 0 10px rgba(16,96,160,0.8), 0 0 18px rgba(172,216,245,0.5)'
        break
      case 'large':
        size = pick(rng, [8, 10])
        op = 0.45 + rng() * 0.2
        glow = '0 0 8px rgba(16,96,160,0.55)'
        break
      case 'medium':
        size = pick(rng, [5, 6])
        op = 0.3 + rng() * 0.25
        glow = rng() > 0.5 ? '0 0 6px rgba(172,216,245,0.35)' : 'none'
        break
      default:
        size = pick(rng, [3, 4])
        op = 0.22 + rng() * 0.2
        glow = rng() > 0.6 ? '0 0 4px rgba(172,216,245,0.3)' : 'none'
    }

    const color =
      isRare || tier === 'large'
        ? 'var(--color-brand-400)'
        : i % 3 === 0
          ? 'var(--color-ice-200)'
          : i % 3 === 1
            ? 'var(--text-primary)'
            : 'var(--color-brand-300)'

    return {
      x: rng() * 100,
      y: rng() * 100,
      size: size * scale,
      op,
      color,
      glow,
      tx: (8 + rng() * 14) * (rng() > 0.5 ? 1 : -1),
      ty: 6 + rng() * 10,
      dur: 8 + rng() * 10,
      delay: rng() * 12,
      factor: rng() < 0.2 ? (0.06 + rng() * 0.1) * (rng() > 0.5 ? 1 : -1) : 0,
    }
  })
}

const FloatingParticles = () => {
  const [particles] = useState(() => generate(countForWidth()))
  const wrapRefs = useRef([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        wrapRefs.current.forEach((el) => {
          if (el && el.dataset.factor !== '0') {
            el.style.transform = `translate3d(0, ${y * Number(el.dataset.factor)}px, 0)`
          }
        })
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="particles-layer" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          ref={(el) => {
            wrapRefs.current[i] = el
          }}
          data-factor={p.factor}
          className="particle-wrap"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            willChange: p.factor !== 0 ? 'transform' : undefined,
          }}
        >
          <span
            className="particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              boxShadow: p.glow,
              '--p-op': p.op,
              '--p-tx': `${p.tx}px`,
              '--p-ty': `${p.ty}px`,
              '--p-duration': `${p.dur}s`,
              '--p-delay': `-${p.delay}s`,
              '--p-ease': 'ease-in-out',
            }}
          />
        </span>
      ))}
    </div>
  )
}

export default FloatingParticles
