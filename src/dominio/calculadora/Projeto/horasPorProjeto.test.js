const { calcularHorasDeProjeto } = require("./horasPorProjeto");

describe("Calcular horas de projeto", () => {
  test("Deve retornar 16 quando é apenas um formulário", () => {
    const funcionalidades = ["formulario"];

    const esperado = 16;
    const retornado = calcularHorasDeProjeto(funcionalidades);

    expect(esperado).toBe(retornado);
  });

  test("Deve retornar 48 quando são 2 páginas e 2 formulários", () => {
    const funcionalidades = [
      "formulario",
      "formulario",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ];

    const esperado = 48;
    const retornado = calcularHorasDeProjeto(funcionalidades);

    expect(esperado).toBe(retornado);
  });
});