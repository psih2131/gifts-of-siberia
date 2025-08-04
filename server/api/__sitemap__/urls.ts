import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

export default defineSitemapEventHandler(() => {
    return [
        { loc: '/', _sitemap: 'pages' },
        { loc: '/yur-litsam', _sitemap: 'pages' },
        { loc: '/premium-teas', _sitemap: 'pages' },
        { loc: '/gift-sets', _sitemap: 'pages' },
        { loc: '/extract-chagi', _sitemap: 'pages' },
        { loc: '/export', _sitemap: 'pages' },
        { loc: '/corporation-gifts', _sitemap: 'pages' },
        { loc: '/about-company', _sitemap: 'pages' },
        { loc: '/products/', _sitemap: 'pages' },
        { loc: '/blog/', _sitemap: 'pages' },
        { loc: '/contacts', _sitemap: 'pages' },
        { loc: '/system/soglashenie', _sitemap: 'pages' },
        { loc: '/system/deklaracziya', _sitemap: 'pages' },
        { loc: '/system/privacy-policy', _sitemap: 'pages' },


    ] satisfies SitemapUrlInput[]
})