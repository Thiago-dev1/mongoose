

class Repository {
    constructor(model) {
        this.model = model
    }

    async create(data) {
        const item = this.model(data)
        await item.save()
        return item
    }

     find() {
        return this.model.find()
    }

     findCount() {
        return this.model.find().count()
    }

    // Função que busca um único documento em um modelo com base em um ou mais campos e valores especificados.
    async findOne(...args) {
        // Usa o método 'reduce' para mesclar todos os argumentos em um único objeto 'query'.
        // A função de callback funde cada objeto 'arg' no objeto 'acc' acumulado, criando um objeto 'query'
        // que contém todos os campos e valores especificados.
        const query = args.reduce((acc, arg) => ({ ...acc, ...arg }), {})
        return  this.model.findOne({ $and: [query] })
    }

    // Função que busca documentos em um modelo com base em um ou mais campos e valores especificados.
    async findDocumentsByFields(fields) {
        const query = {};
 
        // Loop que percorre todas as propriedades do objeto 'fields' e adiciona cada campo e valor ao objeto 'query'.
        for (const fieldName in fields) {
            // Adiciona o campo e valor a serem pesquisados no objeto 'query' usando a sintaxe de colchetes.
            // Por exemplo, se o campo for "name" e o valor for "John", o código adicionará uma propriedade
            // ao objeto 'query' com a chave "name" e o valor "John".
          query[fieldName] = fields[fieldName]
        }
        const t = await this.model.find({legendary: true}).explain()
        console.log(t.executionStats.executionStages)
        return this.model.find(query)
      } 

       findDocumentsByFieldsCount(fields) {
        const query = {}

        for (const fieldName in fields) {
          query[fieldName] = fields[fieldName]
        }
        return  this.model.find(query).count()
      }
}

module.exports = Repository