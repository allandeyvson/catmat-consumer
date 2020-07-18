const normalize = require('normalize-text')

function createNormalizeRobot(content = {}) {
    
    function start() {
        //console.log(content.json)
        content.json.map(
            obj => {
                console.log( 
                    normalize
                        .normalizeText(obj.descricaoMaterial)
                        .toUpperCase()
                        .replace('/', ' ')                        
                        .split(' ')
                )
                return obj
            }
        )

    }

    return {
        start
    }
}
module.exports = createNormalizeRobot