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

    <!-- image here -->
    <div class="p-8">
      <svg
        width="217"
        height="217"
        viewBox="0 0 217 217"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="217" height="217" rx="8" fill="#FC9E5A" />
        <g clip-path="url(#clip0_13_160)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M146.351 164.542C148.871 155.326 143.979 136.379 143.979 136.379C143.979 136.379 140.43 151.814 134.886 157.519C130.155 162.385 124.36 165.76 116.049 166.647C122.844 163.346 127.517 156.464 127.517 148.509C127.517 137.343 118.309 128.29 106.949 128.29C95.5897 128.29 86.3806 137.343 86.3806 148.509C86.3806 151.559 87.068 154.451 88.2979 157.044C81.193 151.384 80.0758 142.309 80.0758 142.309C80.0758 142.309 72.1421 175.248 94.0028 190.743C115.863 206.237 158.687 192.919 158.687 192.919C158.687 192.919 97.4034 236.039 51.9919 189.108C12.8736 148.68 41.782 95.4566 41.782 95.4566C41.782 95.4566 40.5335 100.394 40.5335 106.126C40.5335 111.857 43.641 116.218 43.641 116.218C43.641 116.218 52.9107 96.679 60.1248 88.733C66.9524 81.2129 75.5113 75.1136 82.9039 69.8454C88.5944 65.7901 93.594 62.2273 96.5799 58.888C113.026 40.4984 102.942 7.00224 102.942 7.00224C102.942 7.00224 121.481 23.3462 126.657 44.4545C128.63 52.5006 127.361 61.6555 126.226 69.8422C124.384 83.1325 122.895 93.8716 136.204 93.1748C157.713 92.0484 139.023 58.888 139.023 58.888C139.023 58.888 187.812 84.5314 184.167 129.38C180.522 174.229 130.838 184.425 130.838 184.425C130.838 184.425 143.83 173.758 146.351 164.542Z"
            fill="url(#paint0_linear_13_160)"
          />
        </g>
        <rect
          x="43"
          y="32"
          width="129.776"
          height="154.109"
          fill="url(#pattern0)"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image0_13_160"
              transform="scale(0.0208333 0.0175439)"
            />
          </pattern>
          <linearGradient
            id="paint0_linear_13_160"
            x1="31.6602"
            y1="6.99956"
            x2="155.073"
            y2="227.282"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <clipPath id="clip0_13_160">
            <rect
              width="204"
              height="204"
              fill="white"
              transform="translate(6 7)"
            />
          </clipPath>
          <image
            id="image0_13_160"
            width="48"
            height="57"
            xlink:href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
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
      @apply cursor-pointer;
      background: rgba(221, 221, 221, 0.1);
    }
  }
}
</style>
