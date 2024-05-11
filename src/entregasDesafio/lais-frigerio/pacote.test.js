const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote'); 

test('deve retornar pacote_basico quando a duração do projeto é de 49 horas', () => {
    const esperado = 'pacote_basico';
    const retornado = calcularPacote(49);
    expect('pacote_basico').toBe(retornado);
});

test('deve retornar pacote_basico quando a duração do projeto é de 50 horas', () => {
    const esperado = 'pacote_basico';
    const retornado = calcularPacote(50);
    expect(esperado).toBe(retornado);
});

test('deve retornar pacotpacote_intermediarioe_basico quando a duração do projeto é de 51 horas', () => {
    const esperado = 'pacote_intermediario';
    const retornado = calcularPacote(51);
    expect(esperado).toBe(retornado);
});