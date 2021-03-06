const assert = require('assert');
const createSheetRobot = require('../src/robots/sheetRobot');
const createJsonRobot = require('../src/robots/jsonRobot');
const createNormalizeRobot = require('../src/robots/normalizeRobot');
const createBdRobot = require('../src/robots/bdRobot');
const createConnection = require('../src/db/mongoDB');
const materialSchema = require('../src/db/materialSchema')

const contentMock = {
    archive : './test/planilha.xlsx'
}

var mongoConnection = {}


describe('Suite de testes da estrategia de leitura/conversao/persistencia de dados', function(){

    this.timeout(Infinity)

    this.beforeAll(() => {
        mongoConnection = createConnection(materialSchema)
    })

    it('Testa leitura de dados', () =>{
        const robot = createSheetRobot(contentMock)
        robot.start()
        assert.ok(contentMock.workBook)
    });

    it('Testa conversao de xlss para json', () =>{
        const robot = createJsonRobot(contentMock)
        robot.start()
        assert.ok(contentMock.json)
        assert.ok(contentMock.json.length > 0)
    });

    it('Testa a normalizacao dos dados presentes no campo `descricaoMaterial`', () =>{
        const robot = createNormalizeRobot(contentMock)
        robot.start()
        assert.ok(contentMock.jsonNormalized)        
    });

    it.skip('Testa conexão com a base de dados', async () =>{        
        const connected = await mongoConnection.isConnected()
        assert.equal(connected, 'Conectado')
    });

    it.skip('Testa persistencia na base de dados', async () =>{
        const mock = contentMock.jsonNormalized[0]
        const {_id} = await mongoConnection.create(mock)
        assert.ok(_id)
    });

    it.skip('Testa a persistencia dos dados normalizado', async () => {
        const robot = createBdRobot(contentMock, mongoConnection)
        await robot.start()
        assert.equal(contentMock.versionedData, true)
    });

    it.skip('Testando busca por termos', async() => {
        const search = ['TIPO']
        const result = await mongoConnection.read(search)        
        assert.ok(result.length > 0)
    });
})
