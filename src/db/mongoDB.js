const Mongoose = require('mongoose')
require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

const STATUS = {
    0: 'Disconectado',
    1: 'Conectado',
    2: 'Conectando',
    3: 'Disconectando'
}

function createConnection(schema={}){
    const connection = connect()

    function connect() {
        Mongoose.connect(process.env.MONGODB_URL, { 
            useNewUrlParser: true , 
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 60000
        }, function (error) {
            if (!error) return
            console.error('Falha na conexão', error)
        })

        const connection = Mongoose.connection
        connection.once('open', () => console.log('database em funcionamento...'))
        return connection
    }

    async function isConnected() {        
        const state = STATUS[connection.readyState]
        if(state == 'Conectado') return state

        if(state !== 'Conectando') return state

        await new Promise(resolve => setTimeout(resolve, 1000))
        
        return STATUS[connection.readyState]
    }

    async function create(item) {        
        return schema.create(item)
    }

    async function read(itens, type, skip = 0, limit = 0) {
        //return schema.find(item).skip(skip).limit(limit)
        return await schema.find({tags: {$all: itens}, tipoMaterial: type})
    }

    async function readForCode(code) {
        return await schema.find({codigoMaterial: code})
    }

    async function insertMany(itens){
        return await schema.insertMany(itens, { ordered: false, limit: 10, rawResult: true, lean:true})
    }

    async function removeAll() {        
        return schema.remove({})
    }    

    return{
        isConnected,
        create,
        read,
        insertMany,
        readForCode,
        removeAll
    }
}

module.exports = createConnection