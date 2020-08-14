class MaterialType {

    static aba(){
        return 0
    }

    static jsonForType(json) {
        return json.map(
            element => {
                return {
                    'tipoMaterial': 'Material',
                    'codigoGrupoMaterial': element.__EMPTY,
                    'descricaoGrupoMaterial': element.__EMPTY_1,
                    'codigoClasseMaterial': element.__EMPTY_2,
                    'descricaoClasseMaterial': element.__EMPTY_3,
                    'codigoPadraoDescMaterial': element.__EMPTY_4,
                    'descricaoPadraoDescMaterial': element.__EMPTY_5,
                    'codigoMaterial': element.__EMPTY_6,
                    'descricaoMaterial': element.__EMPTY_7,
                    'situacaoMaterial': element.__EMPTY_8,
                    'indItemSustentavel': element.__EMPTY_9
                };
            }
        );
    }
}

module.exports = MaterialType