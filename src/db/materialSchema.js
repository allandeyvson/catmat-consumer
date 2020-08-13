const Mongoose = require('mongoose')

const MaterialSchema = new Mongoose.Schema({
    tipoMaterial:{
        type: String,
        required: true  
    },
    codigoGrupoMaterial:{
        type: String,
        required: true
    },
    descricaoGrupoMaterial:{
        type: String,
        required: true
    },
    codigoClasseMaterial:{
        type: String,
        required: true
    },
    descricaoClasseMaterial:{
        type: String,
        required: true
    },
    codigoPadraoDescMaterial:{
        type: String,
        required: true
    },
    descricaoPadraoDescMaterial:{
        type: String,
        required: true
    },
    codigoMaterial:{
        type: String,
        required: true
    },
    descricaoMaterial:{
        type: String,
        required: true
    },
    codigoGrupoMaterial:{
        type: String,
        required: true
    },
    indItemSustentavel:{
        type: String,
        required: true
    },
    tags:{
        type: [String],
        required: true
    }
})
module.exports = Mongoose.model('catmat', MaterialSchema)