const normalize = require('normalize-text')

function createNormalizeRobot(content = {}) {

    function start() {
        content.jsonNormalized = content.json.map(
            obj => {
                //var text = obj.descricaoMaterial
                var text = removeCaracteres(obj.descricaoMaterial)
                text = normalize.normalizeText(text).toUpperCase()
                text = normalize.normalizeDiacritics(text).toUpperCase()                
                console.log(text.match( /[^\,!\?]+[\,!\?]+/g ));
                //console.log(text)
                return {
                    ...obj,
                    tags: text.split(' ')
                }
            }
        )       
    }

    function removeCaracteres(text) {
        text = text.replace(new RegExp('[:]', 'gi'), ',');
        /*text = text.replace(new RegExp('[/]', 'gi'), ' ');
        text = text.replace(new RegExp('[:]', 'gi'), ' ');
        text = text.replace(new RegExp('[;]', 'gi'), ' ');
        text = text.replace(new RegExp('[!]', 'gi'), ' ');
        text = text.replace(new RegExp('[\]', 'gi'), ' ');
        text = text.replace(new RegExp('[-]', 'gi'), ' ');
        */
        return text.toUpperCase();
    }

    return {
        start
    }
}
module.exports = createNormalizeRobot