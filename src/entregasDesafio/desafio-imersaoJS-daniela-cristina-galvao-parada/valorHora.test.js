const { calcularValorPorHora } = require('./valorHora');

describe('calcularValorPorHora', () => {
  test('deve retornar o valor correto por hora para uma renda mensal dada', () => {
    // Arrange
    const rendaMensal = 4000;
    const horasPorDia = 8;
    const diasUteisNoMes = 22;

    // Act
    const valorPorHora = calcularValorPorHora(rendaMensal);

    // Assert
    expect(valorPorHora).toBe(Math.ceil(rendaMensal / (horasPorDia * diasUteisNoMes)));
  });

});
