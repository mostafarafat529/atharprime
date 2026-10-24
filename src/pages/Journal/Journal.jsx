import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, CircleHelp, Sparkles } from 'lucide-react'
import Seo from '../../components/Seo/Seo'

const faqItems = [
  {
    question: 'ما الفرق بين التصميم 2D و3D؟',
    answer:
      'التصميم 2D يوضح المقاسات والتوزيع الهندسي بدقة، بينما يضيف التصميم 3D إحساسًا واقعيًا للمساحة، يساعدك على رؤية الواجهة والضوء والمواد قبل التنفيذ.',
  },
  {
    question: 'هل أحتاج إلى 3D قبل الشروع في المشروع؟',
    answer:
      'نعم، خصوصًا إذا كنت تريد اتخاذ قرارات ذكية عن الألوان، توزيع الفراغات، والإضاءة. هذا يقلل الأخطاء ويمنحك رؤية أوضح قبل أن تبدأ في التنفيذ.',
  },
  {
    question: 'ما هي أهم أخطاء التشطيب التي يجب تجنبها؟',
    answer:
      'عدم توضيح المواصفات، تغيير الكهرباء والسباكة بعد التشطيب، وقلة المتابعة على مراحل التنفيذ. كل هذه الأمور تزيد التكلفة وتؤثر على الجودة النهائية.',
  },
  {
    question: 'كيف تختار الإضاءة المناسبة لكل غرفة؟',
    answer:
      'كل مساحة تحتاج طبقات إضاءة مختلفة: إضاءة عامة، إضاءة وظيفية، وإضاءة جمالية. هذا التوازن يضمن الراحة ويمد المساحة بطابعها المناسب.',
  },
  {
    question: 'هل يمكن تجهيز المشروع عبر تصميم واحد فقط؟',
    answer:
      'يمكن، لكن أفضل نتيجة تأتي عندما نربط بين التصور، التخطيط، والمواد. هذا يجعل المساحة متكاملة وتحقق الراحة والجمال في نفس الوقت.',
  },
  {
    question: 'كيف أضمن أن المشروع سيبقى بجودة عالية؟',
    answer:
      'من خلال التخطيط المسبق، اختيار الخامات المناسبة، ومتابعة التنفيذ بشكل دوري. الجودة لا تأتي من التجربة العشوائية، بل من إتقان المراحل.',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Journal = () => {
  return (
    <main className="relative overflow-hidden bg-bg-primary">
      <Seo
        title="الأسئلة الشائعة — انطلاقة"
        description="أسئلة متكررة عن التصميم الداخلي، التشطيبات، الإضاءة، والتنفيذ من انطلاقة."
        url="/journal"
        keywords={['أسئلة شائعة', 'تصميم داخلي', 'تشطيبات', 'إضاءة', 'انطلاقة', 'تنفيذ']}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div aria-hidden="true" className="pointer-events-none absolute -start-24 top-16 h-72 w-72 rounded-full bg-brand-500/10 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -end-24 bottom-16 h-72 w-72 rounded-full bg-accent-soft/10 blur-[110px]" />

      <div className="container-site relative pb-24 pt-32 md:pb-28 md:pt-40">
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-accent-soft" />
            <p className="text-[11px] font-semibold tracking-[0.3em] text-accent-soft md:text-xs">
              FAQ
            </p>
            <span className="h-px w-10 bg-accent-soft" />
          </div>

          <h1 className="font-display text-4xl font-black leading-[1.1] text-text-primary sm:text-5xl md:text-6xl">
            الأسئلة <span className="text-accent-soft">الشائعة</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-primary/70 md:text-lg">
            مجموعة من الإجابات السريعة والمفيدة لمساعدتك في فهم مشروعك قبل أن تبدأ، بطريقة واضحة وسهلة.
          </p>
        </motion.section>

        <section className="mt-14 grid gap-5 md:gap-6">
          {faqItems.map((item, index) => (
            <motion.article
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.7rem] border border-text-primary/10 bg-bg-card/80 p-5 shadow-lg shadow-bg-primary/20 backdrop-blur-sm md:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent-soft/30 bg-accent-soft/10 text-accent-soft">
                  <CircleHelp className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <h2 className="font-display text-xl font-extrabold text-text-primary md:text-2xl">
                    {item.question}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-primary/70 md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-[2rem] border border-text-primary/10 bg-bg-card/70 px-6 py-8 text-center md:px-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-soft/30 bg-accent-soft/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-accent-soft">
            <Sparkles className="h-3.5 w-3.5" />
            نحتاجك
          </div>
          <h3 className="font-display text-2xl font-extrabold text-text-primary md:text-3xl">
            إذا كانت فكرتك تحتاج ضبطًا، فلدينا الطريق المناسب لها.
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-primary/70 md:text-base">
            نبدأ من الفكرة، نرتب التفاصيل، ونصوغ لك مساحة مريحة، جمالية، وتحقق لك راحة الاستمرار.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400 active:scale-[0.98]"
            >
              ابدأ مشروعك
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link
              to="/#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-text-primary/15 bg-bg-primary/50 px-6 py-3 text-sm font-bold text-text-primary transition-all duration-300 hover:border-accent-soft/40 hover:text-accent-soft active:scale-[0.98]"
            >
              استكشف خدماتنا
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  )
}

export default Journal
