const {
  calcularValorBaseProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");

test("deve retornar 300 quando o valor da horas for 30 reais e o total de horas for 100", () => {
  const esperado = 300;
  const retornado = calcularValorBaseProjeto(100, 30);
  expect(esperado).toBe(retornado);
});

//Testando
