<template>
  <div>
    <Header />

    <div class="">
      <!-- BANNER -->
      <carousel
        autoplay
        :per-page="1"
        :navigation-enabled="false"
        :pagination-enabled="false"
        loop
      >
        <slide v-for="(s, i) in banners" :key="i">
          <a :href="s.link" target="_BLANK">
            <img :src="s.src" alt="PELBA" class="w-full" />
          </a>
        </slide>
      </carousel>
    </div>

    <!-- Productos destacados -->
    <div class="">
      <article id="content-products" class="container py-12 sm:py-20">
        <h2 class="title">Productos Destacados</h2>
        <div v-if="products.home.length > 0">
          <carousel
            autoplay
            loop
            :navigation-enabled="false"
            :pagination-enabled="false"
            :perPage="2"
            :perPageCustom="[
              [768, 3],
              [1024, 4],
            ]"
          >
            <slide v-for="p in products.home" :key="p.sku">
              <Product :product="p" />
            </slide>
          </carousel>
        </div>

        <p class="text-center">
          <a
            class="bg-primary rounded-md text-white inline-block text-sm uppercase font-thin shadow-md px-4 py-2 hover:shadow-lg"
            :class="{ 'animate-pulse': loadings.products }"
            href="https://www.pelba.com.ar/categoria-producto/ofertas/"
            >ver productos</a
          >
        </p>
      </article>
    </div>

    <!-- Iluminacion -->
    <div
      v-if="load"
      style="border-top: 1px solid #ddd; border-bottom: 1px solid #ddd"
    >
      <article id="content-products" class="container py-6 sm:py-12">
        <h2 class="title">Iluminación</h2>
        <div v-if="load && products.iluminacion.length > 0">
          <carousel
            autoplay
            loop
            :navigation-enabled="false"
            :pagination-enabled="false"
            :perPage="2"
            :perPageCustom="[
              [768, 3],
              [1024, 4],
            ]"
          >
            <slide v-for="p in products.iluminacion" :key="p.sku">
              <Product :product="p" />
            </slide>
          </carousel>
        </div>

        <p class="text-center">
          <a
            class="bg-primary rounded-md text-white inline-block text-sm uppercase font-thin shadow-md px-4 py-2 hover:shadow-lg"
            :class="{ 'animate-pulse': loadings.iluminacion }"
            href="https://www.pelba.com.ar/categoria-producto/iluminacion-2/"
            >ver más</a
          >
        </p>
      </article>
    </div>

    <!-- Productos Herramientas -->
    <div v-if="load" class="">
      <article id="content-products" class="container py-6 sm:py-12">
        <h2 class="title">Accesorios y Herramientas</h2>
        <div v-if="load && products.herramientas.length > 0">
          <carousel
            autoplay
            loop
            :navigation-enabled="false"
            :pagination-enabled="false"
            :perPage="2"
            :perPageCustom="[
              [768, 3],
              [1024, 4],
            ]"
          >
            <slide v-for="p in products.herramientas" :key="p.sku">
              <Product :product="p" />
            </slide>
          </carousel>
        </div>

        <p class="text-center">
          <a
            class="bg-primary rounded-md text-white inline-block text-sm uppercase font-thin shadow-md px-4 py-2 hover:shadow-lg"
            :class="{ 'animate-pulse': loadings.products }"
            href="https://www.pelba.com.ar/categoria-producto/accesorios-y-herramientas/"
            >ver más</a
          >
        </p>
      </article>
    </div>

    <Home />

    <Footer />
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

import Header from '~/components/Header.vue'
import Home from '~/components/Home.vue'
import Footer from '~/components/Footer.vue'

import Product from '~/components/ProductCard.vue'

const consumer_key = 'ck_f5eb882f18754a72df6a455183798363045c2c07'
const consumer_secret = 'cs_32e61d75ca0e40fa2e8516c007b4c4177ab586c3'

export default {
  components: {
    Header,
    Home,
    Footer,
    Carousel,
    Slide,
    Product,
  },
  data() {
    return {
      banners: [
        {
          src:
            'https://www.pelba.com.ar/wp-content/uploads/2021/02/banner-apertura-sucursal.jpg',
          link: 'https://pelba.com.ar',
        },
        {
          src:
            'https://www.pelba.com.ar/wp-content/uploads/2021/02/banner-apertura-sucursal-021.jpg',
          link: 'https://pelba.com.ar',
        },
        {
          src: 'https://www.pelba.com.ar/wp-content/uploads/2020/09/31.jpg',
          link: 'https://pelba.com.ar',
        },
      ],
      products: {
        home: [],
        iluminacion: [],
        herramientas: [],
      },
      loadings: {
        products: true,
        iluminacion: true,
        herramientas: true,
      },
      load: false,
      clients: [
        '~/static/brand/abb1.jpg',
        '~/static/brand/siemens1.jpg',
        '~/static/brand/ledvance.jpg',
        '~/static/brand/schneider.jpg',

        '~/static/brand/genrod1.jpg',
        '~/static/brand/signify.jpg',
        '~/static/brand/alic.jpg',
        '~/static/brand/sica.jpg',

        '~/static/brand/cambre.jpg',
        '~/static/brand/cpi.jpg',
        '~/static/brand/argenplas.jpg',
        '~/static/brand/conextube.jpg',

        '~/static/brand/facbsa.jpg',
        '~/static/brand/hellerman.jpg',
        '~/static/brand/imsa.jpg',
        '~/static/brand/lumenac.jpg',

        '~/static/brand/phoenix.jpg',
        '~/static/brand/samet.jpg',
        '~/static/brand/scame.jpg',
        '~/static/brand/fluke.jpg',
      ],
    }
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
      //this.onScroll(); // needed for initial loading on page
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  created() {
    this.fetchProducts()
    this.fetchIluminacion()
    this.fetchHerramientas()
  },
  methods: {
    onScroll() {
      this.load = true
    },
    fetchProducts() {
      var url =
        '/wp-json/wc/v3/products?featured=true&stock_status=instock&per_page=12&consumer_key=' +
        consumer_key +
        '&consumer_secret=' +
        consumer_secret
      this.$axios.get(url).then((response) => {
        console.log('Home:')
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
          this.products.home.push(response.data[i])
        }
        this.loadings.products = false
      })
    },
    fetchHerramientas() {
      var url =
        '/wp-json/wc/v3/products?category=1148&stock_status=instock&per_page=12&consumer_key=' +
        consumer_key +
        '&consumer_secret=' +
        consumer_secret
      this.$axios.get(url).then((response) => {
        console.log('herramientas:')
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
          this.products.herramientas.push(response.data[i])
        }
        this.loadings.herramientas = false
      })
    },
    fetchIluminacion() {
      var url =
        '/wp-json/wc/v3/products?featured=true&category=415&stock_status=instock&per_page=12&consumer_key=' +
        consumer_key +
        '&consumer_secret=' +
        consumer_secret
      this.$axios.get(url).then((response) => {
        console.log('Iluminacion:')
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
          this.products.iluminacion.push(response.data[i])
        }
        this.loadings.iluminacion = false
      })
    },
  },
}
</script>

<style>
.title {
  @apply text-xl font-bold mb-12 text-center;
}
@screen md {
  .title {
    @apply text-2xl mb-20;
  }
}
@screen xl {
  .title {
    @apply text-3xl;
  }
}
</style>
