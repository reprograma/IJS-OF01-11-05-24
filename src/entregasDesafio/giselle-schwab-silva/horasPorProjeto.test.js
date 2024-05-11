const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe ('calcular horas de proheto', () => {
    test('deve retornar 16 quando é apenas um formulário', () => {
        const funcionalidades = ['formulario'];
        const esperado = 16;
        const retornado = calcularHorasDeProjeto(funcionalidades);
    
        expect(esperado).toBe(retornado);
    })
    
    
    test('deve retornar 48 quando são dois formulário', () => {
        const funcionalidades = ['formulario', 'formulario', 'construcao_1_pagina', 'construcao_1_pagina'];
        const esperado = 48;
        const retornado = calcularHorasDeProjeto(funcionalidades);
    
        expect(esperado).toBe(retornado);
    })

})