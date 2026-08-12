import { Fragment } from 'react'
import './BrandMarquee.css'

const items = [
  { text: 'ATHAR PRIME', type: 'brand', lang: 'en' },
  { text: 'INTERIOR FINISHING & GENERAL CONTRACTING', lang: 'en' },
  { text: 'أثر برايم', type: 'brand' },
  { text: 'تشطيبات ومقاولات عامة' },
  { text: 'تصميم داخلي' },
  { text: 'تصميم ثلاثي الأبعاد' },
  { text: 'تنفيذ باحترافية' },
  { text: 'نحوّل أفكارك إلى واقع' },
]

const renderGroup = (hidden) => (
  <div className="brand-marquee__group" aria-hidden={hidden || undefined}>
    {items.map((item, index) => (
      <span key={index} className="brand-marquee__cell">
        <span
          className={`brand-marquee__text${
            item.type === 'brand' ? ' brand-marquee__text--brand' : ''
          }${item.lang === 'en' ? ' brand-marquee__text--en' : ''}`}
          dir={item.lang === 'en' ? 'ltr' : undefined}
        >
          {item.text}
        </span>
        <span className="brand-marquee__sep" aria-hidden="true">
          ✦
        </span>
      </span>
    ))}
  </div>
)

const BrandMarquee = () => {
  return (
    <section className="brand-marquee" aria-label="أثر برايم — تشطيبات ومقاولات عامة">
      <div className="brand-marquee__viewport">
        <div className="brand-marquee__track" dir="ltr">
          {Array.from({ length: 4 }, (_, index) => (
            <Fragment key={index}>{renderGroup(index !== 0)}</Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandMarquee
