import img01 from '../assets/images/founder/Gemini_Generated_Image_4s2bgz4s2bgz4s2b.webp'
import img02 from '../assets/images/founder/Gemini_Generated_Image_vkggwgvkggwgvkgg.webp'

/*
  نظام صور المؤسس — مصدر واحد لكل الصور.

  لإضافة صور جديدة لاحقًا:
    1) ضع ملف الصورة داخل: src/assets/images/founder/
    2) استوردها أعلى الملف (img03، img04، ...).
    3) أضفها في نهاية مصفوفة founderImages بالأسفل فقط.
    ثم تُوزَّع تلقائيًا على أماكن الصفحة:
      - founderImages[0]  → الصورة الرئيسية في الـHero.
      - founderImages[1]  → الصورة الثانوية الصغيرة في الـHero.
      - founderImages[2]  → الصورة الرئيسية في قسم «من الرؤية إلى الواقع».
      - founderImages[3]  → الصورة الجانبية الصغيرة في نفس القسم.
      - founderImages[4]  → صورة قسم «فريق».
      - founderImages[5+] → تُعرض في شبكة صور إضافية (إن وُجدت).

  إذا كان عدد الصور أقل من عدد الأماكن، تُعاد أقرب صورة متاحة
  لملء المكان دون فراغات قبيحة أو placeholders.
*/
export const founderImages = [img01, img02]

const lastAvailable = founderImages[founderImages.length - 1] ?? null

export const founderImageSlots = {
  heroMain: founderImages[0] ?? lastAvailable,
  heroDetail: founderImages[1] ?? lastAvailable,
  visionMain: founderImages[2] ?? lastAvailable,
  visionDetail: founderImages[3] ?? lastAvailable,
  teamMain: founderImages[4] ?? lastAvailable,
}

export const founderExtraImages = founderImages.slice(5)

export const founder = {
  name: 'علي خالد عبيد',
  role: 'مؤسس أثر برايم',
  tagline: 'نصنع المساحات التي تترك أثرًا.',
  nameLatin: 'ALI KHALED OBAID',
}

export const founderPhilosophy = [
  {
    num: '01',
    title: 'الفكرة أولًا',
    desc: 'كل مشروع يبدأ قبل التنفيذ؛ بفهم الرؤية، والإحساس بالمساحة، ورؤية النهاية من البداية. التفكير الجيد نصف الجودة.',
  },
  {
    num: '02',
    title: 'التفاصيل تصنع الفرق',
    desc: 'زاوية مضبوطة، لمسة دقيقة، اختيار مدروس. الفارق بين مكان عادي ومكان يُذكر لا يظهر إلا في التفاصيل.',
  },
  {
    num: '03',
    title: 'التنفيذ مسؤولية',
    desc: 'الالتزام بالمواعيد، والدقة في كل مرحلة، ومتابعة العمل حتى آخر لمسة؛ لأن الكلمة حين تُعطى تصبح أمانة.',
  },
  {
    num: '04',
    title: 'الأثر هو النتيجة',
    desc: 'المقياس الحقيقي للنجاح أن تترك المساحة أثرًا في من يعيشها، واسمًا يبقى في الذاكرة بعد انتهاء المشروع.',
  },
]
