const { calcularPacote} = require('../../dominio/calculadora/Projeto/pacote');

test('deve retornar pacote_basico quando a duração do projeto é de 49 horas', () => {
    const esperado = 'pacote_basico';
    const retornado = calcularPacote(49);
    expect(esperado).toBe(retornado);
});

test('deve retornar pacote_basico quando a duração do projeto é de 50 horas', () => {
    const esperado = 'pacote_basico';
    const retornado = calcularPacote(50);
    expect(esperado).toBe(retornado);
});

test('deve retornar pacote_intermediario quando a duração do projeto é de 51 horas', () => {
    const esperado = 'pacote_intermediario';
    const retornado = calcularPacote(51);
    expect(esperado).toBe(retornado);
});

test('deve retornar pacote_intermediario quando a duração do projeto é de 99 horas', () => {
    const esperado = 'pacote_intermediario';
    const retornado = calcularPacote(99);
    expect(esperado).toBe(retornado);
});

test('deve retornar pacote_intermediario  quando a duração do projeto é de 100 horas', () => {
    const esperado = 'pacote_intermediario';
    const retornado = calcularPacote(100);
    expect(esperado).toBe(retornado);
});

test('deve retornar pacote_premium quando a duração do projeto é de 101 horas', () => {
    const esperado = 'pacote_premium';
    const retornado = calcularPacote(101);
    expect(esperado).toBe(retornado);
});