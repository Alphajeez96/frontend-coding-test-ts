<template>
  <main>
    <SideBar />

    <div class="w-full">
      <slot />
    </div>

    <aside>
      <img class="ash" src="../../assets/ash.svg" alt="ash" />

      <img class="pikachu" src="../../assets/pikachu.svg" alt="pikachu" />
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

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.ash {
  @apply absolute bottom-0 left-0;
  animation: fadeIn 2s ease-out;
}

@keyframes popAndBounce {
  0% {
    transform: translateY(100%) scale(0);
    opacity: 0;
  }
  60% {
    transform: translateY(-20%) scale(1.2);
  }
  80% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

.pikachu {
  @apply absolute bottom-0 right-0;
  animation: popAndBounce 1s ease-out;
}
</style>
