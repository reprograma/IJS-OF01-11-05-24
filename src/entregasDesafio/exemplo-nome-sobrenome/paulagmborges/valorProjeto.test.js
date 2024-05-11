const { calcularValorTotalProjeto } = require("../../../dominio/calculadora/Projeto/valorProjeto")


const pacote = require("../../../dominio/calculadora/Projeto/pacote")

jest.mock("../../../dominio/calculadora/Projeto/pacote")

describe('calcular valor total do projeto', () =>{
 test("deve retornar 1584 quanodo o valor ora for 30 reais", () =>{
    pacote.calcularPacote.mockReturnValue("pacote_intermediario")
    const funcionalidades =["setup","formulario","responsabilidade","construcao_1_pagina"]
    const valorHora = 30
    
    const esperado = 1584
    const retornado= calcularValorTotalProjeto(funcionalidades, valorHora)
 expect (esperado).toBe(retornado)
})

})