const { calcularValorPorHora } = require ("../../../dominio/calculadora/Hora/valorHora")


test("Deve retornar 29 quando a renda mensal 5000", () => {
const esperado = 29
const retornado = calcularValorPorHora(5000)
expect(esperado).toBe(retornado)
})