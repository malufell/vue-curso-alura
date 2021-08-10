import Vue from 'vue';


// el = corresponde ao elemento que irá usar a diretiva
// binding = é pra obter parâmetros do elemento que usar a diretiva
// vnode = permite acessar propriedades do componente em que a diretiva foi usada
// uso do vnode não é muito recomendado, pq diminui o reaproveitamento da diretiva

//essa diretiva irá aplicar animações aos elementos que for aplicada
//rotate ou scale
//rotate poderá ser reverse e o usuário pode passar quantos graus de rotação
//scale o usuário passa qual escala deseja aumentar o el
Vue.directive('meu-transform', {

  bind(el, binding, vnode) {

    let current = 0;

    el.addEventListener('dblclick', function() {

      let incremento = binding.value || 90;
      let efeito;

      if(!binding.arg || binding.arg == 'rotate') {

        if(binding.modifiers.reverse) {
          current-=incremento;
        } else {
          current+=incremento;
        }

        efeito = `rotate(${current}deg)`;

      } else if(binding.arg == 'scale') {
          efeito = `scale(${incremento})`;
      }

      this.style.transform = efeito;
      if(binding.modifiers.animate) return this.style.transition = "transform 0.5s"
    })
  }
});
