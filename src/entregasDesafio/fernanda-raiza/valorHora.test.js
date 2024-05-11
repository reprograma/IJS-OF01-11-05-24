const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('calcular valor por hora', () => {

    test('deve retornar 29 quando renda mensal 5000', () => {
        const esperado = 29;
        const retornado = calcularValorPorHora(5000);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 60 quando renda mensal 10550', () => {
        const esperado = 60;
        const retornado = calcularValorPorHora(10550);
        expect(esperado).toBe(retornado);
    });

});
