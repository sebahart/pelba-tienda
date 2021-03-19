<template>
  <div class="card">
    <a :href="product.permalink">
      <div class="content-image mx-2 sm:mx-4">
        <img
          alt="product"
          :src="product.images[0].src"
          class="shadow-md rounde-md hover:shadow-lg"
        />
      </div>

      <div class="px-2 sm:px-4 py-2 sm:py-4">
        <h3
          class="font-normal text-center sm:text-bold text-xs sm:text-sm uppercase tracking-widest"
          v-html="product.name"
        ></h3>
        <div class="footer text-center">
          <span class="price" v-html="product.price_html"></span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['product', 'category'],
  mounted() {
    console.log(this.product)
  },
}
</script>

<style scoped>
.card {
  position: relative;
  background-color: white;
  @apply mb-12 mb-6 mx-2;
}
.card:hover {
  @apply shadow-xl border;
}
#content-products .content-image {
  cursor: pointer;
  margin-top: -1.5rem;
  transition: all 0.3s;
  @apply mx-auto;
}
#content-products .content-image img {
  object-fit: contain;
  width: 128px;
  height: 128px;
  @apply w-full border-b-2 border-primary block p-2 mx-auto;
}

#content-products .card:hover .content-image {
  transform: translate(0, 0.5rem);
  @apply shadow-lg;
}

.footer {
  @apply mt-4;
}

.description {
  @apply mt-1 font-light hidden text-center text-gray-600;
}
.price {
  line-height: 1rem !important;
  @apply text-gray-700 text-sm;
}
@screen sm {
  .description {
    @apply text-xs block;
  }
  #content-products .content-image img {
    width: 200px;
    height: 200px;
  }
}
@screen md {
  .description {
    @apply text-base;
  }
  .price {
    @apply text-base;
  }
}
</style>
