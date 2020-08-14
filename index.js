const core = require('./src/core')
const app = require('./src/app')
const content = {
    archive : 'planilha_producao.xlsx'
}

async function main(){

    const webSearch = app()
    webSearch.start()
}

main()