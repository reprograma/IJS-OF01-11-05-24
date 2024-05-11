const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

// agrupamento de testes em comum
describe('calcular valor por hora', () => {
    test('deve retornar 29 quando renda mensal 5000', () => {
        const esperado = 29;
        const retornado = calcularValorPorHora(5000);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 57 quando renda mensal 8000', () => {
        const esperado = 57;
        const retornado = calcularValorPorHora(10000);
        expect(esperado).toBe(retornado);
    });
    test('deve retornar 80 quando renda mensal 10000', () => {
        const esperado = 57;
        const retornado = calcularValorPorHora(10000);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 100 quando renda mensal 1300', () => {
        const esperado = 57;
        const retornado = calcularValorPorHora(10000);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar 150 quando renda mensal 1600', () => {
        const esperado = 57;
        const retornado = calcularValorPorHora(10000);
        expect(esperado).toBe(retornado);
    });
})

