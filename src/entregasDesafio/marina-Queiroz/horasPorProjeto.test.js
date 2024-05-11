const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calcular horas de projeto', () => {
    test('deve retornar 16 quando é apenas um formulário', () => {
        const funcionalidades = ['formulario'];
    
        const esperado = 16;
        const retornado = calcularHorasDeProjeto(funcionalidades);
    
        expect(esperado).toBe(retornado);
    });
    
    test('deve retornar 48 quando são 2 páginas com 1 formulário em cada', () => {
        const funcionalidades = ['formulario', 'formulario', 'construcao_1_pagina', 'construcao_1_pagina'];
    
        const esperado = 48;
        const retornado = calcularHorasDeProjeto(funcionalidades);
    
        expect(esperado).toBe(retornado);
    });
    test('deve retornar 40 quando são 2 páginas com 1 formulário em cada', () => {
        const funcionalidades = ['formulario', 'formulario', 'construcao_1_pagina', 'construcao_1_pagina'];
    
        const esperado = 40;
        const retornado = calcularHorasDeProjeto(funcionalidades);
    
        expect(esperado).toBe(retornado);
    });


    
    test('deve retornar 29 quando renda mensal 5000', () => {
        const esperado = 29;
        const retornado = calcularValorPorHora(5000)
        expect (esperado).toBe(retornado);
    });
});