export default defineNuxtPlugin(() => {
    const route = useRoute()

    if (process.client && route.query.utm_source) {
        localStorage.setItem('utm_source', route.query.utm_source)
        localStorage.setItem('utm_medium', route.query.utm_medium)
        localStorage.setItem('utm_campaign', route.query.utm_campaign)
        localStorage.setItem('utm_term', route.query.utm_term)
        localStorage.setItem('utm_content', route.query.utm_content)
    }
})
