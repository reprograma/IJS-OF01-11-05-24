const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcular o pacote', () => {
    test('deve retornar pacote_basico quando a duracao do projeto é de 49 horas', () => {
        const esperado = 'pacote_basico';
        const retornado = calcularPacote(49);
        expect(esperado).toBe(retornado);
    })

    test('deve retornar pacote_basico quando a duracao do projeto é de 50 horas', () => {
        const esperado = 'pacote_basico';
        const retornado = calcularPacote(50);
        expect(esperado).toBe(retornado);
    })

    test('deve retornar pacote_intermediario quando a duracao do projeto é de 51 horas', () => {
        const esperado = 'pacote_intermediario';
        const retornado = calcularPacote(51);
        expect(esperado).toBe(retornado);
    })

    test('deve retornar pacote_premium quando a duracao do projeto é de 200 horas', () => {
        const esperado = 'pacote_premium';
        const retornado = calcularPacote(200);
        expect(esperado).toBe(retornado);
    })

    test('deve retornar pacote_premium quando a duracao do projeto é de 199 horas', () => {
        const esperado = 'pacote_premium';
        const retornado = calcularPacote(199);
        expect(esperado).toBe(retornado);
    })
});