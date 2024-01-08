<template>
  <main>
    <SideBar />

    <div class="w-full">
      <slot />
    </div>

    <aside>
      <img
        class="absolute bottom-0 left-0"
        src="../../assets/ash.svg"
        alt="ash"
      />

      <img
        class="absolute bottom-0 right-0"
        src="../../assets/pikachu.svg"
        alt="pikachu"
      />
    </aside>
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
