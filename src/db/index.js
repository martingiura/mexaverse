// Importa
const mongoose = require('mongoose')

// function
async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/mexaverse', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log(`Conectado a la base de datos`)
}
// Export

module.exports = connectDB