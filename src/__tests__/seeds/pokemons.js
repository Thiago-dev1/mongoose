const Pokemon = require("../../models/Pokemon")

 
async function create() {
    const pokemon = new Pokemon({_id: 15 ,types: ["Grass"], attack: 49, defense: 56, generation: 1, hp: 88, legendary: true, name: 'Bulbasaur', speed: 38})
    const pokemon2 = new Pokemon({_id: 17 ,types: ["Grass"], attack: 49, defense: 56, generation: 1, hp: 88, legendary: true, name: 'Bulbasaur', speed: 38})

    await pokemon.save()
    await pokemon2.save()
}

module.exports = {
    create
}