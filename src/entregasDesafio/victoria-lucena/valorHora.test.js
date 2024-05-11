const { calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora')

describe('calcula valor por hora', () => {

 test('deve retornar 29 quando renda mensal 5000', () => {
  const esperado = 29;
  const retornado = calcularValorPorHora(5000);
  expect(esperado).toBe(retornado);
 })

 test('deve retornar 57 quando renda mensal 10000', () => {
  const esperado = 57;
  const retornado = calcularValorPorHora(10000);
  expect(esperado).toBe(retornado)
 })

 test('deve retornar 15 quando renda mensal 2500', () => {
  const esperado = 15;
  const retornado = calcularValorPorHora(2500);
  expect(esperado).toBe(retornado)
 })

 test('deve retornar 26 quando renda mensal 4500', () => {
  const esperado = 26;
  const retornado = calcularValorPorHora(4500);
  expect(esperado).toBe(retornado)
 })
})
