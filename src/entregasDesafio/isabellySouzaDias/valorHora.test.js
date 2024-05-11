const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('calcular valor por hora', () => {
    test('deve retornar 29 quando renda mensal 5000', () => {
        const esperado = 29;
        const retornado = calcularValorPorHora(5000);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar ??? quando renda mensal 10000', () => {
        const esperado = 1;
        const retornado = calcularValorPorHora(100);
        expect(esperado).toBe(retornado);
    });
    test('deve retornar ??? quando renda mensal 10000', () => {
        const esperado = 20;
        const retornado = calcularValorPorHora(3500);
        expect(esperado).toBe(retornado);
    });
})