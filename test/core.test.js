const assert = require('assert');
const createSheetRobot = require('../src/sheetRobot');
const createJsonRobot = require('../src/jsonRobot');
const createNormalizeRobot = require('../src/normalizeRobot');
const createBdRobot = require('../src/bdRobot');
const createConnection = require('../src/db/mongoDB');

const contentMock = {
    archive : './test/planilha.xlsx'
}

describe('Suite de testes da estrategia de leitura/conversao/persistencia de dados', function(){

    it('Testa leitura de dados', () =>{
        const robot = createSheetRobot(contentMock)
        robot.start()
        assert.ok(contentMock.workBook)
    });

    it('Testa conversao de xlss para json', () =>{
        const robot = createJsonRobot(contentMock)
        robot.start()
        assert.ok(contentMock.json)
    });

    it('Testa a normalizacao dos dados presentes no campo `descricaoMaterial`', () =>{
        const robot = createNormalizeRobot(contentMock)
        robot.start()
        assert.ok(contentMock.jsonNormalized)        
    });

    it.only('Testa conexão com a base de dados', async () =>{
        const mongoConnection = createConnection(contentMock)
        mongoConnection.init()
        const connected = await mongoConnection.isConnected()
        assert.equal(connected, 'Conectado')
    });
})
