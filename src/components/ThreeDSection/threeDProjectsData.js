import img3D01 from '../../assets/images/3d/Annotation 2026-08-10 022421.webp'
import img3D02 from '../../assets/images/3d/Annotation 2026-08-10 022343.webp'
import img3D03 from '../../assets/images/3d/Annotation 2026-08-10 022328.webp'
import img3D04 from '../../assets/images/3d/Annotation 2026-08-10 022246.webp'

const images = [img3D01, img3D02, img3D03, img3D04]

const coohomLinks = [
  'https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FOF3ETBNSKB&utm_source=pano_share&uri=%2Fpub%2Ftool%2Fbim%2Fcloud%3Fdesignid%3D3FO3DQFMNQ4E%26redirecturl%3D%2Fpub%2Fsaas%2Fapps%2Fproject%2Flist%26em%3D0%26locale%3Den_US&utm_content=3FOF3ETBNSKB&utm_medium=linkcopy',
  'https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FOF3ESO217I&utm_source=pano_share&uri=%2Fpub%2Ftool%2Fbim%2Fcloud%3Fdesignid%3D3FO3DQFMNQ4E%26redirecturl%3D%2Fpub%2Fsaas%2Fapps%2Fproject%2Flist%26em%3D0%26locale%3Den_US&utm_content=3FOF3ESO217I&utm_medium=linkcopy',
  'https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FOF3ESONP80&utm_source=pano_share&uri=%2Fpub%2Ftool%2Fbim%2Fcloud%3Fdesignid%3D3FO3DQFMNQ4E%26redirecturl%3D%2Fpub%2Fsaas%2Fapps%2Fproject%2Flist%26em%3D0%26locale%3Den_US&utm_content=3FOF3ESONP80&utm_medium=linkcopy',
  'https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FOF3ESFPGBB&utm_source=pano_share&uri=%2Fpub%2Ftool%2Fbim%2Fcloud%3Fdesignid%3D3FO3DQFMNQ4E%26redirecturl%3D%2Fpub%2Fsaas%2Fapps%2Fproject%2Flist%26em%3D0%26locale%3Den_US&utm_content=3FOF3ESFPGBB&utm_medium=linkcopy',
  'https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FOF3ESJUR1R&utm_source=pano_share&uri=%2Fpub%2Ftool%2Fbim%2Fcloud%3Fdesignid%3D3FO3DQFMNQ4E%26redirecturl%3D%2Fpub%2Fsaas%2Fapps%2Fproject%2Flist%26em%3D0%26locale%3Den_US&utm_content=3FOF3ESJUR1R&utm_medium=linkcopy',
  'https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FOF3ETBP21O&utm_source=pano_share&uri=%2Fpub%2Ftool%2Fbim%2Fcloud%3Fdesignid%3D3FO3DQFMNQ4E%26redirecturl%3D%2Fpub%2Fsaas%2Fapps%2Fproject%2Flist%26em%3D0%26locale%3Den_US&utm_content=3FOF3ETBP21O&utm_medium=linkcopy',
  'https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FOF3ESDXG9R&utm_source=pano_share&uri=%2Fpub%2Ftool%2Fbim%2Fcloud%3Fdesignid%3D3FO3DQFMNQ4E%26redirecturl%3D%2Fpub%2Fsaas%2Fapps%2Fproject%2Flist%26em%3D0%26locale%3Den_US&utm_content=3FOF3ESDXG9R&utm_medium=linkcopy',
  'https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FOF3ESHM1U8&utm_source=pano_share&uri=%2Fpub%2Ftool%2Fbim%2Fcloud%3Fdesignid%3D3FO3DQFMNQ4E%26redirecturl%3D%2Fpub%2Fsaas%2Fapps%2Fproject%2Flist%26em%3D0%26locale%3Den_US&utm_content=3FOF3ESHM1U8&utm_medium=linkcopy',
  'https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FOF3ESE0TUH&utm_source=pano_share&uri=%2Fpub%2Ftool%2Fbim%2Fcloud%3Fdesignid%3D3FO3DQFMNQ4E%26redirecturl%3D%2Fpub%2Fsaas%2Fapps%2Fproject%2Flist%26em%3D0%26locale%3Den_US&utm_content=3FOF3ESE0TUH&utm_medium=linkcopy',
  'https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FOF3ER1SRPE&utm_source=pano_share&uri=%2Fpub%2Ftool%2Fbim%2Fcloud%3Fdesignid%3D3FO3DQFMNQ4E%26redirecturl%3D%2Fpub%2Fsaas%2Fapps%2Fproject%2Flist%26em%3D0%26locale%3Den_US&utm_content=3FOF3ER1SRPE&utm_medium=linkcopy',
  'https://www.coohom.com/pub/tool/panorama/show?obsPlanId=3FO3G6UIXIWE&locale=en_US',
]

const projectMeta = [
  {
    title: 'مساحة بتفاصيلها',
    description: 'جولة حية داخل التصميم، من الخامات إلى توزيع الإضاءة.',
    category: '3D Interior',
  },
  {
    title: 'صالة المعيشة',
    description: 'مساحة مفتوحة تجمع بين الأناقة والراحة اليومية.',
    category: '3D Living',
  },
  {
    title: 'غرفة النوم',
    description: 'تصميم هادئ يراعي الخصوصية والاسترخاء.',
    category: '3D Bedroom',
  },
  {
    title: 'المطبخ العصري',
    description: 'تفاصيل عملية وتوزيع يخدم الحركة والاستخدام.',
    category: '3D Kitchen',
  },
  {
    title: 'جلسة عائلية',
    description: 'توازن بين الضوء والملمس لمساحة معيشة دافئة.',
    category: '3D Living',
  },
  {
    title: 'مساحة العمل',
    description: 'بيئة تدعم التركيز والراحة البصرية.',
    category: '3D Office',
  },
  {
    title: 'التشطيبات الداخلية',
    description: 'لمسات تشطيب واضحة من زوايا متعددة.',
    category: '3D Finish',
  },
  {
    title: 'المدخل والممر',
    description: 'أول انطباع عن المكان بتفاصيل دقيقة.',
    category: '3D Entrance',
  },
  {
    title: 'الإضاءة والأجواء',
    description: 'توزيع الإضاءة يمنح المساحة شخصيتها.',
    category: '3D Interior',
  },
  {
    title: 'مساحة متعددة الاستخدام',
    description: 'مرونة تصميمية تناسب احتياجات مختلفة.',
    category: '3D Interior',
  },
  {
    title: 'رؤية متكاملة',
    description: 'نظرة شاملة على التصميم قبل بدء التنفيذ.',
    category: '3D Interior',
  },
]

export const threeDProjects = projectMeta.map((meta, index) => ({
  id: index + 1,
  title: meta.title,
  description: meta.description,
  category: meta.category,
  image: images[index % images.length],
  url: coohomLinks[index],
  type: 'interactive',
}))

export default threeDProjects
