const { calcularHorasDeProjeto }=  require ("../../dominio/calculadora/Projeto/horasPorProjeto");

describe ('Calculo de horas totais de um projeto', ()=>{
    test('Dado uma array com as funcionalidades desejadas do projeto, deve retornar a soma de horas necessarias totais', ()=>{

    const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "formulario",
        "ssr",
    ]
    
    const result = calcularHorasDeProjeto(funcionalidades)

    expect(result).toEqual(72)

    })

})