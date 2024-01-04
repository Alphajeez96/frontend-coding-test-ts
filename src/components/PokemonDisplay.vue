<template>
  <div class="holder flex flex-col">
    djdj
    <p class="text">12 Pokèmons in your Pokèdex</p>
  </div>
</template>

<style scoped lang="scss">
.holder {
  @apply rounded-lg w-full bg-primary-grey pl-10;
  height: calc(100vh - 230px);
  border: 0.25px solid rgba(221, 221, 221, 0.5);
  background-repeat: no-repeat;
  background-image: url('../assets/pokemon-bg.svg');

  .text {
    @apply mt-auto pb-12 text-[2rem] text-primary-white;
  }
}
</style>
