const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote");
describe("calcular valor total do projeto", () => {
  test("deve retornar 1584 quando valor hora for 30 reais", () => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
    const funcionalidades = [
      "setup",
      "formulario",
      "responsividade",
      "construcao_1_pagina",
    ];

    const valorHora = 30;
    const esperado = 1584;
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(esperado).toBe(retornado);
  });

  test("deve retornar 2984 quando valor hora for 37 reais", () => {
    pacote.calcularPacote.mockReturnValue("pacote_intermediario");
    const funcionalidades = [
      "setup",
      "formulario",
      "formulario",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ];

    const valorHora = 37;
    const esperado = 2984;
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(esperado).toBe(retornado);
  });

  test("deve retornar 10285 quando valor hora for 86 reais", () => {
    pacote.calcularPacote.mockReturnValue("pacote_premium");
    const funcionalidades = [
      "setup",
      "formulario",
      "formulario",
      "responsividade",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ];

    const valorHora = 86;
    const esperado = 10286;
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(esperado).toBe(retornado);
  });
});

describe("estressa o cálculo do valor total", () => {
  /*   beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_intermediario");
  }); */
  test.skip("deve retornar 1613 quando valor hora for 30 reais", () => {
    pacote.calcularPacote.mockReturnValue("pacote_intermediario");
    const funcionalidades = [
      "setup",
      "formulario",
      "responsividade",
      "construcao_1_pagina",
    ];

    const valorHora = 30;
    const esperado = 1584;
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(esperado).toBe(retornado);
  });

  test.skip("deve retornar 8703 quando valor hora for 86 reais", () => {
    pacote.calcularPacote.mockReturnValue("pacote_premium");
    const funcionalidades = [
      "setup",
      "formulario",
      "formulario",
      "responsividade",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ];

    const valorHora = 86;
    const esperado = 9000;
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(esperado).toBe(retornado);
  });
});
