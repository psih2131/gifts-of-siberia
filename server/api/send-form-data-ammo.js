export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    try {
        const res = await $fetch.raw('https://apicrm.ru/amo/domain/gift-siberia.com/send.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                name: body.name,
                email: body.email,
                phone: body.phone,
                currentUrl: body.currentUrl,
                currentPlace: body.currentPlase,
            }).toString(),
        })

        // Выведем весь ответ сервера в консоль, чтобы понять что ему не нравится
        const text = await res._data
        console.log('Ответ ammo:', text)

        return text
    } catch (err) {
        console.error('Ошибка статус:', err.response?.status)
        console.error('Ошибка тело:', await err.response?.text())
        throw err
    }
})