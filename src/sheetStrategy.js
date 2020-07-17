var XLSX = require('xlsx');


class SheetStrategy {

    constructor(archive) {
        this.archive = archive;
    }

    readFile() {
        var workbook = XLSX.readFile(this.archive);
        return workbook;
    }

    transformJson(workbook) {
        var sheetCatMatName = workbook.SheetNames[0];
        var workSheetCatMat = workbook.Sheets[sheetCatMatName]
        var jsonCatMat = XLSX.utils.sheet_to_json(workSheetCatMat);

        const jsonClean = jsonCatMat.filter(element => {
            var index = jsonCatMat.indexOf(element);
            if (index > 4)
                return element;            
        })
        return jsonClean;
    }
}

module.exports = SheetStrategy
