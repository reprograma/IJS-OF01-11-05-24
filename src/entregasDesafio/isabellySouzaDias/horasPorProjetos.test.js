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

    test('deve retornar 32', () => {
        const funcionalidades = ['formulario', 'formulario', ];
    
        const esperado = 32;
        const retornado = calcularHorasDeProjeto(funcionalidades);
    
        expect(esperado).toBe(retornado);
        //console.log(retornado);
    });
    test('deve retornar 40', () => {
        const funcionalidades = ['setup', 'responsividade', 'ssr','construcao_1_pagina'];
    
        const esperado = 40;
        const retornado = calcularHorasDeProjeto(funcionalidades);
    
        expect(esperado).toBe(retornado);
        //console.log(retornado);
        
    });
    

});