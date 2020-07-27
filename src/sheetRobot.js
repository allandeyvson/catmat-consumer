const XLSX = require('xlsx');

function createSheetRobot(content = {}) {
    
    function start() {
        console.log('passo 01: leitura de planilha iniciada')
        content.workBook = XLSX.readFile(content.archive);
        console.log('passo 01: leitura de planilha concluido')
    }

    return {
        start
    }
}
module.exports = createSheetRobot