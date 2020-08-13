class ServiceType {

    static aba(){
        return 1
    }

    static jsonForType(json) {
        return json.map(
            element => {
                return {
                    'tipoMaterial': 'Servico',
                    'codigoGrupoMaterial': element.__EMPTY,
                    'descricaoGrupoMaterial': element.__EMPTY_1,
                    'codigoClasseMaterial': element.__EMPTY_2,
                    'descricaoClasseMaterial': element.__EMPTY_3,
                    'codigoPadraoDescMaterial': '',
                    'descricaoPadraoDescMaterial': '',
                    'codigoMaterial': element.__EMPTY_4,
                    'descricaoMaterial': element.__EMPTY_5,                    
                    'indItemSustentavel': '',
                    'situacaoMaterial': element.__EMPTY_6
                };
            }
        );
    }
}

module.exports = ServiceType