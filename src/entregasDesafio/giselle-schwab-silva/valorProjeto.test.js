const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require('../../dominio/calculadora/Projeto/pacote');


jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('calcular valor total do projeto', () => {
    test('deve retornar 1613 quando valor hora for 30 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        //quando for um BD isso é bom para testar, mockar o dado em vez de fazer diretamente no banco de dados
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
        const valorHora = 30;

        const esperado = 1613;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    });

    test('deve retornar 1584 quando valor hora for 30 reais e pacote básico', () => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
        const valorHora = 30;

        const esperado = 1584;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    });

    test('deve retornar 3588 quando valor hora for 30 reais e pacote premium', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
        const funcionalidades = ['setup', 'formulario', 'formulario', 'responsividade', 'construcao_1_pagina', 'construcao_1_pagina', 'integracao_api_propria', 'otimizacao_seo'];

        const valorHora = 30;
        const esperado = 3588;

        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(retornado).toBe(esperado);
    });
});
