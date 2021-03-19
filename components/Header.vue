<template>
  <header>
    <div id="top-bar" class="flex items-end py-1 sm:px-6">
      <div class="container flex justify-end pb-1">
        <a href="https://fegime.com.ar/index.php/es/">
          <img alt="img fegime" src="~/static/img/fegime.png" class="sm:mr-2" />
        </a>
      </div>
    </div>

    <!-- header menu -->
    <div>
      <div class="container flex justify-between items-center px-2">
        <div class="">
          <a
            class="logo"
            href="https://www.pelba.com.ar/"
            title="PELBA | MATERIALES ELÉCTRICOS | ILUMINACIÓN"
          >
            <img
              alt="PELBA | MATERIALES ELÉCTRICOS | ILUMINACIÓN"
              src="~/static/img/pelba-logo-21.png"
            />
          </a>
        </div>
        <div class="flex flex-col pl-6">
          <!-- Menu -->
          <div id="menu-container" class="w-full sm:py-2">
            <nav
              class="xl:container mx-auto flex py-2 md:placeholder-gray-100 items-center justify-between"
            >
              <ul
                class="nav-menu bg-white flex justify-center flex-wrap items-center"
              >
                <li>
                  <a href="/" title="Inicio">Inicio</a>
                </li>
                <li>
                  <a
                    href="https://www.pelba.com.ar/pedido-de-presupuesto/"
                    title="Solicitar presupuesto"
                  >
                    Solicitar presupuesto
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.pelba.com.ar/como-comprar/"
                    title="Como comprar"
                  >
                    Cómo comprar
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.pelba.com.ar/mi-cuenta/"
                    title="Mi cuenta"
                  >
                    MI CUENTA
                  </a>
                </li>
                <li>
                  <a href="https://www.pelba.com.ar/empresa/" title="Empresa">
                    Empresa
                  </a>
                </li>
                <li>
                  <a href="https://www.pelba.com.ar/productos/" title="Pelba">
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="py-3 flex lg:pr-20 xl:container">
            <button
              @click="productosMenu = !productosMenu"
              class="btn-primary text-left text-xs mr-4 hidden sm:flex items-center"
            >
              <span>Productos por categoría</span>
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <Buscar class="hidden sm:flex xl:ml-6" />

            <div
              class="menu-toggle mr-2 cursor-pointer md:hidden"
              @click="openMenu"
            >
              <svg
                v-if="!menuMobile"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              <svg
                v-else
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MENU -->
    <div v-if="menuMobile" style="background-color: #333">
      <ul
        class="menu-mobile text-white text-center p-2 uppercase font-light text-sm"
      >
        <li><a href="/" title="Inicio">Inicio</a></li>
        <li>
          <a
            href="https://www.pelba.com.ar/pedido-de-presupuesto/"
            title="Presupuesto"
          >
            Solicitar presupuesto
          </a>
        </li>
        <li>
          <a href="https://www.pelba.com.ar/como-comprar/" title="Como comprar">
            COMO COMPRAR
          </a>
        </li>
        <li>
          <a href="https://www.pelba.com.ar/mi-cuenta/" title="Mi cuenta">
            MI CUENTA
          </a>
        </li>
        <li>
          <a href="https://www.pelba.com.ar/empresa" title="Empresa">
            Empresa
          </a>
        </li>
      </ul>
    </div>

    <!-- PRODUCTS MODULE -->
    <div v-if="productosMenu" class="bg-primary py-6 nav-productos">
      <div class="container">
        <div class="text-center pb-4">
          <Buscar class="flex sm:hidden" />
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-6">
          <div class="category">
            <a
              href="https://www.pelba.com.ar/categoria-producto/accesorios-y-herramientas/"
            >
              <svg
                class="w-6 h-6 sm:w-8 sm:h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <h6>Accesorios y Herramientas</h6>
            </a>
          </div>
          <div class="category">
            <a
              href="https://www.pelba.com.ar/categoria-producto/climatizacion/"
            >
              <svg
                class="w-6 h-6 sm:w-8 sm:h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <h6>Climatización</h6>
            </a>
          </div>
          <div class="category">
            <a
              href="https://www.pelba.com.ar/categoria-producto/iluminacion-2/"
            >
              <svg
                class="w-6 h-6 sm:w-8 sm:h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
              <h6>Iluminación</h6>
            </a>
          </div>
          <div class="category">
            <a href="https://www.pelba.com.ar/categoria-producto/industria/">
              <svg
                class="w-6 h-6 sm:w-8 sm:h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
              </svg>
              <h6>Industria</h6>
            </a>
          </div>
          <div class="category">
            <a href="https://www.pelba.com.ar/categoria-producto/ofertas/">
              <svg
                class="w-6 h-6 sm:w-8 sm:h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                ></path>
              </svg>
              <h6>Ofertas</h6>
            </a>
          </div>
          <div class="category">
            <a
              href="https://www.pelba.com.ar/categoria-producto/productos-para-instalaciones/"
            >
              <svg
                class="w-6 h-6 sm:w-8 sm:h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <h6>Productos para Instalaciones</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import Buscar from '~/components/Buscar.vue'

export default {
  name: 'Header',
  components: { Buscar },
  data() {
    return {
      menuMobile: false,
      productosMenu: false,
    }
  },
  methods: {
    openMenu() {
      this.menuMobile = !this.menuMobile
      this.productosMenu = this.menuMobile
    },
  },
}
</script>

<style scoped>
@import '~/assets/css/menu.css';

.logo img {
  max-width: 128px;
}
#top-bar {
  background-color: #003168;
  border-bottom: 2px solid #7eceff;
}
header {
  border-bottom: 2px solid #ddd;
}
.nav-productos h6 {
  @apply text-xs mt-2;
}
.nav-productos .category {
  @apply text-center text-white p-2;
}
.nav-productos .category svg {
  transition: all 0.2s linear;
}
.nav-productos .category:hover svg {
  transform: scale(1.1);
}
.nav-productos .category:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@screen sm {
  .nav-productos h6 {
    @apply text-sm;
  }
  .logo img {
    max-width: 128px;
  }
}

@screen md {
  .logo img {
    max-width: 164px;
  }
}

@screen lg {
  .logo img {
    max-width: 200px;
  }
}

.menu-mobile li {
  @apply py-2;
}
</style>
