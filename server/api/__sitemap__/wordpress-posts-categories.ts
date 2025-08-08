// server/api/__sitemap__/wordpress.ts
import { defineSitemapEventHandler } from '#imports'

interface WPPost {
    slug: string
    modified: string
}

export default defineSitemapEventHandler(async () => {
    const posts: WPPost[] = await $fetch('https://panel.gift-siberia.com/wp-json/wp/v2/blog-category?per_page=100')

    return posts.map((post) => ({
        loc: `https://gift-siberia.com/blog/categories/${post.slug}/`,       // локальный маршрут
        lastmod: post.modified,                // дата последнего изменения
        changefreq: 'weekly',
        priority: 0.7
    }))
})