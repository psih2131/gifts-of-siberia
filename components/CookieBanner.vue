<template>
  <div v-if="!accepted" class="cookie-banner">
    <p>
      {{ $t('cookie.text') }}
      <NuxtLinkLocale to="/system/privacy-policy" class="cookie-link">
        {{ $t('cookie.privacyPolicy') }}
      </NuxtLinkLocale>.
    </p>
    <button @click="accept" class="cookie-btn">
      {{ $t('cookie.accept') }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accepted: true
    }
  },
  mounted() {
    if (!localStorage.getItem('cookieAccepted')) {
      this.accepted = false
    }
  },
  methods: {
    accept() {
      localStorage.setItem('cookieAccepted', 'true')
      this.accepted = true
    }
  }
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  color: #1e1e1e;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 6px rgba(0,0,0,0.1);
  z-index: 9999;
}

.cookie-banner p {
  margin: 0;
  text-align: center;
  line-height: 1.4;
}

.cookie-link {
  color: #4da6ff;
  text-decoration: underline;
}

.cookie-link:hover {
  color: #80c1ff;
}

.cookie-btn {
  background: #C8A65F;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.cookie-btn:hover {
  background: #3399ff;
}
</style>
