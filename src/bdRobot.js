const createConnection = require('./db/mongoDB');
const materialSchema = require('./db/materialSchema')

function createBdRobot(content = {}) {

    async function start() {
        console.log('passo 04: persistencia de dados normalizados iniciada ', content.jsonNormalized.length)
        //tem que melhorar esse processamento para tratar melhor a promisse devolvida pelo metodo de insercao
        
        const db = createConnection(materialSchema)
        const result = await db.insertMany(content.jsonNormalized)

        if(result.insertedCount > 0)
            content.versionedData = true
        else 
            result.insertedCount = false

        console.log('passo 04: persistencia de dados normalizados concluida')
    }

    return {
        start
    }
}
module.exports = createBdRobot