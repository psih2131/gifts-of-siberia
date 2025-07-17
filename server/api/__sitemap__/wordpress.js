// server/api/__sitemap__/wordpress.ts
import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
    const posts = await $fetch('https://cy18281-wordpress-gre0n.tw1.ru/wp-json/wp/v2/my-blog')

    return posts.map(post => ({
        // Transform external URL to your domain
        loc: `/blog/posts/${post.slug}`, // NOT post.link
        lastmod: post.modified,
        changefreq: 'weekly',
        priority: 0.7,
    }))
})