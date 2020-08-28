const util = require('../utils/stringUtil')

function createNormalizeRobot(content = {}) {

    function start() {
        console.log('passo 03: normalizacao de json iniciada')

        content.jsonNormalized = content.json.map(
            obj => {                
                var text = util.normalizeText(obj.descricaoMaterial)                               
                return {
                    ...obj,
                    tags: text.split(' ')
                }
            }
        )

        console.log('passo 03: normalizacao de json concluida')
    }    

    return {
        start
    }
}
module.exports = createNormalizeRobot