<template>
  <q-layout view="lHh Lpr fff">
    <main-header empty-header />
    <q-page-container>
      <q-page class="window-width row justify-center items-center">
        <login-form />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import { Cookies } from 'quasar'
import queryClient from '@/config/query'
import useApplicationStore from '@/stores/applicationStore'
import { COOKIE_TOKEN_KEY } from '@/config/cookieTokenKey'
import { LoginForm } from '@/components/LoginForm'

const { setDrawer } = useApplicationStore()
//TODO create logout util feature somehow
function resetApp() {
  setDrawer(false)
  Cookies.remove(COOKIE_TOKEN_KEY)
  queryClient.clear()
}
resetApp()
</script>

<style lang="scss" scoped>
.login-card {
  width: 400px;
}

:deep(.q-field--dark) {
  input,
  select {
    color: #fff;
    -webkit-text-fill-color: white;
    -webkit-background-clip: text !important;
    background-clip: text !important;
  }
}
</style>
