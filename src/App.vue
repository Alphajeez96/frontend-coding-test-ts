<template>
  <component v-bind:is="$route.meta.layout || LayoutMain">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import LayoutMain from './components/layout/LayoutMain.vue'
</script>
