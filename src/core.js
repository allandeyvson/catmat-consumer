const createSheetRobot = require('./sheetRobot');
const createJsonRobot = require('./jsonRobot');
const createNormalizeRobot = require('./normalizeRobot');
const createBdRobot = require('./bdRobot');

function create(content) {

    function start() {
        console.log('iniciando processamento')

        const sheet = createSheetRobot(content)
        sheet.start()

        const json = createJsonRobot(content)
        json.start()

        const normalized = createNormalizeRobot(content)
        normalized.start()

        const bd = createBdRobot(content)
        bd.start()


        console.log('finalizando processamento')
    }

    return {
        start
    }
}

module.exports = create
