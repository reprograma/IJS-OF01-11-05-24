const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe ('calcular horas de projeto', () => {
    test('deve retornar 16 quando é apenas um formulário', () => {
        const funcionalidades = ['formulario'];
        const esperado = 16;
        const retornado = calcularHorasDeProjeto(funcionalidades);

        expect(esperado).toBe(retornado);
    })


    test('deve retornar 24 horas quando é um formulário e uma construção de página', () => {
        const funcionalidades = ['formulario', 'construcao_1_pagina'];
        const esperado = 24;
        const retornado = calcularHorasDeProjeto(funcionalidades);

        expect(esperado).toBe(retornado);
    })

    test('deve retornar 0 horas quando não é informada nenhuma funcionalidade', () => {
        const funcionalidades = [];
        const esperado = 0;
        const retornado = calcularHorasDeProjeto(funcionalidades);

        expect(esperado).toBe(retornado);
    })
});
