<template>
  <div id="app" classe="corpo">

    <!-- adiciona um menu acima na página (ele deveria ser um componente separado) -->
    <ul>
      <li v-for="route of routes" :key="route.path"><router-link :to="route.path ? route.path : '/'"> {{ route.titulo }}</router-link></li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from './routes/routes'

export default {
  //filter é para não listar as rotas que eu indiquei em "routes.js" que não devem ir para o menu
  //vai puxar tudo que tiver menu = true
  data() {
    return {
      routes: routes.filter(rota => rota.menu)
    }
  }
}
</script>
<style scoped>

</style>
