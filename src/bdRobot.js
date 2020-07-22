function createBdRobot(content = {}) {
    
    function start() {
        console.log(content.jsonNormalized)     
    }

    return {
        start
    }
}
module.exports = createBdRobot