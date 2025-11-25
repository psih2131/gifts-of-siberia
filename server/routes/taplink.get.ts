import { sendRedirect } from 'h3'

export default defineEventHandler((event) => {
    // Серверный редирект на внешний сайт
    return sendRedirect(event, 'https://taplink.gift-siberia.com/', 302)
})