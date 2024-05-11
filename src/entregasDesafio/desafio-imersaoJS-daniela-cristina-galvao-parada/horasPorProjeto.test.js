const { calcularValorPorHora } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calcularValorPorHora', () => {
  test('deve retornar 0 para uma renda mensal de 0', () => {
    // Arrange
    const rendaMensal = 0;


    

    // Act
    const valorPorHora = calcularValorPorHora(rendaMensal)

    // Assert
    expect(valorPorHora).toBe(0);
  });

  test('deve retornar 1 para uma renda mensal igual ao limite máximo de horas trabalhadas', () => {
    // Arrange
    const rendaMensal = 200 * calcularValorPorHora(1); // 200 horas * valor por hora (1)

    // Act
    const valorPorHora = calcularValorPorHora(rendaMensal);

    // Assert
    expect(valorPorHora).toBe(1);
  });

  test('deve retornar o valor arredondado para cima para uma renda mensal acima do limite máximo de horas trabalhadas', () => {
    // Arrange
    const rendaMensal = 201 * calcularValorPorHora(1); // 201 horas * valor por hora (1)

    // Act
    const valorPorHora = calcularValorPorHora(rendaMensal);

    // Assert
    expect(valorPorHora).toBe(Math.ceil(rendaMensal / 200)); // 201 horas / 200 horas = 1.005 => arredondado para cima = 2
  });

});
