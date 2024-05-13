const { calcularValorTotalProjeto } = require ('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require ('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')
describe ('Valor total do projeto', ()=>{
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })
    test('Retornar valor total de um projeto dado as funcionalidades e o valor da pessoa desenvoledora', ()=>{
       const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
    ]
    const valorHora = 70

    const result = calcularValorTotalProjeto(funcionalidades, valorHora)

    expect(result).toBe(3696)

    })

      test('Retornar valor total de um projeto sem funcionalidades', () => {
        const funcionalidades = [];

        const valorHora = 50; 

        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toBe(0);
      });
      
    });