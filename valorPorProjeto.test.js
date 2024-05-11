const {
    calcularValorTotalProjeto,} = require("../../dominio/calculadora/Projeto/valorProjeto");
  const pacote = require("../../dominio/calculadora/Projeto/pacote");
  
  jest.mock("../../dominio/calculadora/Projeto/pacote.js");
  
  describe("Valor do Projeto", () => {
    beforeEach(() => {
      pacote.calcularPacote.mockReturnValue("pacote_basico");
    });
    test("retorna valor total para um projeto dadas as funcionalidades por projeto pedidas e o valor da hora da trabalhada", () => {
      const funcionalidades = [
        "setup",
        "formulario",
        "responsividade",
        "construcao_1_pagina",
      ];
  
      const valorHora = 70;
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);
  
      expect(result).toEqual(3696);
    });

    pacote.calcularPacote.mockReturnValue("pacote_intermediário");
    });
    test("retorna valor total para um projeto dadas as funcionalidades por projeto pedidas e o valor da hora trabalhada", () => {
        const funcionalidades = [
          "setup",
          "formulario",
          "otimizacao_seo",
          "construcao_1_pagina",
          "ssr",
        ];
    
        const valorHora = 90;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        expect(result).toEqual(5544);
      });
      
