const Mongoose = require('mongoose')
require('dotenv').config()

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

    async function read(itens, skip = 0, limit = 0) {
        //return schema.find(item).skip(skip).limit(limit)
        return schema.find({tags: {$all: itens}})
    }

    async function insertMany(itens){
        return await schema.insertMany(itens, { ordered: false, limit: 10, rawResult: true, lean:true})
    }

    return{
        isConnected,
        create,
        read,
        insertMany
    }
}

module.exports = createConnection