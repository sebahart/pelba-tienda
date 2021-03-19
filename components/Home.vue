<template>
  <div>
    <article class="content-info icons-block container mx-auto py-12">
      <div class="grid grid-cols-3 gap-4 sm:gap-6">
        <div class="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 mx-auto md:w-12 md:h-12"
            viewBox="0 0 24 24"
          >
            <path
              style="fill: #625788"
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 14.083c0-2.145-2.232-2.742-3.943-3.546-1.039-.54-.908-1.829.581-1.916.826-.05 1.675.195 2.443.465l.362-1.647c-.907-.276-1.719-.402-2.443-.421v-1.018h-1v1.067c-1.945.267-2.984 1.487-2.984 2.85 0 2.438 2.847 2.81 3.778 3.243 1.27.568 1.035 1.75-.114 2.011-.997.226-2.269-.168-3.225-.54l-.455 1.644c.894.462 1.965.708 3 .727v.998h1v-1.053c1.657-.232 3.002-1.146 3-2.864z"
            />
          </svg>
          <h3>Tenemos el mejor Precio</h3>
        </div>

        <div class="item">
          <svg
            class="w-8 h-8 mx-auto md:w-12 md:h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              style="fill: #625788"
              d="M3 18h-2c-.552 0-1-.448-1-1v-2h15v-9h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.121-.728 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-6c0 1.656-1.344 3-3 3s-3-1.344-3-3zm3-1.2c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm12 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-4-2.8h-14v-10c0-.552.448-1 1-1h12c.552 0 1 .448 1 1v10zm3-6v3h4.715l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.42z"
            />
          </svg>
          <h3>Envíos a todo el país.</h3>
          <p class="card-description">
            Gratuito a CABA y zonas de Gran Buenos Aires. <br />En compras
            superiores a $2500
          </p>
        </div>

        <div class="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 mx-auto md:w-12 md:h-12"
            viewBox="0 0 24 24"
          >
            <path
              style="fill: #625788"
              d="M17 9.761v-4.761c0-2.761-2.238-5-5-5-2.763 0-5 2.239-5 5v4.761c-1.827 1.466-3 3.714-3 6.239 0 4.418 3.582 8 8 8s8-3.582 8-8c0-2.525-1.173-4.773-3-6.239zm-8-4.761c0-1.654 1.346-3 3-3s3 1.346 3 3v3.587c-.927-.376-1.938-.587-3-.587s-2.073.211-3 .587v-3.587zm4 11.723v2.277h-2v-2.277c-.596-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723z"
            />
          </svg>
          <h3>Sitio Seguro</h3>
        </div>
      </div>
    </article>

    <div
      class="py-6 sm:py-12"
      style="background-image: linear-gradient(70deg, #675986 0%, #9e7075 100%)"
    >
      <article
        id="content-text-2"
        class="container mx-auto content-text text-center text-white"
      >
        <h2 class="text-center text-xl sm:text-2xl md:text-3xl font-bold">
          ¿Tenés dudas sobre los productos?
        </h2>
        <p class="text-xs sm:text-sm font-light">
          Completá el formulario y un asesor comercial cotizará tu pedido
        </p>
        <a href="https://www.pelba.com.ar/pedido-de-presupuesto/">
          <button
            class="mt-6 bg-white rounded-md shadow-md p-2 sm:px-6 text-gray-900 uppercase text-sm hover:bg-gray-700 hover:text-white"
          >
            Solicitar Cotización
          </button>
        </a>
      </article>
    </div>

    <article id="content-text-4" class="content-text py-12">
      <div class="container mx-auto">
        <h2 class="text-center font-bold text-xl sm:text-2xl md:text-3xl">
          Seguinos en instagram
        </h2>
        <div class="flex justify-center">
          <a
            class="btn-primary mt-10 mb-4"
            href="https://www.instagram.com/pelba.ar/"
            target="_blank"
          >
            @pelba.ar
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style scoped>
.content-text {
  /*
  background-image: linear-gradient(70deg, #675986 0%, #9e7075 100%);
  */
}

#content-products ul li {
  position: relative;
}

.btn-green {
  background-color: #4bb053;
}

.content-info .item {
  @apply text-center p-2;
}

.content-info .item img {
  display: inline;
}

.content-info .item p {
  line-height: 1.2rem;
}

.content-info .item h3 {
  color: #625788;
}

.content-info .item span {
  border-color: #625788;
  color: #625788;
  fill: #625788;
  font-size: 2.4rem;
  margin-bottom: 20px;
}

.content-info .btn-green {
  margin: 22px 0 42px;
}

.content-info.icons-block h3 {
  @apply text-xs py-2;
}

#content-newsletter input {
  font-size: 1rem;
  outline: none;
  padding: 7px;
  width: 100%;
}

#content-publicity-1 img {
  filter: grayscale(1);
  padding: 10px;
}

#content-newsletter .btn-newsletter {
  font-size: 14px;
  line-height: 1.4285;
  padding: 6px 12px;
}

#content-publicity-2 .btn-instagram {
  border-radius: 0;
  font-size: 14px;
  line-height: 1.4285;
  padding: 6px 12px;
}

.card-title {
  @apply text-base font-bold;
}
.card-description {
  @apply font-light hidden;
}

@screen sm {
  .card-title {
    @apply py-6;
  }
  .content-info.icons-block h3 {
    @apply text-base;
  }
  .card-description {
    @apply block;
  }
}

@screen md {
  .card-title {
    @apply text-xl;
  }
  .content-info.icons-block h3 {
    @apply text-xl;
  }
}
</style>
