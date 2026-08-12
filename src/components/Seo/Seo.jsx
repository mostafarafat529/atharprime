import { useEffect } from 'react'

const absolute = (url) => {
  if (!url || /^https?:\/\//.test(url)) return url || ''
  return `${window.location.origin}${url}`
}

const upsert = (selector, attr, value, tag = 'meta') => {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(tag)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

const Seo = ({ title, description, image, url, keywords }) => {
  useEffect(() => {
    document.title = title
    upsert('meta[name="description"]', 'content', description)
    upsert('meta[name="keywords"]', 'content', keywords?.length ? keywords.join('، ') : '')

    const ogImage = absolute(image)
    const canonical = absolute(url)

    upsert('meta[property="og:type"]', 'content', 'article')
    upsert('meta[property="og:title"]', 'content', title)
    upsert('meta[property="og:description"]', 'content', description)
    if (ogImage) upsert('meta[property="og:image"]', 'content', ogImage)
    if (canonical) upsert('meta[property="og:url"]', 'content', canonical)

    upsert('meta[name="twitter:card"]', 'content', 'summary_large_image')
    upsert('meta[name="twitter:title"]', 'content', title)
    upsert('meta[name="twitter:description"]', 'content', description)
    if (ogImage) upsert('meta[name="twitter:image"]', 'content', ogImage)

    upsert('link[rel="canonical"]', 'href', canonical, 'link')
  }, [title, description, image, url, keywords])

  return null
}

export default Seo
