import { motion } from 'framer-motion'
import { Clock, Globe, MapPin } from 'lucide-react'
import { locationData } from './locationData'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const mapIn = {
  hidden: { opacity: 0, scale: 0.97, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } },
}

const infoRows = [
  {
    id: 'address',
    icon: MapPin,
    label: 'العنوان',
    lines: [locationData.address],
  },
  {
    id: 'hours',
    icon: Clock,
    label: 'مواعيد العمل',
    lines: [locationData.hoursDays, locationData.hoursTime],
  },
  {
    id: 'scope',
    icon: Globe,
    label: 'نطاق العمل',
    lines: [locationData.scope],
  },
]

const LocationSection = () => {
  return (
    <section id="location" className="relative scroll-mt-24 overflow-hidden bg-bg-primary">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      <div className="container-site relative py-24 md:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-accent-soft" />
            <p className="text-xs font-semibold tracking-widest text-accent-soft md:text-sm">
              موقعنا
            </p>
            <span className="h-px w-10 bg-accent-soft" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-extrabold leading-[1.35] text-text-primary md:text-4xl lg:text-5xl"
          >
            تقدر تلاقينا <span className="text-accent-soft">هنا</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-primary/65 md:text-lg"
          >
            إحنا شغالين في جميع المحافظات 😊 وده مقر الشركة لو حبيت تنورنا:
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid items-stretch gap-6 md:mt-16 lg:grid-cols-2 lg:gap-8"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col rounded-2xl border border-text-primary/10 bg-bg-card/60 p-6 md:p-8"
          >
            <p className="font-display text-lg font-bold text-text-primary">{locationData.companyName}</p>
            <span className="mt-3 h-px w-12 bg-accent-soft" />

            <div className="mt-6 flex flex-col">
              {infoRows.map((row) => (
                <div
                  key={row.id}
                  className="group flex gap-4 border-b border-text-primary/10 py-5 transition-colors duration-300 hover:border-accent-soft/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-text-primary/10 bg-bg-primary/80 text-accent-soft transition-all duration-300 group-hover:border-accent-soft/40 group-hover:shadow-[0_0_14px_rgba(172,216,245,0.2)]">
                    <row.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wide text-accent-soft">
                      {row.label}
                    </p>
                    {row.lines.map((line) => (
                      <p
                        key={line}
                        className="mt-1 text-sm leading-relaxed text-text-primary/70 md:text-base"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={locationData.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-sm font-bold text-text-primary shadow-lg shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-400/40 active:scale-[0.97] sm:w-auto sm:px-8"
            >
              افتح الموقع على الخريطة
              <MapPin className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            </a>
          </motion.div>

          <motion.div variants={mapIn} className="relative">
            <div className="relative h-full overflow-hidden rounded-2xl border border-text-primary/10 bg-bg-card shadow-2xl shadow-bg-primary/40">
              <span className="pointer-events-none absolute -start-3 -top-3 z-10 h-8 w-8 border-s-2 border-t-2 border-accent-soft/60" />
              <span className="pointer-events-none absolute -end-3 -top-3 z-10 h-8 w-8 border-e-2 border-t-2 border-accent-soft/60" />
              <span className="pointer-events-none absolute -bottom-3 -start-3 z-10 h-8 w-8 border-s-2 border-b-2 border-accent-soft/60" />
              <span className="pointer-events-none absolute -bottom-3 -end-3 z-10 h-8 w-8 border-e-2 border-b-2 border-accent-soft/60" />

              <iframe
                src={locationData.mapsEmbed}
                title="موقع أثر برايم على خرائط جوجل"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
                style={{ minHeight: '22rem' }}
              />

              <div className="pointer-events-none absolute start-4 top-4 z-10 flex items-center gap-2 rounded-full border border-text-primary/15 bg-bg-primary/85 px-4 py-2 backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-accent-soft" />
                <span className="text-xs font-bold text-text-primary">مقر أثر برايم</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default LocationSection
