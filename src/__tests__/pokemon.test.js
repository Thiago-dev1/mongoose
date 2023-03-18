const Pokemon = require('../models/Pokemon');
const pokemonRepository = require('../repository/pokemon');
const { start, drop } = require('./memoryServer/conn');
const { create: createPokemon } = require('./seeds/pokemons');

let instance;
describe('Pokemon', () => {
    beforeAll(async () => {
        await start()
       await createPokemon()
      })
      afterAll(async () => {
        
       await drop()
      });
    it('Get ALL', async () => {
        const repository = new pokemonRepository(Pokemon)
        const response = await repository.findCount()

        expect(response).toBe(2)
    })
})