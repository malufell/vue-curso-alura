//equivale ao modelo de foto, será feito com uma classe
//o valor default dos atributos será em branco, caso nenhuma propriedade seja passada ao instanciar a classe

export default class Foto {
  constructor(titulo='', url='', descricao='') {
    this.titulo = titulo;
    this.url = url;
    this.descricao = descricao;
  }
}
