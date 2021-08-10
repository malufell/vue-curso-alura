// import Cadastro from '../components/cadastro/Cadastro.vue'
import Home from '../components/home/Home.vue'
// const Cadastro = () => System.import('../components/cadastro/Cadastro.vue')
const Cadastro = () => System.import('../components/cadastro/Cadastro.vue').then(m => m.default);

export const routes = [
  { path: '', name: 'home', component: Home, titulo: 'Home', menu: true },
  { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
  { path: '/cadastro/:id', name: 'edicao', component: Cadastro, titulo: 'Cadastro', menu: false },
  { path: '*', component: Home, menu: false },
]

  // { path: '*', component: Home },
  // se digitar uma url inválida, vai para home
  // para esse path não ir para o menu, foi incluido o atributo menu que será usado no filter lá do componente
