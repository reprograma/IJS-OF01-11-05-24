const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Calcula o valor por cada hora trabalhada', () => {
    test('deve retornar 29 quando renda mensal 5000', () => {
        const esperado = 29;
        const retornado = calcularValorPorHora(5000)
        expect (esperado).toBe(retornado);
    });

    test('deve retornar 40 quando renda mensal 7000', () => {
        const esperado = 40;
        const retornado = calcularValorPorHora(7000)
        expect (esperado).toBe(retornado);
    });

    test('deve retornar 69 quando renda mensal 12000', () => {
        const esperado = 69;
        const retornado = calcularValorPorHora(12000)
        expect (esperado).toBe(retornado);
    });

    test('deve retornar 171 quando renda mensal 30000', () => {
        const esperado = 171;
        const retornado = calcularValorPorHora(30000)
        expect (esperado).toBe(retornado);
    });
})
