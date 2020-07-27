const normalize = require('normalize-text')

function createNormalizeRobot(content = {}) {

    function start() {
        console.log('passo 03: normalizacao de json iniciada')

        content.jsonNormalized = content.json.map(
            obj => {                
                var text = removeCaracteres(obj.descricaoMaterial)
                text = normalize.normalizeText(text).toUpperCase()
                text = normalize.normalizeDiacritics(text).toUpperCase()                
                return {
                    ...obj,
                    tags: text.split(' ')
                }
            }
        )

        console.log('passo 03: normalizacao de json concluida')
    }

    function removeCaracteres(text) {
        text = text.replace(new RegExp('[/]', 'gi'), '');
        text = text.replace(new RegExp('[:]', 'gi'), ' ');
        text = text.replace(new RegExp('[;]', 'gi'), ' ');
        text = text.replace(new RegExp('[!]', 'gi'), ' ');
        text = text.replace(new RegExp('[\]', 'gi'), ' ');
        text = text.replace(new RegExp('[-]', 'gi'), ' ');        
        return text.toUpperCase();
    }

    return {
        start
    }
}
module.exports = createNormalizeRobot