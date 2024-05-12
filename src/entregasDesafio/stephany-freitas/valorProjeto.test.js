const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('calcular valor total do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
    });

    test('deve retornar 1584 quando valor hora for 30 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = ['setup', 'formulario'];
        const valorHora = 30;
        const esperado = 806;

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

    test('deve retornar 4416 quando valor hora for 30 reais e pacote premium', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
        const funcionalidades = ['setup', 'formulario', 'formulario', 'responsividade', 'construcao_1_pagina', 'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria', 'otimizacao_seo'];
        const valorHora = 30;
        const esperado = 4416;

        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(retornado).toBe(esperado);
    });
});
