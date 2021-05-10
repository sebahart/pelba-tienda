<template>
  <div class="w-full">
    <input
      v-model="buscar"
      type="text"
      placeholder="Buscar..."
      class="border-l-2 border-primary pl-2 py-1 w-full"
      style="background-color: #eee"
      v-on:keyup.enter="search"
    />
    <button class="btn-primary text-xs" @click="search">
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buscar: '',
    }
  },
  methods: {
    search() {
      window.location.href =
        'https://www.pelba.com.ar/?s=' + this.buscar + '&post_type=product'
    },
  },
}
</script>
