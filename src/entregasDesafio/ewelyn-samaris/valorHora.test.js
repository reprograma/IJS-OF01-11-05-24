const {calcularValorPorHora} = require ('../../dominio/calculadora/Hora/valorHora')

describe('Calcular valor por hora', () => {
    test('Deve retornar 29 quando renda mensal for 5000', () => {
        const esperado = 29;
        const retornado = calcularValorPorHora(5000);
        expect(esperado).toBe(retornado);
    });

    test('Deve retornar 18 quando renda mensal for 3000', () => {
        const esperado = 18;
        const retornado = calcularValorPorHora(3000);
        expect(esperado).toBe(retornado);
    });
})
