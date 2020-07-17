var assert = require('assert');
var SheetStrategy = require('../src/sheetStrategy');

const sheetTest = './test/planilha.xlsx';

describe('Suite de testes da estrategia de leitura/conversao/persistencia de dados', function(){

    it('Testa leitura de dados', () =>{
        const strategy = new SheetStrategy(sheetTest);
        const workBook = strategy.readFile();       
        assert.ok(workBook)
    });

    it('Testa a conversao da planilha em json', function(){
        const strategy = new SheetStrategy(sheetTest);
        const workBook = strategy.readFile();
        const json = strategy.transformJson(workBook);
        assert.equal(json.length, 3);
    })    
})