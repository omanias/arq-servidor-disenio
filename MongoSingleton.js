import mongoose from 'mongoose'

export default class MongoSingleton {
    static #instance

    constructor() {
        mongoose.connect('mongodb+srv://omanias:1234562023@cluster0.3lmci0d.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    }
    static getInstance() {
        if (this.#instance) {
            console.log("Ya esta conectado")
            return this.#instance
        }
        this.#instance = new MongoSingleton()
        console.log("Conectado")
        return this.#instance
    }
}
