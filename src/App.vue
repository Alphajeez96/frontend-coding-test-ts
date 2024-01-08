<template>
  <component v-bind:is="$route.meta.layout || LayoutMain">
    <router-view v-slot="{ Component }">
      <transition name="fade-up" mode="out-in">
        <component v-bind:is="Component" />
      </transition>
    </router-view>
  </component>
</template>

<script setup lang="ts">
import LayoutMain from './components/layout/LayoutMain.vue'
</script>
