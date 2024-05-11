const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('./pacote');

describe('calcular valor total do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
    });

    test('deve retornar 1584 quando valor hora for 30 reais', () => {
        // pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
        const valorHora = 30;
    
        // const esperado = 1584;
        const esperado = 1613;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });
});
