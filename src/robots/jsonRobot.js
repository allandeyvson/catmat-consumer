const XLSX = require('xlsx');
const material = require('./../types/material')
const service = require('./../types/service')
const fs = require('fs')
const f = require('../../data/data.json')

function createJsonRobot(content = {}) {

    function start() {
        console.log('passo 02: conversao de planilha em json iniciada')
        convert();
        console.log('passo 02: conversao de planilha em json concluida')
    }

    return {
        start,
        convert
    }

    function convert() {
        content.json = []
        convertForType(content, material);
        convertForType(content, service);
    }

    function convertForType(content, type) {
        var sheetCatMatName = content.workBook.SheetNames[type.aba()];
        var workSheetCatMat = content.workBook.Sheets[sheetCatMatName];
        var jsonCatMat = XLSX.utils.sheet_to_json(workSheetCatMat);

        var json = jsonCatMat.filter(element => {
            var index = jsonCatMat.indexOf(element);

            if (index === 1){
                fs.writeFileSync('./data/data.json', JSON.stringify(element))            
            } else if (index > 4) {
                return element;
            }
        });

        jsonSheet = type.jsonForType(json)
        content.json = content.json.concat(jsonSheet)
    }    
}
module.exports = createJsonRobot