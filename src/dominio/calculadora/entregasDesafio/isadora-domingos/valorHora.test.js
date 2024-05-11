const { calcularValorPorHora } = require("../../Hora/valorHora");

// agrupamento de testes em comum
describe("calcular valor por hora", () => {
  test("deve retornar 29 quando renda mensal 5000", () => {
    const esperado = 29;
    const retornado = calcularValorPorHora(5000);
    expect(esperado).toBe(retornado);
  });



describe("calcular valor por hora", () => {
  test("deve retornar 35 quando renda mensal 3500", () => {
    const esperado = 29;
    const retornado = calcularValorPorHora(3500);
    expect(esperado).toBe(retornado);
  });
});
