const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('calcular valor por hora', () => {
    test('deve retornar 29 quando renda mensal 5000', () => {
        const esperado = 29;
        const retornado = calcularValorPorHora(5000);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 57 quando renda mensal 10000', () => {
        const esperado = 57;
        const retornado = calcularValorPorHora(10000);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 45 quando renda mensal 9000', () => {
        const esperado = 52;
        const retornado = calcularValorPorHora(9000);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 65 quando renda mensal 13000', () => {
        const esperado = 74;
        const retornado = calcularValorPorHora(13000);
        expect(esperado).toBe(retornado);
    });
})