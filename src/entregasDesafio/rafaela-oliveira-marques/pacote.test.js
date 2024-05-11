const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

test("deve retornar pacote_basico quando a duração do projeto for de 49 horas", () => {
  const esperado = "pacote_basico";
  const retornado = calcularPacote(49);
  expect("pacote_basico").toBe(retornado);
});

test("deve retornar pacote_basico quando a duração do projeto for de 50 horas", () => {
  const esperado = "pacote_basico";
  const retornado = calcularPacote(50);
  expect(esperado).toBe(retornado);
});

test("deve retornar pacote_intermediario quando a duração do projeto for de 51 horas", () => {
  const esperado = "pacote_intermediario";
  const retornado = calcularPacote(51);
  expect(esperado).toBe(retornado);
});

test("deve retornar pacote_intermediario quando a duração do projeto for de 100 horas", () => {
  const esperado = "pacote_premium";
  const retornado = calcularPacote(101);
  expect(esperado).toBe(retornado);
});

test("deve retornar pacote_premium quando a duração do projeto for de 101 horas", () => {
  const esperado = "pacote_premium";
  const retornado = calcularPacote(101);
  expect(esperado).toBe(retornado);
});

test("deve retornar pacote_premium quando a duração do projeto for de 200 horas", () => {
  const esperado = "pacote_premium";
  const retornado = calcularPacote(200);
  expect(esperado).toBe(retornado);
});

test("Não deverá retornar pacote algum quando a duração do projeto for superior a 200 horas", () => {
  expect(() => calcularPacote(201)).toThrow();
});
