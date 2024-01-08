<template>
  <div class="bar-holder">
    <h1 class="header" v-on:click="$router.push('/')">Pokèdex</h1>

    <!-- Nav items -->
    <nav>
      <ul>
        <li class="active">
          <img src="../../assets/pokedex.svg" alt="pokedex" />
          Pokèdex
        </li>

        <li>
          <img src="../../assets/favourites.svg" alt="favourites" />
          Favourites
        </li>

        <li>
          <img src="../../assets/account.svg" alt="account" />
          Account
        </li>
      </ul>
    </nav>

    <div></div>
  </div>
</template>

<style scoped lang="scss">
.bar-holder {
  @apply w-[272px] rounded-lg  text-white  flex flex-col justify-between;
  height: calc(100vh - 60px);
  background: rgba(221, 221, 221, 0.1);

  .header {
    @apply text-3xl font-semibold px-8 pt-12 cursor-pointer;
  }

  li {
    @apply flex items-center gap-2 text-2xl py-4 px-8 mb-8 cursor-not-allowed;

    &.active {
      @apply cursor-pointer bg-primary-grey;
    }
  }
}
</style>
