<template>
  <div v-if="loading" class="loading-container">
    <img
      src="https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif"
      alt="loader"
    />
  </div>
  <div v-else class="flex">
    <!-- Image region -->
    <div class="w-1/2">
      <div class="image-holder">
        <img v-bind:src="getImageUrl(`${$route.params.name}.gif`)" alt="" />
      </div>
      <h2 class="text-8xl text-[#201F1F] p-6 font-bold">
        {{ capitalizeText($route.params.name as string) }}
      </h2>
    </div>

    <!-- Details Region -->
    <div class="w-1/2 relative">
      <div class="text-center text-primary-white pt-24">
        <h1 class="text-4xl font-semibold">
          {{ capitalizeText($route.params.name as string) }}
        </h1>
      </div>

      <!-- Abilities -->
      <div class="mt-12 flex justify-center gap-4">
        <!-- Weight Here -->
        <div class="text-primary-white">
          <p class="text-xs">{{ details?.weight }}kg</p>
          <p class="text-[0.5rem] text-center pt-1">Weight</p>
        </div>

        <div class="border-r border-[#343434] ml-4"></div>

        <!-- Height Here -->
        <div class="text-primary-white">
          <p class="text-xs">{{ details?.height }}m</p>
          <p class="text-[0.5rem] text-center pt-1">Height</p>
        </div>

        <div class="border-r border-[#343434] ml-4"></div>

        <div class="text-primary-white">
          <p v-for="(move, i) in details?.moves" v-bind:key="i" class="text-xs">
            {{ move.move?.name }}
          </p>
          <p class="text-[0.5rem] text-center pt-1">Moves</p>
        </div>
      </div>

      <!-- Vectors -->
      <aside>
        <img
          class="absolute bottom-60"
          src="../assets/vector-1.svg"
          alt="vector-1"
        />

        <img
          class="absolute right-0 bottom-60"
          src="../assets/vector-2.svg"
          alt="vector-2"
        />
      </aside>

      <!-- Base Stats -->
      <div class="flex justify-center mt-12 text-[#FF9A44]">
        <div>
          <p class="font-medium text-center">Base Stats</p>

          <div class="mt-6 flex">
            <div class="flex flex-col gap-2">
              <p v-for="(stat, index) in details?.stats" v-bind:key="index">
                {{ retrieveAcronym(stat.name) }}
              </p>
            </div>

            <div class="border-r border-[#343434] mx-4"></div>

            <aside>
              <div
                v-for="(stat, index) in details?.stats"
                v-bind:key="index"
                class="flex items-center gap-2 mb-3"
              >
                <p class="text-sm text-primary-white">{{ stat.base_stat }}</p>
                <div class="w-[250px]">
                  <el-progress
                    v-bind:percentage="stat.base_stat"
                    status="warning"
                    v-bind:show-text="false"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { capitalizeText, getImageUrl } from '../utils'
import $toast from '../plugins/notificationToast'

type PokemonDetails = {
  weight: number
  height: number
  moves: Array<any>
  stats: Array<{ base_stat: number; name: string }>
}

const route = useRoute()
const loading: Ref<boolean> = ref(false)
const details = ref<PokemonDetails | undefined>()

const fetchPokemon = async (): Promise<void> => {
  try {
    loading.value = true
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`,
    )

    const { data } = response

    const transformed: PokemonDetails = {
      weight: data.weight,
      height: data.height,
      moves: data.moves.slice(0, 2),
      stats: data.stats.map((stat: any) => {
        return {
          base_stat: stat.base_stat,
          name: stat.stat.name,
        }
      }),
    }

    details.value = transformed
    $toast.success('Data retrieved Successfully')
  } catch (error: any) {
    $toast.error(error.message || 'An error Occurred')
  } finally {
    loading.value = false
  }
}

const retrieveAcronym = (name: string): string => {
  switch (name) {
    case 'hp':
      return 'HP'

    case 'attack':
      return 'ATK'

    case 'defense':
      return 'DEF'

    case 'special-attack':
      return 'SATK'

    case 'special-defense':
      return 'SDEF'

    case 'speed':
      return 'SPD'

    default:
      return ''
  }
}

onMounted(() => {
  fetchPokemon()
})
</script>

<style scoped lang="scss">
.image-holder {
  @apply flex items-center justify-center bg-[#121212] rounded-lg;
  height: calc(100vh - 300px);
}

.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #191b1d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>
