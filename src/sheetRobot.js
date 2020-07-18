const XLSX = require('xlsx');

function createSheetRobot(content = {}) {
    
    function start() {
        content.workBook = XLSX.readFile(content.archive);        
    }

    return {
        start
    }
}
module.exports = createSheetRobot