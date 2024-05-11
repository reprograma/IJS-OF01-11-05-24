const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("calcula quantidade de horas por funcionalidade do projeto", () => {
  test("deve retornar 16 quando é apenas um formulário", () => {
    const funcionalidades = ["formulario"];
    const esperado = 16;
    const retornado = calcularHorasDeProjeto(funcionalidades);

    expect(esperado).toBe(retornado);
  });

  test("deve retornar 48h quando são duas páginas", () => {
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

  test("deve retornar 72h quando são duas páginas, um setup e integração de mesma api para ambas paginas", () => {
    const funcionalidades = [
      "setup",
      "formulario",
      "formulario",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "integracao_api_propria",
    ];
    const esperado = 72;
    const retornado = calcularHorasDeProjeto(funcionalidades);

    expect(esperado).toBe(retornado);
  });
});
