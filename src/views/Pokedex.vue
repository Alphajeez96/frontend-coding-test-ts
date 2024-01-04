<template>
  <section>
    <!-- Top bar region -->
    <div class="text-primary-white">
      <p class="font-medium">Hey Nora👋🏾</p>

      <div class="flex items-center">
        <div class="flex items-center">
          <h1 class="text-[2.5rem]">Select Your <strong> Pokèmon</strong></h1>
          <img class="pt-2 pl-1" src="../assets/pokedex.svg" alt="pokedex" />
        </div>

        <!-- Search Region Here -->
        <div class="ml-auto relative w-1/3">
          <input type="text" placeholder="Search for Pokèmons" />
          <span class="block absolute top-4 left-4">
            <img src="../assets/search-icon.svg" alt="search" />
          </span>
        </div>
      </div>

      <!-- Pokemon display -->
      <section class="mt-16">
        <PokemonDisplay />
      </section>
    </div>
  </section>
</template>

<script lang="ts" setup>
import PokemonDisplay from '../components/PokemonDisplay.vue'
</script>

<style lang="scss" scoped>
input {
  @apply h-[50px] rounded-lg focus:outline-none text-sm pl-11 text-primary-white w-full duration-500;
  border: 0.25px solid rgba(221, 221, 221, 0.5);
  background: rgba(221, 221, 221, 0.05);

  &::placeholder {
    @apply text-[#666];
  }
}
</style>
