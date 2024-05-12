const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('calcular valor por hora', () => {
    test('deve retornar 29 quando renda mensal 5000', () => {
        const esperado = 29;
        const retornado = calcularValorPorHora(5000);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 57 horas quando renda mensal 10000', () => {
        const esperado = 57;
        const retornado = calcularValorPorHora(10000);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 114 horas quando renda mensal 20000', () => {
        const esperado = 114;
        const retornado = calcularValorPorHora(20000);
        expect(esperado).toBe(retornado);
    });
});
