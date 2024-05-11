const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("calcular valor por hora de serviço", () => {
  test("deve retornar 29 quando renda mensal for 5000", () => {
    const esperado = 29;
    const retornado = calcularValorPorHora(5000);

    expect(esperado).toBe(retornado);
  });

  test("deve retornar 57 quando renda mensal for 5000", () => {
    const esperado = 57;
    const retornado = calcularValorPorHora(10000);

    expect(esperado).toBe(retornado);
  });

  test("deve retornar 29 quando renda mensal for 5000", () => {
    const esperado = 37;
    const retornado = calcularValorPorHora(6500);

    expect(esperado).toBe(retornado);
  });
});

describe("verifica o arredondamento do valor final", () => {
  test("deve retornar 57 quando renda mensal 10000", () => {
    const esperado = 56.5;
    const retornado = calcularValorPorHora(10000);

    expect(esperado).toBe(retornado);
  });
});
