import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const StorySection = () => {
  return (
    <section className="relative overflow-hidden bg-bg-primary">
      <div className="container-site py-24 md:py-32 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Heading side */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-5"
          >
            <motion.div variants={item} className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-soft" />
              <span
                dir="ltr"
                className="text-[10px] font-semibold uppercase tracking-[0.3em] text-text-secondary md:text-xs"
              >
                The Man Behind the Mark
              </span>
            </motion.div>

            <motion.h2
              variants={item}
              className="font-display text-4xl font-extrabold leading-[1.25] text-text-primary md:text-5xl lg:text-6xl"
            >
              الرجل
              <br />
              وراء <span className="text-accent-soft">الأثر</span>
            </motion.h2>

            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              <span className="h-px w-24 bg-accent-soft" />
              <span dir="ltr" className="text-[11px] font-semibold tracking-[0.3em] text-text-primary/40">
                ALI K. OBAID
              </span>
            </motion.div>
          </motion.div>

          {/* Story side */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-7"
          >
            <motion.p
              variants={item}
              className="text-lg leading-loose text-text-secondary md:text-xl md:leading-loose"
            >
              قبل أن يكون «انطلاقة» اسمًا يُعرف في سوق التشطيبات والمقاولات العامة، كانت البداية
              فكرة بسيطة: أن تُبنى المساحات بطريقة تحترم من سيعيش فيها، وتليق بمن سيُشرف على صنعها.
              من هذا الإحساس بدأ علي خالد عبيد طريقَهُ نحو تأسيس هذه الشركة.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 text-lg leading-loose text-text-secondary md:text-xl md:leading-loose"
            >
              خبرته العملية التي اكتسبها في أكثر من مكان علّمته أن التشطيب ليس مجرد مرحلة أخيرة في
              المشروع؛ بل هو التفاصيل التي تجعل المكان يُحسّ بأنه اكتمل — من التخطيط والاختيارات،
              إلى التنفيذ الدقيق، إلى آخر لمسة قبل التسليم. ولهذا لا ينظر إلى أي مساحة كعمل عابر،
              بل كجزء من اسم يحمل إسـم شركته.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 text-lg leading-loose text-text-secondary md:text-xl md:leading-loose"
            >
              واليوم يعمل إلى جانبه فريق من المتخصصين والعمال، يمدّ نشاطُهم محافظات مختلفة، وتجمعهم
              معه رؤية واحدة: لا تُسلَّم مساحةٌ إلا وقد صارت تستحق أن تُسمى عملًا. وقد وُجّه حضوره في
              بلده وخارجها نحو هذا المعنى تحديدًا — أن يكون الأثرُ هو البصمة التي تُسبقُ الاسم.
            </motion.p>

            <motion.blockquote
              variants={item}
              className="relative mt-10 rounded-2xl border border-text-primary/10 bg-bg-card p-7 md:p-9"
            >
              <span className="absolute start-0 top-0 h-full w-1 rounded-full bg-accent-soft" />
              <p className="font-display text-xl font-bold leading-relaxed text-text-primary md:text-2xl">
                «جودة التشطيب ليست رفاهية؛ إنها أمانة تُعطى في كل مساحة تخرج من يدنا.»
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StorySection
