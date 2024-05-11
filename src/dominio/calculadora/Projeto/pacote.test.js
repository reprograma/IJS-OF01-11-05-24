const { calcularPacote } = require("./pacote");

describe("calcula o pacote de acordo com a quantidade de horas", () => {
  test("deve retornar pacote básico quando valor das horas for 49h", () => {
    const esperado = "pacote_basico";
    const retornado = calcularPacote(49);

    expect(esperado).toBe(retornado);
  });

  test("deve retornar pacote básico quando valor das horas for 49h", () => {
    const esperado = "pacote_intermediario";
    const retornado = calcularPacote(56);

    expect(esperado).toBe(retornado);
  });

  test("deve retornar pacote básico quando valor das horas for 49h", () => {
    const esperado = "pacote_premium";
    const retornado = calcularPacote(112);

    expect(esperado).toBe(retornado);
  });
});
