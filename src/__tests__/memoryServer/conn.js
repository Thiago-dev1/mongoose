const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server')

let instance;
async function start () {
    instance  = await MongoMemoryServer.create()
    const uri = instance.getUri()
    console.log(uri)
   await mongoose.connect(uri)
}

async function drop () {
    await mongoose.disconnect();
    await instance.stop()
}

module.exports = {
    drop,
    start
}