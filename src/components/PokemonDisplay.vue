<template>
  <div class="page-holder relative flex flex-col">
    <div class="flex justify-end">
      <div class="relative">
        <div
          v-for="item in pokemons"
          v-bind:key="item"
          v-bind:class="item"
          class="cursor-pointer"
          v-on:click="$router.push(`/Pokedex/${item}`)"
        >
          <img v-bind:src="getImageUrl(`${item}-card.svg`)" v-bind:alt="item" />
        </div>
      </div>
    </div>
    <p class="text">{{ pokemons.length }} Pokèmons in your Pokèdex</p>
  </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '../utils'

const pokemons: string[] = ['bulbasaur', 'charizard', 'blastoise']
</script>

<style scoped lang="scss">
.bulbasaur {
  @apply absolute right-0 -top-1;
}

.charizard {
  @apply relative top-32 z-50;
}

.blastoise {
  @apply absolute right-0 -bottom-[254px];
}
</style>
