const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote'); 

test('deve retornar pacote_basico quando a duração do projeto é de 49 horas', () => {
    const esperado = 'pacote_basico';
    const retornado = calcularPacote(49);
    expect(retornado).toBe(esperado);
});

test('deve retornar pacote_intermediario quando a duração do projeto é de 100 horas', () => {
    const esperado = 'pacote_intermediario';
    const retornado = calcularPacote(100);
    expect(esperado).toBe(retornado);
});

test('deve retornar pacote_premium quando a duração do projeto é de 200 horas', () => {
    const esperado = 'pacote_premium';
    const retornado = calcularPacote(200);
    expect(esperado).toBe(retornado);
});