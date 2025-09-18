export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const token = '7644264825:AAE30t4FEYfmHssrkn30ySvCK7l0zEdqSYY'
    const chatId = '-4629832473'



    const text = `
📨 Новая заявка с сайта:

👤 Имя: ${body.name}
📧 Email: ${body.email}
📱 Телефон: ${body.phone}

Согласие на обработку политики конфиденциальности: ${body.politConfirm}
Согласие на рассылку: ${body.spamConfirm}

url страницы заявки: ${body.currentUrl}
Где была нажата кнопка: ${body.currentPlase}
  `.trim()

    const res = await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        body: {
            chat_id: chatId,
            text,
        },
    })

    return res
})