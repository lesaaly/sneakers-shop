<template>
  <Drawer v-if="drawerOpen" />
  <div class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14">
    <HeaderSite @openDrawer="openDrawer" />
    <router-view />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import HeaderSite from './components/HeaderSite.vue'
import Drawer from './components/Drawer.vue'

const drawerOpen = ref(false)

const closeDrawer = () => {
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
}

provide('drawerActions', {
  openDrawer,
  closeDrawer,
})
</script>
