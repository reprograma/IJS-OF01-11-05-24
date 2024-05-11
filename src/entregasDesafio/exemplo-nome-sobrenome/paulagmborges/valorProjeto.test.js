const { calcularValorTotalProjeto } = require("../../../dominio/calculadora/Projeto/valorProjeto")


const pacote = require("../../../dominio/calculadora/Projeto/pacote")

jest.mock("../../../dominio/calculadora/Projeto/pacote")

describe('calcular valor total do projeto', () =>{
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue("pacote_intermediario")
    })
 test("deve retornar 1613 quando o valor hora for 30 reais", () => {
    
    const funcionalidades =[
    "setup",
    "formulario",
    "responsabilidade",
    "construcao_1_pagina"]
    const valorHora = 30
    
    const esperado = 1613
    const retornado= calcularValorTotalProjeto(funcionalidades, valorHora)
 expect (esperado).toBe(retornado)
})

})