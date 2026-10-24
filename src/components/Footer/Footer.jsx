import { Clock, MapPin, Phone } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { siteConfig } from '../../data/config'
import { WhatsAppIcon, FacebookIcon } from '../FloatingSocials/FloatingSocials'
import logo from '../../assets/logo/WhatsApp Image 2026-10-15 at 8.57.32 PM (1).jpeg'

const browseLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
]

const moreLinks = [
  { label: 'قبل وبعد التنفيذ', href: '#before-after' },
  { label: 'التصميم 3D', to: '/3d' },
  { label: 'تواصل معنا', href: '#contact' },
  { label: 'المؤسس', to: '/founder' },
]

/* Section-anchor links: on the home page they scroll natively;
   from any other page they route home first, then scroll. */
const SectionLink = ({ href, className, children }) => {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link to={`/${href}`} className={className}>
      {children}
    </Link>
  )
}

const Footer = () => {
  const phone = siteConfig.contact.phone
  const address = siteConfig.contact.address
  const mapsLink = siteConfig.contact.mapsLink
  const hours = siteConfig.contact.hours

  const socials = [
    {
      key: 'whatsapp',
      label: 'واتساب',
      Icon: WhatsAppIcon,
      href: siteConfig.socials.whatsapp ? `https://wa.me/${siteConfig.socials.whatsapp}` : '',
    },
    {
      key: 'phone',
      label: 'اتصال',
      Icon: Phone,
      href: phone ? `tel:${phone}` : '',
    },
    {
      key: 'facebook',
      label: 'فيسبوك',
      Icon: FacebookIcon,
      href: siteConfig.socials.facebook || '',
    },
  ]

  const logoContent = (
    <>
      <img
        src={logo}
        alt="شعار انطلاقة"
        className="h-12 w-12 rounded-xl object-cover object-center ring-1 ring-text-primary/15 transition-all duration-300 group-hover:ring-accent-soft"
      />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg font-extrabold text-text-primary">{siteConfig.name}</span>
        <span className="text-xs font-medium text-accent-soft/80">{siteConfig.tagline}</span>
      </span>
    </>
  )

  const linkClass = 'link-underline text-sm text-text-primary/60 transition-colors duration-300 hover:text-accent-soft'

  return (
    <footer className="relative overflow-hidden bg-bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.04]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-8 select-none whitespace-nowrap text-center font-display text-[17vw] font-black leading-none tracking-tight text-text-primary/[0.04] md:text-[12rem] lg:text-[16rem]"
      >
        انطلاقة
      </span>

      <div className="container-site relative py-12 lg:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <SectionLink href="#hero" className="group flex items-center gap-3" aria-label="الرئيسية">
              {logoContent}
            </SectionLink>
            <p className="mt-4 text-sm leading-relaxed text-text-primary/60">
              من الفكرة إلى التنفيذ... نصنع تفاصيل تليق بك.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socials.map(({ key, label, Icon, href }) => {
                const baseClass =
                  'inline-flex h-8 w-8 items-center justify-center rounded-full border bg-text-primary/5 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 active:scale-90'
                if (!href) {
                  return (
                    <span
                      key={key}
                      title={`${label}: سيتم إضافته قريبًا`}
                      className={`${baseClass} cursor-not-allowed border-text-primary/10 text-text-primary/40`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  )
                }
                const external = href.startsWith('http')
                return (
                  <a
                    key={key}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    aria-label={label}
                    title={label}
                    className={`${baseClass} border-text-primary/15 text-text-primary/70 hover:border-brand-500 hover:bg-brand-500 hover:text-text-primary hover:shadow-[0_8px_18px_-6px_rgba(16,96,160,0.55)]`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-text-primary">التصفح</h3>
            <ul className="mt-4 space-y-2.5">
              {browseLinks.map((link) => (
                <li key={link.href}>
                  <SectionLink href={link.href} className={linkClass}>
                    {link.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-text-primary">المزيد</h3>
            <ul className="mt-4 space-y-2.5">
              {moreLinks.map((link) => (
                <li key={link.to || link.href}>
                  {link.to ? (
                    <NavLink
                      to={link.to}
                      end
                      className={({ isActive }) =>
                        `link-underline text-sm transition-colors duration-300 hover:text-accent-soft ${
                          isActive ? 'text-accent-soft' : 'text-text-primary/60'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ) : (
                    <SectionLink href={link.href} className={linkClass}>
                      {link.label}
                    </SectionLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-text-primary">تواصل معنا</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-primary/60">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent-soft" />
                {phone ? (
                  <a href={`tel:${phone}`} dir="ltr" className="link-underline transition-colors hover:text-accent-soft">
                    {phone}
                  </a>
                ) : (
                  <span className="text-text-primary/40">رقم الهاتف سيُضاف قريبًا</span>
                )}
              </li>
              {address && (
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                  <a
                    href={mapsLink || '#'}
                    target={mapsLink ? '_blank' : undefined}
                    rel={mapsLink ? 'noopener noreferrer' : undefined}
                    className="link-underline transition-colors hover:text-accent-soft"
                  >
                    {address}
                  </a>
                </li>
              )}
              {hours && (
                <li className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-accent-soft" />
                  <span>{hours}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-text-primary/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-4 text-xs text-text-primary/50 sm:flex-row">
          <span dir="ltr">© {new Date().getFullYear()} انطلاقة. جميع الحقوق محفوظة.</span>
          <span>صُنع بعناية بواسطة انطلاقة</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
