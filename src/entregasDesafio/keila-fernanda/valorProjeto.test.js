const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('calcular valor total do projeto', () => {
 

    test('deve retornar 1613 quando valor hora for 30 reais e pacote for intermediario', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
        const valorHora = 30;
    
        const esperado = 1613;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });


    test('deve retornar 1584 quando valor hora for 30 reais e o pacote for basico', () => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
        const valorHora = 30;
    
        const esperado =  1584;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });



    test('deve retornar 1656 quando valor hora for 30 reais e o pacote for premium', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
        const valorHora = 30;
    
        const esperado = 1656;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });


});



