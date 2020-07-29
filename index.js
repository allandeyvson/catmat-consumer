const core = require('./src/core')
const app = require('./src/app')
const content = {
    archive : 'planilha_producao.xlsx'
}

function main(){
    //const robot = core(content)
    //await robot.start()

    const webSearch = app()
    webSearch.start()
}

main()