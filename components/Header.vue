<template>
  <header>
    <div id="top-bar" class="flex items-end">
      <div class="container flex justify-end pb-1">
        <a href="https://fegime.com.ar/index.php/es/">
          <img alt="img fegime" src="~/static/img/fegime.png" class="sm:mr-2" />
        </a>
      </div>
    </div>

    <Menu />
  </header>
</template>
<script>
import Menu from '~/Menu.vue'

export default {
  name: 'Header',
  components: { Menu },
}
</script>

<style scoped>
#top-bar {
  background-color: #003168;
  border-bottom: 2px solid #7eceff;
  height: 36px;
  max-height: 40px;
}

nav .logo {
  max-width: 250px;
  min-width: 250px;
}
</style>
