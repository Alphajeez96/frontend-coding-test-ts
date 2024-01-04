<template>
  <main>
    <SideBar />

    <div class="w-full">
      <slot />
    </div>
  </main>
</template>

<script lang="ts" setup>
import SideBar from '../partials/SideBar.vue'
</script>

<style lang="scss" scoped>
main {
  @apply bg-black h-screen p-9 flex gap-9;
}
</style>
