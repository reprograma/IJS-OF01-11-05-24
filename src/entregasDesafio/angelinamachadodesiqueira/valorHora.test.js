const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('calcular valor por hora', () => {
    test('deve retornar 29 quando renda mensal 5000', () => {
        const esperado = 29;
        const retornado = calcularValorPorHora(5000);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 43 quando renda mensal 7500', () => {
        const esperado = 43;
        const retornado = calcularValorPorHora(7500);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 23 quando renda mensal 4000', () => {
        const esperado = 23;
        const retornado = calcularValorPorHora(4000);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 6 quando renda mensal 1000', () => {
        const esperado = 6;
        const retornado = calcularValorPorHora(1000);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 2 quando renda mensal 200', () => {
        const esperado = 2;
        const retornado = calcularValorPorHora(200);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 36 quando renda mensal 6250 (valor não inteiro)', () => {
        const esperado = 36;
        const retornado = calcularValorPorHora(6250);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 57 quando renda mensal 10000', () => {
        const esperado = 57;
        const retornado = calcularValorPorHora(10000);
        expect(esperado).toBe(retornado);
    });
})