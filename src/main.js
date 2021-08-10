import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import { routes } from "./routes/routes";
import "./directives/Transform"
import VeeValidate from 'vee-validate';
import msg from './pt_BR'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css'
import './assets/js/teste-importacao'

Vue.use(VueResource);

Vue.use(VueRouter);

const router = new VueRouter({ routes: routes, mode: 'history' });

//define de forma global o dominio da api onde busco os dados, assim se mudar basta alterar somente aqui
// Vue.http.options.root = 'http://localhost:3000'

//configuração do dominio considerando ambiente de produção
Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000'

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
