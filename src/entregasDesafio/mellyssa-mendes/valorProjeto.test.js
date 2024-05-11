const { calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('calcula valor total do projeto com o pacote basico', () => {
    test('deve retornar 1584 quando o valor hora for de 45 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
        const funcionalidades = ['responsividade', 'otimizacao_seo'];
        const valorHora = 45;
        const esperado = 1584;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(esperado).toBe(retornado)
    })

})

describe('calcular valor total do projeto quando o pacote for intermediario', () => {  
    test('deve retornar 4032 quando valor hora for 75 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = ['setup', 'formulario', 'ssr', 'integracao_api_propria'];
        const valorHora = 75;
        const esperado = 4032;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    })
})

describe('calcular valor total do projeto quando o pacote for premim', () => {
    test('deve retornar 8740 quando valor hora for 95 reais', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
        const funcionalidades = ['formulario', 'responsividade', 'integracao_mailchimp', 'otimizacao_seo', 'integracao_api_propria'];
        const valorHora = 95;

        const esperado = 8740;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    })
})
