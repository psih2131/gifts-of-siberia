// server/api/__sitemap__/wordpress.ts
import { defineSitemapEventHandler } from '#imports'

interface WPPost {
    slug: string
    modified: string
}

export default defineSitemapEventHandler(async () => {
    const posts: WPPost[] = await $fetch('https://cy18281-wordpress-gre0n.tw1.ru/wp-json/wp/v2/my-blog')

    return posts.map((post) => ({
        loc: `/blog/posts/${post.slug}`,       // локальный маршрут
        lastmod: post.modified,                // дата последнего изменения
        changefreq: 'weekly',
        priority: 0.7
    }))
})