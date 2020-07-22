const Mongoose = require('mongoose')
const STATUS = {
    0: 'Disconectado',
    1: 'Conectado',
    2: 'Conectando',
    3: 'Disconectando'
}

function createConnection(schema={}){
    const connection = {};

    function init(){
        this.connection = connect()
    }

    function connect() {
        Mongoose.connect(process.env.MONGODB_URL, { 
            useNewUrlParser: true , 
            useUnifiedTopology: true
        }, function (error) {
            if (!error) return
            console.error('Falha na conexão', error)
        })

        const connection = Mongoose.connection
        connection.once('open', () => console.log('database em funcionamento...'))
        return connection
    }

    async function isConnected() {
        const state = STATUS[this.connection.readyState]
        if(state == 'Conectado') return state

        if(state !== 'Conectando') return state

        await new Promise(resolve => setTimeout(resolve, 1000))
        
        return STATUS[this.connection.readyState]
    }

    return{
        init,
        isConnected
    }
}

module.exports = createConnection