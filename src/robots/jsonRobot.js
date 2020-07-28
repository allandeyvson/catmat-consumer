const XLSX = require('xlsx');

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
        var sheetCatMatName = content.workBook.SheetNames[0];
        var workSheetCatMat = content.workBook.Sheets[sheetCatMatName];
        var jsonCatMat = XLSX.utils.sheet_to_json(workSheetCatMat);

        var json = jsonCatMat.filter(element => {
            var index = jsonCatMat.indexOf(element);
            if (index > 4) {
                return element;
            }
        });

        content.json = json.map(
            element => {
                return {
                    'codigoGrupoMaterial' : element.__EMPTY,
                    'descricaoGrupoMaterial' : element.__EMPTY_1,
                    'codigoClasseMaterial' : element.__EMPTY_2,
                    'descricaoClasseMaterial' : element.__EMPTY_3,
                    'codigoPadraoDescMaterial' : element.__EMPTY_4,
                    'descricaoPadraoDescMaterial' : element.__EMPTY_5,
                    'codigoMaterial' : element.__EMPTY_6,
                    'descricaoMaterial' : element.__EMPTY_7, 
                    'situacaoMaterial' : element.__EMPTY_8, 
                    'indItemSustentavel': element.__EMPTY_9
                }
            }
        )
    }
}
module.exports = createJsonRobot