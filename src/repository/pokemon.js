const Repository = require("./repository")
const PokemonModel = require("../models/Pokemon")


class Pokemon extends Repository {
    /**
     * funçaõ para buscar pokemons por regex, ou seja, busca por parte do nome do pokemon
     * @param {*} filter 
     * @param {*} projection 
     * @returns 
     */
    findRegex(filter, projection) {
        return PokemonModel.find({name: {$regex: filter.name}}, projection)
    }


    /**
     * função para buscar pokemons por ataque
     * @param {*} filter 
     * @param {*} projection 
     * @returns 
     */
    findAttack(filter, projection) {
        return PokemonModel.find({attack: {$gte: filter.attack}}, projection)
    }
    
    /**
     *  função para buscar pokemons por tipo de pokemon
     * @param {*} filter 
     * @param {*} projection 
     * @returns 
     */
    findTypes(filter, projection) {
        return PokemonModel.find({types: {$in: filter.types}}, projection)
    }
}

module.exports = new Pokemon(PokemonModel)