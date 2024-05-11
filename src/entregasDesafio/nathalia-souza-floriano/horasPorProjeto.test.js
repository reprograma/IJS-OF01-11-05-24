const { calcularHorasDeProjeto } = require('./horasPorProjeto');

describe('Calcular Horas de Projeto', () => {
  test('Deve calcular corretamente o total de horas do projeto baseado nas funcionalidades', () => {
    const funcionalidades = ['setup', 'formulario', 'responsividade'];
    expect(calcularHorasDeProjeto(funcionalidades)).toEqual(40); // Total de horas esperado para essas funcionalidades
  });
});
