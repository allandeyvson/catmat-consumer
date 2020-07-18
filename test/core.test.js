const assert = require('assert');
const createSheetRobot = require('../src/sheetRobot');
const createJsonRobot = require('../src/jsonRobot');
const createNormalizeRobot = require('../src/normalizeRobot');


const content = {
    archive : './test/planilha.xlsx'
}

describe('Suite de testes da estrategia de leitura/conversao/persistencia de dados', function(){

    it('Testa leitura de dados', () =>{
        const robot = createSheetRobot(content)
        robot.start()
        assert.ok(content.workBook)
    });

    it('Testa conversao de xlss para json', () =>{
        const robot = createJsonRobot(content)
        robot.start()
        assert.ok(content.json)
    });

    it('Testa a normalizacao dos dados presentes no campo `descricaoMaterial`', () =>{
        const robot = createNormalizeRobot(content)
        //console.log(content.json)
        robot.start()        
        assert.ok(content.jsonNormalized)
    });
})
