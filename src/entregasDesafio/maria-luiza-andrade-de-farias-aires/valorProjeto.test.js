const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('calcula valor total do projeto', () => {
    // beforeEach(() => {
    //     pacote.calcularPacote.mockReturnValue('pacote_intermediario');
    // })
    
    test('deve retornar 1613 reais quando o valor hora for 30 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina']; //40
        const valorHora = 30;

        const esperado = 1613;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(esperado).toBe(retornado);
    });

    test('deve retornar 968 reais quando o valor hora for 22 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');

        const funcionalidades = ['formulario', 'ssr', 'responsividade']; //40
        const valorHora = 22; //22*40 = 880

        const esperado = 968; // 880 + 10% (plano_basico) = 968
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(esperado).toBe(retornado);
    });

    test('deve retornar 2150 reais quando o valor hora for 40 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = ['setup', 'ssr', 'formulario', 'responsividade',]; //48
        const valorHora = 40; // 48 * 40 = 1920

        const esperado = 2150; // 1920 + 12% (plano_intermediario) = 2150.4
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(esperado).toBe(retornado);
    });

    test('deve retornar 2539 reais quando o valor hora for 69 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');

        const funcionalidades = ['setup', 'ssr', 'integracao_api_propria']; //32
        const valorHora = 69; //32*69 = 2208

        const esperado = 2539; // 2208 + 15% (plano_premium) = 2539
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(esperado).toBe(retornado);
    });
})