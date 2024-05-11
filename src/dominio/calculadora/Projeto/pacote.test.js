const { calcularPacote } = require('./pacote');

test('deve retornar pacote_basico quando a duraçao é de 49 horas', () => {
    const esperado = 'pacote_basico';
    const retornado = calcularPacote(49);
    expect(esperado).toBe(retornado);

});