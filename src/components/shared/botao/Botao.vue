<template>
  <button :type="tipo" class="botao" :class="estiloBotao" @click="disparaAcao()">{{ rotulo }}</button>
</template>

<script>
export default {
  // props: ["tipo", "rotulo", "confirmacao", "estilo"],

  props: {
    tipo: {
      required: true,
      type: String,
    },
    rotulo: {
      required: true,
      type: String,
    },
    confirmacao: {
      required: false,
      type: Boolean,
      default: false,
    },
    estilo: {
      required: false,
      type: String,
      default: 'padrao'
    }
  },


  methods: {
    disparaAcao() {

      if (this.confirmacao) {
        if(confirm("confirma operação?")) {
          this.$emit('botaoAtivado') //cria um evento customizado para o pai
        }
        return;
      }

      this.$emit('botaoAtivado')
    }
  },

  computed: {
    estiloBotao() {
      if(this.estilo == 'padrao' || !this.estilo) return 'botao-padrao'
      if(this.estilo == 'perigo') return 'botao-perigo'
    }
  }

};


</script>

<style scoped lang="sass">

@import './Botao.scss'

</style>
