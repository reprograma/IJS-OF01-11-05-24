const { calcularPacote } = require("../../Projeto/pacote");

test("deve retornar pacote_basico quando a duração do projeto é de 49 horas", () => {
  const esperado = "pacote_basico";
  const retornado = calcularPacote(49);
  expect(esperado).toBe(retornado);
});


test("deve retornar pacote_basico quando a duração do projeto é de 50 horas", () => {
  const esperado = "pacote_basico";
  const retornado = calcularPacote(50);
  expect(esperado).toBe(retornado);
});


test("deve retornar pacote_intermediario quando a duração do projeto é de 51 horas", () => {
  const esperado = "pacote_intermediario";
  const retornado = calcularPacote(51);
  expect(esperado).toBe(retornado);
});


test("deve retornar pacote_intermediario quando a duração do projeto é de 99 horas", () => {
  const esperado = "pacote_intermediario";
  const retornado = calcularPacote(99);
  expect(esperado).toBe(retornado);
});


test("deve retornar pacote_premium quando a duração do projeto é de 199 horas", () => {
  const esperado = "pacote_premium";
  const retornado = calcularPacote(51);
  expect(esperado).toBe(retornado);
});

test("deve retornar pacote_premium quando a duração do projeto é de 250 horas", () => {
  const esperado = "pacote_premium";
  const retornado = calcularPacote(250);
  expect(esperado).toBe(retornado);
});