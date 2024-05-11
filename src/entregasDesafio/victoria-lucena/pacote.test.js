const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote');

test('deve retornar pacote basico', () => {
 const esperado = 'pacote_basico';
 const retornado = calcularPacote(49);

 expect(esperado).toBe(retornado);
});

test('deve retornar pacote basico', () => {
 const esperado = 'pacote_basico';
 const retornado = calcularPacote(50);

 expect(esperado).toBe(retornado);
})

test('deve retornar pacoteintermediario', () => {
 const esperado = 'pacote_intermediario';
 const retornado = calcularPacote(51);

 expect(esperado).toBe(retornado);
})

test('deve retornar pacote premium', () => {
 const esperado = 'pacote_premium';
 const retornado = calcularPacote(101);

 expect(esperado).toBe(retornado);
})