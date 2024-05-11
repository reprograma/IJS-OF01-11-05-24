const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote')

// teste pacote basico usando mock:

describe('calcula valor total do projeto pacote básico', () => {
  test('deve retornar 1056 quando valor hora for 30 reais', () => {
    pacote.calcularPacote.mockReturnValue('pacote_basico')

    const funcionalidades = [
      'setup',
      'formulario',
      'ssr'
    ]
    const valorHora = 30

    const esperado = 1056;
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)

    expect(esperado).toBe(retornado)
  })

  test('deve retornar 1320 quando valor hora for 25 reais', () => {
    pacote.calcularPacote.mockReturnValue('pacote_basico')

    const funcionalidades = [
      'setup',
      'formulario',
      'ssr',
      'formulario'
    ]
    const valorHora = 25

    const esperado = 1320;
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)

    expect(esperado).toBe(retornado)
  })

})


// teste pacote intermediario usando mock:

describe('calcula valor total do projeto', () => {
  test('deve retornar 2867 quando valor hora for 40 reais', () => {
    pacote.calcularPacote.mockReturnValue('pacote_intermediario')

    const funcionalidades = [
      'setup',
      'formulario',
      'responsividade',
      'construcao_1_pagina',
      'integracao_api_propria', 
    ]
    const valorHora = 40

    const esperado = 2867;
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)

    expect(esperado).toBe(retornado)
  })

  test('deve retornar 2697 quando valor hora for 43 reais', () => {
    pacote.calcularPacote.mockReturnValue('pacote_intermediario')

    const funcionalidades = [
      'setup',
      'formulario',
      'responsividade',
      'construcao_1_pagina',
      'ssr'
    ]
    const valorHora = 43

    const esperado = 2697;
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)

    expect(esperado).toBe(retornado)
  })
})


// teste pacote premium usando mock

describe('calcula valor total do projeto pacote premium', () => {
  test('deve retornar 13800 quando valor hora for 100 reais', () => {
    pacote.calcularPacote.mockReturnValue('pacote_premium')

    const funcionalidades = [
      'setup',
      'formulario',
      'responsividade',
      'construcao_1_pagina',
      'integracao_mailchimp',
      'integracao_api_propria',
      'integracao_api_propria',
      'ssr',
      'otimizacao_seo'
    ]
    const valorHora = 100

    const esperado = 13800;
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)

    expect(esperado).toBe(retornado)
  })

  test('deve retornar 4140 quando valor hora for 30 reais', () => {
    pacote.calcularPacote.mockReturnValue('pacote_premium')

    const funcionalidades = [
      'setup',
      'formulario',
      'responsividade',
      'construcao_1_pagina',
      'integracao_mailchimp',
      'integracao_api_propria',
      'integracao_mailchimp',
      'ssr',
      'formulario'
    ]
    const valorHora = 30

    const esperado = 4140;
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)

    expect(esperado).toBe(retornado)
  })
})
