<template>
  <div id="app">
    <h1 class="centralizado" v-meu-transform:scale.animate="1.2">
      {{ titulo }}
    </h1>
    <p v-show="mensagem">{{ mensagem }}</p>
    <input
      type="search"
      placeholder="filtre aqui"
      v-on:input="filtro = $event.target.value"
    />
    <ul class="lista-fotos">
      <li
        class="lista-fotos-item"
        v-for="foto of fotosComFiltro"
        :key="foto.url"
      >
        <meu-painel v-meu-transform.animate="180" :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
          <router-link :to="{ name: 'edicao', params: { id: foto._id } }">
            <meu-botao
              rotulo="alterar"
              tipo="button"
              :confirmacao="false"
            />
          </router-link>
          <meu-botao
            rotulo="remover"
            tipo="button"
            :confirmacao="false"
            estilo="perigo"
            @botaoAtivado="remove(foto)"
          />
        </meu-painel>
      </li>
    </ul>
    <img src="/static/imagem.png"/>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import FotoService from "../../domain/foto/FotoService";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },

  data() {
    return {
      titulo: "Título da página",
      fotos: [],
      filtro: "",
      mensagem: false,
    };
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
  },

  methods: {
    remove(foto) {
      this.service.apaga(foto._id)
        .then(() => {
          let indice = this.fotos.indexOf(foto); //acha a posição da foto na lista
          this.fotos.splice(indice, 1); //remove 1 elemento do array no indice indicado
          this.mensagem = "Foto removida com sucesso";
        }, err => this.mensagem = err.message); //erro configurado no service.apaga
    },
  },

  created() {
    //essa instancia pode ser usada em todos os métodos aqui do componente
    //ela sempre deve estar dentro do created()
    this.service = new FotoService(this.$resource);

    this.service.lista()
      .then(fotos => this.fotos = fotos, err => this.mensagem = err.message) //erro configurado no service.lista
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

.lista-fotos {
  list-style-type: none;
  padding: 0;
}

.lista-fotos-item {
  display: inline-block;
  margin: 0 10px;
}
</style>
