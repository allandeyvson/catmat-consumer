const createSheetRobot = require('./robots/sheetRobot');
const createJsonRobot = require('./robots/jsonRobot');
const createNormalizeRobot = require('./robots/normalizeRobot');
const createBdRobot = require('./robots/bdRobot');

function create(content) {

    async function start() {
        console.log('iniciando processamento')

        const sheet = createSheetRobot(content)
        sheet.start()

        const json = createJsonRobot(content)
        json.start()

        const normalized = createNormalizeRobot(content)
        normalized.start()

        const bd = createBdRobot(content)
        await bd.start()


        console.log('finalizando processamento')
    }

    return {
        start
    }
}

module.exports = create
