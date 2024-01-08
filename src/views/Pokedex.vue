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
