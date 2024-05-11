const { calcularPacote } = require('./pacote');

describe('Calcular Pacote do Projeto', () => {
  test('Deve calcular o pacote correto com base no total de horas do projeto', () => {
    // Testar a função calcularPacote para diferentes total de horas por projeto
    expect(calcularPacote(40)).toEqual('pacote_basico'); // Deve retornar 'pacote_basico' para 40 horas
    expect(calcularPacote(80)).toEqual('pacote_intermediario'); // Deve retornar 'pacote_basico' para 80 horas
    expect(calcularPacote(100)).toEqual('pacote_intermediario'); // Deve retornar 'pacote_intermediario' para 100 horas
    expect(calcularPacote(150)).toEqual('pacote_intermediario'); // Deve retornar 'pacote_intermediario' para 150 horas
    expect(calcularPacote(200)).toEqual('pacote_premium'); // Deve retornar 'pacote_premium' para 200 horas
  });
});