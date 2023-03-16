const mongoose = require('mongoose')
const app = require('../app')

async function main() {
  mongoose.set('strictQuery', false)
  await mongoose.connect('mongodb://127.0.0.1:27017/pokemon')
  console.log('Conectou com Mongoose!')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


module.exports = {main, mongoose} 