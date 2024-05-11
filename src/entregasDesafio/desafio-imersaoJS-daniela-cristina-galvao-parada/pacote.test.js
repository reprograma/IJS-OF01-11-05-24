const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcularPacote', () => {
  test('deve retornar o pacote correto para o total de horas abaixo do limite', () => {
    // Arrange
    const totalDeHorasPorProjeto = 10;

    // Act
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    // Assert
    expect(resultado).toBe('pacote1');
  });

  test('deve retornar o pacote correto para o total de horas igual ao limite', () => {
    // Arrange
    const totalDeHorasPorProjeto = 25;

    // Act
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    // Assert
    expect(resultado).toBe('pacote2');
  });

  test('deve retornar o pacote correto para o total de horas acima do limite', () => {
    // Arrange
    const totalDeHorasPorProjeto = 40;

    // Act
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    // Assert
    expect(resultado).toBe('pacote3');
  });
});

