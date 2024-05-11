const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

//jest.mock('./pacote');

describe('calcular valor total do projeto', () => {
    //beforeEach(() => {
    //    pacote.calcularPacote.mockReturnValue('pacote_intermediario');
    //});

    test('deve retornar 1584 quando valor hora for 30 reais', () => {
        //pacote.calcularPacote.mockReturnValue('pacote_basico');
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
        const valorHora = 30;
    
        
        const esperado = 1584;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 3584 quando valor hora for 50 reais', () => {
        //pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'otimizacao_seo', 'construcao_1_pagina'];
        const valorHora = 50;
        3200
        
        const esperado = 3584;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 4784 quando valor hora for 57 reais', () => {
        // pacote.calcularPacote.mockReturnValue('pacote_premium');
        const funcionalidades = ['setup', 'formulario','otimizacao_seo', 'responsividade', 'construcao_1_pagina', 'integracao_mailchimp','ssr','integracao_api_propria'];
        const valorHora = 40;
    
        
        const esperado = 4784;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(esperado).toBe(retornado);
    });
});