import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

export default defineSitemapEventHandler(() => {
    return [
        { loc: 'https://gift-siberia.com', _sitemap: 'pages' },
        { loc: 'https://gift-siberia.com/yur-litsam', _sitemap: 'pages' },
        { loc: 'https://gift-siberia.com/premium-teas', _sitemap: 'pages' },
        { loc: 'https://gift-siberia.com/gift-sets', _sitemap: 'pages' },
        { loc: 'https://gift-siberia.com/extract-chagi', _sitemap: 'pages' },
        { loc: 'https://gift-siberia.com/export', _sitemap: 'pages' },
        { loc: 'https://gift-siberia.com/corporation-gifts', _sitemap: 'pages' },
        { loc: 'https://gift-siberia.com/about-company', _sitemap: 'pages' },
        { loc: 'https://gift-siberia.com/products/', _sitemap: 'pages' },
        { loc: 'https://gift-siberia.com/blog/', _sitemap: 'pages' },
        { loc: 'https://gift-siberia.com/contacts', _sitemap: 'pages' },
        { loc: 'https://gift-siberia.com/system/soglashenie', _sitemap: 'pages' },
        { loc: 'https://gift-siberia.com/system/deklaracziya', _sitemap: 'pages' },
        { loc: 'https://gift-siberia.com/system/privacy-policy', _sitemap: 'pages' },


    ] satisfies SitemapUrlInput[]
})