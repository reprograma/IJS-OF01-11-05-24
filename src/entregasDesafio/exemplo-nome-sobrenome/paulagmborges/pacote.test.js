const { calcularPacote } = require('../../../dominio/calculadora/Projeto/pacote'); 

describe('calcularPacote', () =>{
test('deve retornar pacote_basico quando a duração do projeto é de 49 horas', () => {
    const esperado = 'pacote_basico';
    const retornado = calcularPacote(49);
    expect(esperado).toBe(retornado);
});

test('deve retornar pacote_basico quando a duração do projeto é até 50 horas', () => {
    const esperado = 'pacote_basico';
    const retornado = calcularPacote(50);
    expect(esperado).toBe(retornado);
});

test('deve retornar pacote_intermediario quando a duração do projeto é de 51 horas até 100 horas', () => {
    const esperado = 'pacote_intermediario';
    const retornado = calcularPacote(51);
    expect(esperado).toBe(retornado);
});
});



  