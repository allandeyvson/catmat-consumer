const core = require('./src/core')
const content = {
    archive : 'planilha_producao.xlsx'
}

function main(){
    const robot = core(content)
    robot.start()
}

main()