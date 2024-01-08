<template>
  <section>
    <button class="back-button" v-on:click="$router.go(-1)">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7_2070)">
          <path
            d="M17.5103 3.86998L15.7303 2.09998L5.84033 12L15.7403 21.9L17.5103 20.13L9.38033 12L17.5103 3.86998Z"
            fill="#BABABA"
          />
        </g>
        <defs>
          <clipPath id="clip0_7_2070">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.000488281 -9.15527e-05)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>

    <div class="holder">
      <PokemonDetails />
    </div>
  </section>
</template>

<script lang="ts" setup>
import PokemonDetails from '../components/PokemonDetails.vue'
</script>

<style lang="scss" scoped>
.back-button {
  @apply w-12 h-12 bg-[#373737] rounded-lg mb-8 flex items-center justify-center;
}
.holder {
  @apply rounded-lg w-full bg-primary-grey pl-0;
  border: 0.25px solid rgba(221, 221, 221, 0.5);
  height: calc(100vh - 150px);
}
</style>
