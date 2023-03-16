const app = require('./app')
const { main: conn } = require('./db/conn')

conn()
.then(() => {
 app.emit('pronto')
})
.catch(err => console.log(err))

app.on('pronto', () => {
    app.listen(3333, () => console.log('Server ON!!!'))
})