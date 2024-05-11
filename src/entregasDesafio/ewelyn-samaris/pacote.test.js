const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Retorna tipo do pacote a depender das horas trabalhadas', () => {
    test('Deve retornar pacote básico quando a duração do projeto é de 49h', () => {
        const esperado = 'pacote_basico';
        const retornado = calcularPacote(49);
    
        expect(esperado).toBe(retornado);
    });
    
    test('Deve retornar pacote intermediario quando a duração do projeto é de 51h', () => {
        const esperado = 'pacote_intermediario';
        const retornado = calcularPacote(51);
    
        expect(esperado).toBe(retornado);
    });
    
    test('Deve retornar pacote básico quando a duração do projeto é de 50h', () => {
        const esperado = 'pacote_basico';
        const retornado = calcularPacote(50);
    
        expect(esperado).toBe(retornado);
    });
    
    test('Deve retornar pacote_premium quando a duração do projeto é de 200h', () => {
        const esperado = 'pacote_premium';
        const retornado = calcularPacote(200);
    
        expect(esperado).toBe(retornado);
    });
})