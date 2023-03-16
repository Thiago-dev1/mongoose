const { mongoose } = require('../db/conn')
const { Schema } = mongoose

const Pokemon = mongoose.model(
  'Pokemon',
  new Schema({
    _id: {
      type: Number,
      required: true,
      unique: true
    },
    types: {
        type: Array
    },
    name: {
        type: String
    },
    legendary: {
        type: Boolean,
        index:  true
    },
    hp: {
        type: Number
    },
    attack: {
        type: Number
    },
    defense: {
        type: Number
    },
    speed: {
        type: Number
    },
    generation: {
        type: Number
    },
  }),
)

module.exports = Pokemon 