const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');
//jest.mock('./pacote');

describe('calcular valor total do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
    });

    test('deve retornar 1584 quando valor hora for 30 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
        const valorHora = 30;
    
        const esperado = 1613;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 3727 quando valor hora for 52 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = ['formulario', 'responsividade', 'otimizacao_seo', 'integracao_api_propria'];
        const valorHora = 52;
    
        const esperado = 3727;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 3727 quando valor hora for 17 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = ['formulario', 'responsividade', ];
        const valorHora = 17;
        //32*17
        const esperado = 609;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });

    test('  quando valor hora for 200 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = ['formulario', 'responsividade','integracao_api_propria','integracao_mailchimp' ];
        const valorHora = 200;
    
        const esperado = 14336;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });

    test('  quando valor hora for 240 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = ['formulario', 'responsividade','integracao_api_propria','integracao_mailchimp' ];
        const valorHora = 240;
        //64*240
        const esperado = 17203;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });

});