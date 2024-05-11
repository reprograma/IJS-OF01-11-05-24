const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('./pacote');
describe('calcular valor total do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
    });

    test('deve retornar 1584 quando valor hora for 30 reais', () => {
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
        const valorHora = 30;
    
        const esperado = 1613;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });
});

describe('calcular valor total do projeto', () => {
    beforeEach(() => {pacote.calcularPacote.mockReturnValue('pacote_basico');
    });

    test('deve retornar 360 quando valor hora for 15 reais', () => {
        const funcionalidades = ['setup', 'formulario'];
        const valorHora = 15;
    
        const esperado = 360;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });
});

describe('calcular valor total do projeto', () => {
    beforeEach(() => {pacote.calcularPacote.mockReturnValue('pacote_premium');
    });

    test('deve retornar 4160 quando valor hora for 52 reais', () => {
        const funcionalidades = ['setup', 'formulario', 'integracao_mailchimp', 'otimizacao_seo','responsividade', 'construcao_1_pagina'];
        const valorHora = 52;
    
        const esperado = 4160;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });
});