const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcular pacote', () => {
    test('deve retornar pacote_basico quando a duração do projeto é 49h', () => {
        const esperado = 'pacote_basico';
        const retornado = calcularPacote(49);
    
        expect(esperado).toBe(retornado);
    });

    test('deve retornar pacote_basico quando a duração do projeto é 50h', () => {
        const esperado = 'pacote_basico';
        const retornado = calcularPacote(50);
    
        expect(esperado).toBe(retornado);
    });

    test('deve retornar pacote_basico quando a duração do projeto é 10h', () => {
        const esperado = 'pacote_basico';
        const retornado = calcularPacote(10);
    
        expect(esperado).toBe(retornado);
    });

    test('deve retornar pacote_intermediario quando a duração do projeto é 51h', () => {
        const esperado = 'pacote_intermediario';
        const retornado = calcularPacote(51);
    
        expect(esperado).toBe(retornado);
    });

    test('deve retornar pacote_intermediario quando a duração do projeto é 199h', () => {
        const esperado = 'pacote_premium';
        const retornado = calcularPacote(199);
    
        expect(esperado).toBe(retornado);
    });

    test('deve retornar pacote_premium quando a duração do projeto é 200h', () => {
        const esperado = 'pacote_premium';
        const retornado = calcularPacote(200);
    
        expect(esperado).toBe(retornado);
    });

    test('deve retornar pacote_basico quando a duração do projeto é 35h', () => {
        const esperado = 'pacote_basico';
        const retornado = calcularPacote(35);
    
        expect(esperado).toBe(retornado);
    });
    
});