<template>
    <div class="info-form-sec__form">
        <p class="info-form-sec__form-title">Оставьте заявку</p>
        <p class="info-form-sec__form-subtitle">Заполните форму, и наши специалисты свяжутся с Вами в ближайшее время.</p>
        <form action="">
            <div class="info-form-sec__form-inp" :class="{'form-error-field': formNameValidStatus == false}">
                <input v-model="formName" type="text" placeholder="Ваше имя">
                <p v-if="formNameValidStatus == false" class="form-valid-error">Проверьте правильность введенных данных</p>
            </div>

            <div class="info-form-sec__form-inp" :class="{'form-error-field': formEmailValidStatus == false}">
                <input v-model="formEmail" type="text" placeholder="Email">
                <p v-if="formEmailValidStatus == false" class="form-valid-error">Проверьте правильность введенных данных</p>
            </div>

            <div class="info-form-sec__form-inp" :class="{'form-error-field': formPhoneValidStatus == false}">
                <input v-model="formPhone" type="text" placeholder="Номер телефона">
                <p v-if="formPhoneValidStatus == false" class="form-valid-error">Проверьте правильность введенных данных</p>
            </div>

            <div class="info-form-sec__form-inp-btn-v2" @click="validationForm()">
                Оставить заявку
                <div class="info-form-sec__form-inp-btn-v2-icon">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5004 10.25C12.0904 10.25 11.7504 9.90999 11.7504 9.49999V4.30999L11.0304 5.02999C10.7404 5.31999 10.2604 5.31999 9.97043 5.02999C9.68043 4.73999 9.68043 4.25999 9.97043 3.96999L11.9704 1.96999C12.1804 1.75999 12.5104 1.68999 12.7904 1.80999C13.0704 1.91999 13.2504 2.19999 13.2504 2.49999V9.49999C13.2504 9.90999 12.9104 10.25 12.5004 10.25Z" fill="white"/>
                    <path d="M14.5004 5.24994C14.3104 5.24994 14.1204 5.17994 13.9704 5.02994L11.9704 3.02994C11.6804 2.73994 11.6804 2.25994 11.9704 1.96994C12.2604 1.67994 12.7404 1.67994 13.0304 1.96994L15.0304 3.96994C15.3204 4.25994 15.3204 4.73994 15.0304 5.02994C14.8804 5.17994 14.6904 5.24994 14.5004 5.24994Z" fill="white"/>
                    <path d="M14.2605 18.25H10.7305C9.68047 18.25 8.74047 17.67 8.27047 16.73L7.10047 14.39C7.06047 14.3 6.97047 14.25 6.88047 14.25H2.48047C2.07047 14.25 1.73047 13.91 1.73047 13.5C1.73047 13.09 2.07047 12.75 2.48047 12.75H6.89047C7.56047 12.75 8.16047 13.12 8.46047 13.72L9.63047 16.06C9.84047 16.49 10.2705 16.75 10.7505 16.75H14.2805C14.7605 16.75 15.1905 16.49 15.4005 16.06L16.5705 13.72C16.8705 13.12 17.4705 12.75 18.1405 12.75H22.5005C22.9105 12.75 23.2505 13.09 23.2505 13.5C23.2505 13.91 22.9105 14.25 22.5005 14.25H18.1405C18.0405 14.25 17.9605 14.3 17.9205 14.39L16.7505 16.73C16.2505 17.67 15.3105 18.25 14.2605 18.25Z" fill="white"/>
                    <path d="M15.5 23.25H9.5C4.07 23.25 1.75 20.93 1.75 15.5V12.5C1.75 7.81005 3.49 5.46005 7.39 4.89005C7.81 4.83005 8.18 5.11005 8.24 5.52005C8.3 5.93005 8.02 6.31005 7.61 6.37005C4.47 6.83005 3.25 8.55005 3.25 12.5V15.5C3.25 20.1101 4.89 21.75 9.5 21.75H15.5C20.11 21.75 21.75 20.1101 21.75 15.5V12.5C21.75 8.55005 20.53 6.83005 17.39 6.37005C16.98 6.31005 16.7 5.93005 16.76 5.52005C16.82 5.11005 17.2 4.83005 17.61 4.89005C21.51 5.46005 23.25 7.81005 23.25 12.5V15.5C23.25 20.93 20.93 23.25 15.5 23.25Z" fill="white"/>
                    </svg>
                </div>
            </div>

            <div class="form-popup__checkbox-wrapper">

                  <div class="checkbox-item-custom">

                      <label class="checkbox-item-custom__wrapper">
                        <input type="checkbox" v-model="formPolitCheckbox">
                        <span class="checkbox-item-custom__box"></span>
                      </label>

                      <p class="checkbox-item-custom__text">Я согласен на <NuxtLink to="/system/soglasie-na-obrabotku-personalnyh-dannyh">обработку персональных данных</NuxtLink> ,
                         <NuxtLink to="/system/soglashenie">пользовательское соглашение</NuxtLink> и <NuxtLink to="/system/privacy-policy">политику конфиденциальности</NuxtLink> </p> 

                      <p v-if="formPolitCheckbox == false && sendStatus == false" class="form-valid-error">Подтвердите согласие</p>
                  </div>


                  <div class="checkbox-item-custom">
                    
                      <label class="checkbox-item-custom__wrapper">
                        <input type="checkbox" v-model="formSpamCheckbox">
                        <span class="checkbox-item-custom__box"></span>
                      </label>

                      <p class="checkbox-item-custom__text">Я согласен на рекламную рассылку</p>
                  </div>

                </div>

            <!-- <p class="info-form-sec__form-down-text">Нажимая на кнопку, вы автоматически соглашаетесь с политикой конфиденциальности и обработкой персональных данных</p> -->

            <p v-if="sendStatus == false" class="form-valid-error-main">Ошибка, проверьте правильность введенных данных</p>

            <!-- <div class="info-form-sec__form-captcha-wrapper">
                <img src="@/assets/images/img/captcha.png" alt="" class="info-form-sec__form-captcha">
            </div> -->
        </form>
    </div>
</template>



<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
// import popupForm from '@/components/popups/popup__form.vue'



//DATA
const store = useCounterStore()

const formName = ref(null)

const formEmail = ref(null)

const formPhone = ref(null)

const formPolitCheckbox = ref(false)

const formSpamCheckbox = ref(false)

const route = useRoute()

const formNameValidStatus = ref(null)

const formEmailValidStatus = ref(null)

const formPhoneValidStatus = ref(null)

const sendStatus = ref(null)


//METHODS 

function validationForm(){
    console.log(formName.value, formEmail.value, formPhone.value)

    store.changeTrigerButtonForm('Форма внизу страницы')

    validName(formName.value)

    validEmail(formEmail.value)

    validPhone(formPhone.value)

    if(formNameValidStatus.value == true && formEmailValidStatus.value == true && formPhoneValidStatus.value == true && formPolitCheckbox.value == true){
        sendStatus.value = true

        sendForm()
    }
    else{
         sendStatus.value = false
    }
    
}

function validName(element) {
  if (element && element.length >= 3) {
    formNameValidStatus.value = true
  } else {
    formNameValidStatus.value = false
  }
}


function validEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email && re.test(email)) {
    formEmailValidStatus.value = true
  } else {
    formEmailValidStatus.value = false
  }
}


function validPhone(phone) {
  // пример простой регулярки: только цифры, может начинаться с +, длина 10-15 символов
  const re = /^\+?\d{10,15}$/
  if (phone && re.test(phone)) {
    formPhoneValidStatus.value = true
  } else {
    formPhoneValidStatus.value = false
  }
}



//send request to telegram
const sendForm = async () => {
  try {
    const response = await $fetch('/api/send-form', {
      method: 'POST',
      body: {
        name: formName.value,
        email: formEmail.value,
        phone: formPhone.value,
        politConfirm: formPolitCheckbox.value,
        spamConfirm: formSpamCheckbox.value,
        currentUrl: store.domainUrlCurrent + route.fullPath,
        currentPlase: store.trigerButtonForm || 'Не получилось оприделить точное положение'
      },
    })

    // Теперь response содержит ответ с сервера
    console.log('Ответ от сервера:', response)

    sendFormAmmo()

    store.changeTrigerButtonForm(null)

  } catch (error) {
    console.error('Ошибка при отправке формы:', error)
    alert('Произошла ошибка при отправке заявки')
  }
}


const sendFormAmmo = async () => {
  try {
    const response = await $fetch('/api/send-form-data-ammo', {
      method: 'POST',
      body: {
        name: formName.value,
        email: formEmail.value,
        phone: formPhone.value,
        politConfirm: formPolitCheckbox.value,
        spamConfirm: formSpamCheckbox.value,
        currentUrl: store.domainUrlCurrent + route.fullPath,
        currentPlase: store.trigerButtonForm || 'Не получилось оприделить точное положение',
        utm_source: localStorage.getItem('utm_source'),
        utm_medium: localStorage.getItem('utm_medium'),
        utm_campaign: localStorage.getItem('utm_campaign'),
        utm_term: localStorage.getItem('utm_term'),
        utm_content: localStorage.getItem('utm_content'),
      },
    })

    // Теперь response содержит ответ с сервера
    console.log('Ответ от сервера:', response)

    openFormDonePopup()
    


  } catch (error) {
    console.error('Ошибка при отправке формы:', error)
    alert('Произошла ошибка при отправке заявки')
  }
}



//open form popup 
function openFormDonePopup(){
    store.changePopupCurrent('popup-form-done')
}



//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});

</script>
