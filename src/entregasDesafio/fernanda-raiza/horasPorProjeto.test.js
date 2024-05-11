const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calcular horas de projeto', () => {

    test('deve retornar 16 quando é apenas um formulário', () => {
        const funcionalidades = ['formulario'];
    
        const esperado = 16;
        const retornado = calcularHorasDeProjeto(funcionalidades);
        expect(esperado).toBe(retornado);
    });
    
    test('deve retornar 48 quando é apenas um formulário por página', () => {
        const funcionalidades = ['formulario', 'formulario', 'construcao_1_pagina', 'construcao_1_pagina'];
    
        const esperado = 48;
        const retornado = calcularHorasDeProjeto(funcionalidades);
        expect(esperado).toBe(retornado);
    });
    
    test('deve retornar 112 quando é apenas um formulário, responsividade e otimização por página', () => {
        const funcionalidades = ['formulario', 'formulario', 'construcao_1_pagina', 'construcao_1_pagina', 'responsividade', 'responsividade', 'otimizacao_seo', 'otimizacao_seo'];
    
        const esperado = 112;
        const retornado = calcularHorasDeProjeto(funcionalidades);
        expect(esperado).toBe(retornado);
    });
});

