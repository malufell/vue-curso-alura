export default class FotoService {
  constructor(resource) {
    this._resource = resource("v1/fotos{/id}");
  }

  lista() {
    return this._resource.query().then(res => res.json(),
      err => {
        console.log(err);
        throw new Error('Não foi possível obter as fotos, tente novamente mais tarde')
      }
    );
  }

  cadastra(foto) {
    if(foto._id) {
      return this._resource.update({ id: foto._id }, foto)
    } else {
      return this._resource.save(foto);
    }
  }

  busca(id) {
    return this._resource.get({ id }).then(res => res.json());
  }

  apaga(id) {
    return this._resource.delete({ id }).then(null, err => {
      console.log(err)
        throw new Error('Não foi possível remover a imagem, tente novamente mais tarde')
    });
  }
}

//ao invés de let resource, foi criado this.resource
//o resource deve estar dentro de created()
//assim está criando dinamicamente esse atributo e ele pode ser acessado nos outros métodos (como o remove)
//se deixasse numa let, não seria acessível aos outros métodos
//o this permite esse acesso
//{/id} serve para passar os parâmetros aos métodos que precisam dele (como o delete)
//o nome colocado nas {} deve ser o mesmo informado no método que passa o parâmetro
