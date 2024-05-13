const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe("valor por hora", () => {
  test("retornar o valor arredondado correto dado um valor recebido no mês", () => {
    const valorPorMes = 5000;

    const result = calcularValorPorHora(valorPorMes);

    expect(result).toEqual(29);
  });


  test("retornar o valor arredondado correto para valor por mês igual a 0", () => {
    const valorPorMes = 0;

    const result = calcularValorPorHora(valorPorMes);

    expect(result).toEqual(0);
  });

  test("retornar o valor arredondado correto para valor por mês menor que 1000", () => {
    const valorPorMes = 999;

    const result = calcularValorPorHora(valorPorMes);

    expect(result).toEqual(6);
  });

  test("retornar o valor arredondado correto para valor por mês igual a 1000", () => {
    const valorPorMes = 1000;

    const result = calcularValorPorHora(valorPorMes);

    expect(result).toEqual(6);
  });

  test("retornar o valor arredondado correto para valor por mês maior que 1000 e menor que 2000", () => {
    const valorPorMes = 1500;

    const result = calcularValorPorHora(valorPorMes);

    expect(result).toEqual(9);
  });

  test("retornar o valor arredondado correto para valor por mês igual a 2000", () => {
    const valorPorMes = 2000;

    const result = calcularValorPorHora(valorPorMes);

    expect(result).toEqual(12);
  });

  test("retornar o valor arredondado correto para valor por mês maior que 2000", () => {
    const valorPorMes = 2500;

    const result = calcularValorPorHora(valorPorMes);

    expect(result).toEqual(15);
  });

});