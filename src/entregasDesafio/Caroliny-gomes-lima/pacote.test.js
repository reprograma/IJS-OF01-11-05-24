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


//--------------------------------------------------------------------

test('não deve retornar pacote_basico quando a duração do projeto é de 98 horas', () => {
    const esperado = 'pacote_basico';
    const retornado = calcularPacote(98);
    expect('pacote_basico').not.toBe(retornado);
});

test('não deve retornar pacote_intermediario quando a duração do projeto é de 110 horas', () => {
    const esperado = 'pacote_intermediario';
    const retornado = calcularPacote(110);
    expect(esperado).not.toBe(retornado);
});

test('não deve retornar pacote_premium quando a duração do projeto é de 201 horas', () => {
    const esperado = 'pacote_premium';
    const retornado = calcularPacote(201);
    expect(esperado).not.toBe(retornado);
});