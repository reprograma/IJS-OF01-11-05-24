const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('Calcular valor final total do projeto', () => {
    test('Deve retornar 1613 quando o valor da hora for 30 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina' ];
        const valorHora = 30;
    
        const esperado = 1613;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    });

    test('Deve retornar 3588 quando o valor da hora for 30 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
        const funcionalidades = ['setup', 'formulario', 'formulario', 
        'responsividade', 'construcao_1_pagina', 
        'construcao_1_pagina','integracao_api_propria', 'otimizacao_seo'];
        const valorHora = 30;
    
        const esperado = 3588;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    });

    test('Deve retornar 1584 quando o valor da hora for 30 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
        const funcionalidades = ['setup', 'formulario',  
        'responsividade', 'construcao_1_pagina', ];
        const valorHora = 30;
    
        const esperado = 1584;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    });

    test('Deve retornar 528 quando o valor da hora for 10 reais', () => {
        const funcionalidades = ['setup', 'formulario',  
        'responsividade', 'construcao_1_pagina', ];
        const valorHora = 10;
    
        const esperado = 528;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    });
})

