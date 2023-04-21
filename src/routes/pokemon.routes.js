const { Router } = require('express')
const pokemonController = require('../controllers/pokemonController')

const pokemonRoutes = Router()

pokemonRoutes.post('/create', pokemonController.create)
pokemonRoutes.get('/listAllPokemons', pokemonController.listAllPokemons)
pokemonRoutes.get('/listAllPokemonsLegendary', pokemonController.listAllPokemonsLegendary)
pokemonRoutes.get('/listByName', pokemonController.listByName)
pokemonRoutes.get('/search', pokemonController.searchByName)
pokemonRoutes.get('/searchByAttack', pokemonController.searchByAttack)
pokemonRoutes.get('/searchByTypes', pokemonController.searchByTypes)

module.exports = pokemonRoutes  