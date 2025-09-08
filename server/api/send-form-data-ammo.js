export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // собираем только заполненные поля
    const payload = {}
    if (body.name) payload.name = body.name
    if (body.phone) payload.phone = body.phone
    if (body.email) payload.email = body.email
    if (body.currentUrl) payload.currentUrl = body.currentUrl
    if (body.currentPlase) payload.currentPlase = body.currentPlase
    if (body.utm_source) payload.utm_source = body.utm_source
    if (body.utm_medium) payload.utm_medium = body.utm_medium
    if (body.utm_campaign) payload.utm_campaign = body.utm_campaign
    if (body.utm_term) payload.utm_term = body.utm_term
    if (body.utm_content) payload.utm_content = body.utm_content


    console.log('data', payload)
    try {
        const res = await $fetch(
            'https://apicrm.ru/amo/domain/gift-siberia.com/send.php',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: payload // $fetch сам делает JSON.stringify
            }
        )
        return res
    } catch (e) {
        console.error(e)
        return { error: 'Не удалось отправить данные', details: e.message }
    }
})
