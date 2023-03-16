const { Router } = require('express')
const pokemonRoutes = require('./pokemon.routes')

const routes = Router()

routes.use('/pokemon', pokemonRoutes)

module.exports = routes