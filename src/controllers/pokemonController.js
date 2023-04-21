const Pokemon = require('../models/Pokemon')
const pokemonRepository = require('../repository/pokemon')

async function create(req, res) {
    const {_id, types, name, legendary, hp, attack, defense, speed, generation} = req.body
    
    
    try {
        const pokemon = await pokemonRepository.create({_id, types, name, legendary, hp, attack, defense, speed, generation})

        return res.status(201).json(pokemon)
    } catch (error) {
        console.log(error)
    }
}

async function listAllPokemons(req, res) {
    
    try {
        const pokemons = await pokemonRepository.find()
        const count = await pokemonRepository.findCount()

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
    try {
        const pokemons = await pokemonRepository.findDocumentsByFields({legendary: true})
        const count = await pokemonRepository.findDocumentsByFieldsCount({legendary: true})

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
    
    try {
        const pokemons = await pokemonRepository.find({name: name})

        const response = {
            totalPokemons: count,
            pokemons
        }

        return res.status(201).json(response)
    } catch (error) {
        console.log(error)
    }
}

async function searchByName(req, res) {
    try {
        const { name } = req.body
        let filter = {}
        filter.name = name
        const pokemons = await pokemonRepository.findRegex(filter, {name: 1, _id: 0})

        const response = {
            pokemons
        }

        return res.status(201).json(response)
    } catch (error) {
        console.log(error)
    }
}

async function searchByAttack(req, res) {
    try {
        const { attack } = req.body
        let filter = {}
        filter.attack = attack
        const pokemons = await pokemonRepository.findAttack(filter, {name: 1, _id: 0, attack: 1, legendary: 1})

        const response = {
            pokemons
        }

        return res.status(201).json(response)
    } catch (error) {
        console.log(error)
    }
}

async function searchByTypes(req, res) {
    try {
        const { types } = req.body
        let filter = {}
        filter.types = types
        const pokemons = await pokemonRepository.findTypes(filter, {name: 1, _id: 0, types: 1})

        const response = {
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
    listByName,
    searchByName,
    searchByAttack,
    searchByTypes
}