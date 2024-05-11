const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');
const { calcularValorPorHora } = require('./valorHora');

// agrupamento de testes em comum
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
})