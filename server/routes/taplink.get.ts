export default defineEventHandler((event) => {
    return sendRedirect(event, '/', 301)
})