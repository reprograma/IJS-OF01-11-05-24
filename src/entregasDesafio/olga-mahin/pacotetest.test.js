const {calcularPacote} = require ('../../dominio/calculadora/Projeto/pacote')
const {MAX_HORAS_POR_PACOTE} = require ('../../dominio/calculadora/constantes/constantes')
const pacote = require ('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe ('Calcular pacote correto para cada projeto', ()=>{
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_invalido')
    })
    test('Retornar pacote basico caso o numero de horas seja até 50h', ()=>{

    const totalDeHorasPorProjeto = 49;
    const result = calcularPacote(totalDeHorasPorProjeto)
    expect(result).toEqual('pacote_basico')
    })

    test('Retornar pacote basico caso o numero de horas seja exatamente 50', ()=>{
        const totalDeHorasPorProjeto = 50;
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual('pacote_basico')
    })

    test('Retornar pacote intermediario caso o numero de horas seja entre 51 e 100', ()=>{
        const totalDeHorasPorProjeto = 99;
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual('pacote_intermediario')
    })

    test('Retornar pacote intermediario caso o numero de horas seja exatamente 100', ()=>{
        const totalDeHorasPorProjeto = 100;
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual('pacote_intermediario')
    })

    test('Retornar pacote premium caso o numero de horas seja apartir de 199h', ()=>{
        const totalDeHorasPorProjeto = 199;
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual('pacote_premium')
    })

    test('Retornar pacote premium caso o número de horas seja 200', () => {
        const totalDeHorasPorProjeto = 200;
        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_premium');
      });
    
      test('Retornar pacote invalido caso o número de horas seja maior que 200', () => {
        const totalDeHorasPorProjeto = 300;
        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_invalido');
      });
})
