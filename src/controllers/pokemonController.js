const Pokemon = require('../models/Pokemon')
const pokemonRepository = require('../repository/pokemon')

async function create(req, res) {
    const {_id, types, name, legendary, hp, attack, defense, speed, generation} = req.body
    const repository = new pokemonRepository(Pokemon)
    
    
    try {
        const pokemon = await repository.create({_id, types, name, legendary, hp, attack, defense, speed, generation})

        return res.status(201).json(pokemon)
    } catch (error) {
        console.log(error)
    }
}

async function listAllPokemons(req, res) {
    const repository = new pokemonRepository(Pokemon)
    
    try {
        const pokemons = await repository.find()
        const count = await repository.findCount()

        const response = {
            totalPokemons: count,
            pokemons
        }

        return res.status(201).json(response)
    } catch (error) {
        console.log(error)
    }
}

async function listAllPokemonsLegendary(req, res) {
    const repository = new pokemonRepository(Pokemon)
    
    try {
        const pokemons = await repository.findDocumentsByFields({legendary: true})
        const count = await repository.findDocumentsByFieldsCount({legendary: true})

        const response = {
            totalPokemons: count,
            pokemons
        }

        return res.status(201).json(response)
    } catch (error) {
        console.log(error)
    }
}

async function listByName(req, res) {
    const { name } = req.body
    const repository = new pokemonRepository(Pokemon)
    
    try {
        const pokemons = await repository.find({name: name})

        const response = {
            totalPokemons: count,
            pokemons
        }

        return res.status(201).json(response)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    create,
    listAllPokemons,
    listAllPokemonsLegendary,
    listByName
}