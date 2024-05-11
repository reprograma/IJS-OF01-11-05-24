const { calcularValorTotalProjeto } = require("./valorProjeto");
const { calcularPacote } = require("./pacote");

jest.mock("./pacote");

describe("calcular valor total do projeto", () => {
  test("deve retornar 1613 quando o valor hora for 30 reais", () => {
    pacote.calcularPacote.mockReturnValue("pacote_intermediario");
    const funcionalidades = [
      "setup",
      "formulario",
      "responsividade",
      construcao_1_pagina,
    ];
    const valorHora = 30;
    const esperado = 1613;
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(esperando).toBe(retornado);
  });
});
