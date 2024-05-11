const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcular horas por projeto', () => {
    test('deve retornar 8 quando é apenas um formulário', () => {
        const funcionalidades = ['formulario'];

        const esperado = 16;
        const retornado = calcularHorasDeProjeto(funcionalidades);

        expect(esperado).toBe(retornado);
    });

    test('deve retornar 48 quando são duas páginas com um formulário em cada', () => {
        const funcionalidades = ['formulario', 'formulario', 'construcao_1_pagina', 'construcao_1_pagina'];

        const esperado = 48;
        const retornado = calcularHorasDeProjeto(funcionalidades);

        expect(esperado).toBe(retornado);
    });

    test('deve retornar 104 quando é utilizada uma funcionalidade de cada', () => {
        const funcionalidades = ['setup',  'formulario', 'responsividade', 'otimizacao_seo', 'construcao_1_pagina', 'integracao_mailchimp', 'ssr',  'integracao_api_propria'];

        const esperado = 104;
        const retornado = calcularHorasDeProjeto(funcionalidades);

        expect(esperado).toBe(retornado);
    });

});