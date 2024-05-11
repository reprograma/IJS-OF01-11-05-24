const { calcularValorTotalProjeto } = require('./valorProjeto');
const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../constantes/constantes');
const { calcularHorasDeProjeto } = require('./horasPorProjeto');
const { calcularPacote } = require('./pacote');

describe('Calcular Valor Total do Projeto', () => {
  test('Deve calcular corretamente o valor total do projeto com base nas funcionalidades e valor por hora', () => {
    const funcionalidades = ['setup', 'formulario', 'responsividade'];
    const valorHora = 10; // Valor por hora fictício para os testes

    // Calcular o total de horas do projeto com base nas funcionalidades
    const totalDeHoras = calcularHorasDeProjeto(funcionalidades);

    // Calcular o pacote com base no total de horas
    const pacote = calcularPacote(totalDeHoras);

    // Obter a taxa contratual correspondente ao pacote
    const taxaContratual = TAXAS_CONTRATUAIS_POR_PACOTE[pacote];

    // Calcular o valor base do projeto (total de horas * valor hora)
    const valorBaseProjeto = totalDeHoras * valorHora;

    // Calcular o valor total esperado do projeto com base na taxa contratual
    const valorTotalEsperado = Math.round(valorBaseProjeto * taxaContratual);

    // Testar a função calcularValorTotalProjeto com as mesmas entradas
    const valorTotalCalculado = calcularValorTotalProjeto(funcionalidades, valorHora);

    // Exibir os valores calculados para depuração
    console.log('Valor Total Esperado:', valorTotalEsperado);
    console.log('Valor Total Calculado:', valorTotalCalculado);

    // Comparar o valor total calculado com o valor total esperado
    expect(valorTotalCalculado).toEqual(valorTotalEsperado);
  });
});